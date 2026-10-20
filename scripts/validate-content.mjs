import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import ts from "typescript";
import sharp from "sharp";

// These content modules have type-only imports. Execute their emitted data so
// checks validate the actual records, including publication filtering.
function loadContent(file) {
  const source = fs.readFileSync(file, "utf8");
  const output = ts.transpileModule(source, {
    compilerOptions: {
      module: ts.ModuleKind.CommonJS,
      target: ts.ScriptTarget.ES2020,
    },
  }).outputText;
  const module = { exports: {} };
  new Function("exports", "module", output)(module.exports, module);
  return module.exports;
}
const { projects } = loadContent("lib/projects.ts");
const { articles, getPublishedArticles } = loadContent("lib/journal.ts");
const { eras } = loadContent("lib/eras.ts");
const themes = new Set(eras.map(({ theme }) => theme));
const unique = (items, label) =>
  assert.equal(new Set(items).size, items.length, `Duplicate ${label}`);
unique(
  projects.map(({ id }) => id),
  "project ID",
);
unique(
  articles.map(({ slug }) => slug),
  "article slug",
);
unique(
  eras.map(({ id }) => id),
  "era ID",
);
const projectIds = new Set(projects.map(({ id }) => id));
const published = getPublishedArticles();
const slugs = new Set(published.map(({ slug }) => slug));
const images = new Map();
function image(asset) {
  assert.ok(
    asset.src.startsWith("/") && !asset.src.includes(".."),
    `Unsafe image path: ${asset.src}`,
  );
  assert.ok(asset.alt?.trim(), `Missing image description: ${asset.src}`);
  images.set(asset.src, asset);
}
function publicUrl(href) {
  const url = new URL(href);
  assert.equal(url.protocol, "https:", `Non-HTTPS public source: ${href}`);
  assert.ok(
    !/localhost|127\.0\.0\.1|\.local$/.test(url.hostname),
    `Private source: ${href}`,
  );
}
for (const project of projects) {
  assert.ok(
    /^[a-z0-9-]+$/.test(project.id),
    `Invalid project ID: ${project.id}`,
  );
  assert.ok(themes.has(project.era), `Unknown era: ${project.id}`);
  assert.ok(
    project.summary && project.note && project.status,
    `Incomplete project: ${project.id}`,
  );
  if (project.articleSlug)
    assert.ok(
      slugs.has(project.articleSlug),
      `Unpublished project article: ${project.id}`,
    );
  project.links.forEach(({ href }) => publicUrl(href));
  if (project.image) image(project.image);
}
for (const article of articles) {
  assert.ok(
    /^[a-z0-9-]+$/.test(article.slug),
    `Invalid article slug: ${article.slug}`,
  );
  assert.ok(themes.has(article.era), `Unknown era: ${article.slug}`);
  assert.ok(
    ["project", "hackathon", "certification"].includes(article.kind),
    `Unknown category: ${article.slug}`,
  );
  assert.ok(
    /^\d{4}-\d{2}-\d{2}$/.test(article.publishedAt) &&
      !Number.isNaN(Date.parse(article.publishedAt)),
    `Invalid publication date: ${article.slug}`,
  );
  assert.ok(
    article.eventLabel && article.description && article.title,
    `Missing editorial metadata: ${article.slug}`,
  );
  assert.ok(article.sources.length, `Missing public evidence: ${article.slug}`);
  assert.ok(article.blocks.length >= 3, `Incomplete article: ${article.slug}`);
  article.projectIds.forEach((id) =>
    assert.ok(projectIds.has(id), `Unknown project ${id} in ${article.slug}`),
  );
  article.sources.forEach(({ href }) => publicUrl(href));
  if (article.cover) image(article.cover);
  article.blocks.filter(({ type }) => type === "image").forEach(image);
  assert.ok(
    !JSON.stringify(article).includes("/Users/"),
    `Private path in article: ${article.slug}`,
  );
}
const order = articles.map(({ slug }) => slug);
articles.push({
  ...articles[0],
  slug: "draft-visibility-probe",
  status: "draft",
});
try {
  assert.ok(
    !getPublishedArticles().some(
      ({ slug }) => slug === "draft-visibility-probe",
    ),
    "Draft leaked into public manifest",
  );
} finally {
  articles.pop();
}
assert.deepEqual(
  articles.map(({ slug }) => slug),
  order,
  "Publication sorting mutated authored order",
);
for (const [src, asset] of images) {
  const file = path.join("public", src);
  assert.ok(fs.existsSync(file), `Missing asset: ${src}`);
  const metadata = await sharp(file).metadata();
  assert.equal(metadata.width, asset.width, `Width mismatch: ${src}`);
  assert.equal(metadata.height, asset.height, `Height mismatch: ${src}`);
}
for (const { theme } of eras) {
  const file = `public/companions/pip-${theme}.webp`;
  const metadata = await sharp(file).metadata();
  assert.ok(metadata.hasAlpha, `Missing companion transparency: ${theme}`);
  assert.ok(
    fs.statSync(file).size < 150000,
    `Companion exceeds budget: ${theme}`,
  );
  assert.equal(metadata.width, 512);
  assert.equal(metadata.height, 512);
}
console.log(
  `Content integrity passed: ${projects.length} projects, ${published.length} articles, ${images.size} images, ${eras.length} transparent companions; draft exclusion verified.`,
);
