import type { JournalArticle } from "./journal-types";

/** Publication dates belong to this website edition; eventLabel dates the work. */
export const articles: readonly JournalArticle[] = [
  {
    slug: "commons-room",
    title: "The Commons: a room that builds its own inhabitants",
    description:
      "A phone wish becomes a creature in a shared room, through a small behavior contract and a checked generation loop.",
    kind: "hackathon",
    era: "lab",
    publishedAt: "2026-10-20",
    eventLabel: "11 October 2026 · Common Grounds makeathon",
    status: "published",
    projectIds: ["commons"],
    blocks: [
      {
        type: "paragraph",
        text: "I arrived at the Common Grounds makeathon with ten ideas prototyped by coding agents. A few minutes into the organisers’ introduction, I dropped them. The project I built instead was The Commons: scan a QR code, wish for a creature on your phone, and watch it join a cartoon version of the room. I entered solo, using coding agents to help turn the idea into a working demo.",
      },
      {
        type: "paragraph",
        text: "The short interaction hides several separate jobs. A wish needs screening. A creature needs behavior as well as an appearance. The generated parts need to agree about actions and animation frames. Finally, the server has to decide whether the result can enter a scene that other people are already watching. Treating those as separate stages makes the process easier to check and repair.",
      },
      {
        type: "heading",
        text: "Give the creature a small world to understand",
      },
      {
        type: "paragraph",
        text: "The behavior contract limits the generated program to six kilobytes. A shared action map connects its behavior to the sprite sheet, so the drawing stage and the runtime speak the same language. The model has a narrow job: produce something that fits this world’s rules. That is a more useful instruction than asking it to invent an entire game system for every visitor.",
      },
      {
        type: "list",
        items: [
          "Screen the wish before spending time generating the creature.",
          "Generate a bounded JavaScript program, then run static checks and a 60-second simulation.",
          "Use failures as repair feedback before drawing the sprite sheet.",
          "Re-check the result on the authoritative server before admitting it to the shared scene.",
        ],
      },
      {
        type: "paragraph",
        text: "The server check matters because a successful generation step is only a proposal. The public checker also includes runtime quarantine for misbehaving creatures. These are practical guardrails for a controlled demo; the bounded simulation and node:vm execution do not establish a hardened sandbox for arbitrary hostile code. A creature can pass the checks without being delightful, too. Mechanical validity and a good character are different questions.",
      },
      { type: "heading", text: "Waiting is part of the toy" },
      {
        type: "paragraph",
        text: "On the event day, the published demo took about a minute for a creature to arrive. That makes the stages part of the experience: a visitor needs to understand that their wish is progressing while the room continues around them. Later runtime experiments changed the waiting time, but they belong to later versions. I keep the event-day result separate rather than presenting the fastest later run as the original build.",
      },
      {
        type: "callout",
        label: "Makeathon result",
        text: "The Commons won Best Use of Tech. The retained video and slides show the interaction and build loop beyond the award announcement.",
      },
    ],
    sources: [
      {
        label: "The Commons · source and build notes",
        href: "https://github.com/Collaboration95/common-grounds-makeathon",
      },
      {
        label: "Makeathon demo video",
        href: "https://www.youtube.com/watch?v=SN3WXWuIOi8",
      },
      {
        label: "Public walkthrough slides",
        href: "https://collaboration95.github.io/common-grounds-makeathon/slides.html",
      },
    ],
  },
  {
    slug: "researchagent-main-stage",
    title: "Taking ResearchAgent to the main stage",
    description:
      "Presenting our research agent with a wallet at AI Tinkerers Singapore, and bringing home a top-three Cloud Run demo distinction.",
    kind: "talk",
    era: "lab",
    publishedAt: "2026-10-20",
    eventLabel: "10 October 2026 · AI Tinkerers Singapore",
    status: "published",
    projectIds: ["researchagent"],
    cover: {
      src: "/project-images/researchagent-main-stage.webp",
      alt: "ResearchAgent’s answer and spending budget projected beside a presenter at the Singtel podium.",
      caption:
        "Presenting ResearchAgent at AI Tinkerers Singapore, 10 October 2026. Photo: event attendee, via the organizer’s event gallery.",
      width: 1600,
      height: 900,
    },
    blocks: [
      {
        type: "paragraph",
        text: "On 10 October 2026, I took ResearchAgent to the main stage at AI Tinkerers Singapore. I presented a live demo at Singtel 8George: a research agent with a wallet, an evidence gap to fill, and a fixed budget. The project began with our SingHacks team, Nguyễn Trần Thành Minh, Jiamin Wang, Andrew Nguyen, and me. We had reached the finals there in September. This was the next step: bringing the evolving project in front of a room of builders.",
      },
      { type: "heading", text: "Give the purchase a reason" },
      {
        type: "paragraph",
        text: "The walkthrough starts with free sources. The agent builds an answer, identifies what it still cannot support, and considers whether a paid article could improve it. The question is how much useful evidence that article adds. Another version of something already known should not earn a purchase just because its title looks relevant.",
      },
      {
        type: "paragraph",
        text: "On the projected screen, you can follow the question, the available budget, the chosen source, and the answer after the purchase. Those details make the decision inspectable. The model can propose a source, while budget limits and payment checks constrain the action. Delivery verification then checks what arrived before the result becomes part of the answer.",
      },
      {
        type: "image",
        src: "/project-images/researchagent-stage-architecture.webp",
        alt: "A presenter explaining the projected ResearchAgent diagram, with separate reader, writer, and testnet ledger layers.",
        caption:
          "Walking through the reader, writer, and payment layers. Photo: event attendee, via AI Tinkerers Singapore’s 10 October gallery.",
        width: 1600,
        height: 900,
      },
      {
        type: "paragraph",
        text: "The demo uses fictional writers and articles, with XRPL Testnet settlement. No real money moves. That boundary matters when watching the presentation: the prototype lets us examine spending controls, delivery proofs, and recovery from failed purchases in a contained setting. A verified delivery still does not establish that an article’s claims are true. It establishes what was delivered against the promised evidence.",
      },
      { type: "heading", text: "A Cloud Run demo worth taking home" },
      {
        type: "paragraph",
        text: "The live demo ran on Google Cloud Run and placed among the top three Cloud Run demos at the meetup, earning US$100 in Google Cloud credits. I shared that result in my post after the event. It was a separate milestone from the SingHacks finalist result, and presenting the work itself was a meaningful part of it.",
      },
      {
        type: "paragraph",
        text: "I also turned the build into a retrospective: 39 days, 248 commits, 75 pull requests, and 422 prompts to two coding agents. The charts are a record of how this project was made. My favourite slice was one night with 23 pull requests between 1 am and 3:19 am. The writeup, slides, and retained walkthrough let someone explore both the engineering and the path to the presentation.",
      },
      {
        type: "callout",
        label: "Revisit the presentation",
        text: "The original Cloud Run deployment was retired after the talk. The slide deck, interactive walkthrough, and build retrospective remain available through the links below.",
      },
    ],
    sources: [
      {
        label: "AI Tinkerers Singapore · official 10 October event",
        href: "https://singapore.aitinkerers.org/p/ai-tinkerers-singapore-saturday-demo-meetup-with-joe-heitzeberg-oct-10",
      },
      {
        label: "Organizer’s ResearchAgent presentation announcement",
        href: "https://www.linkedin.com/posts/ai-tinkerers-singapore_aitinkerers-singapore-agenticai-activity-7511591073815724032-gH7o",
      },
      {
        label: "Presentation slides · team and architecture",
        href: "https://collaboration95.github.io/theFastandtheFungible/slides/",
      },
      {
        label: "Retained interactive walkthrough",
        href: "https://collaboration95.github.io/theFastandtheFungible/talk/",
      },
      {
        label: "The build retrospective",
        href: "https://collaboration95.github.io/theFastandtheFungible/evolution/",
      },
      {
        label: "Event photographs · AI Tinkerers Singapore gallery",
        href: "https://singapore.aitinkerers.org/meetup/mu_oOS3ivaBeO4/gallery?page=2",
      },
      {
        label: "ResearchAgent · source, demo distinction, and prototype scope",
        href: "https://github.com/Collaboration95/theFastandtheFungible",
      },
    ],
  },
  {
    slug: "researchagent-evidence",
    title: "ResearchAgent: buying evidence means checking the delivery",
    description:
      "A team research prototype separates evidence value, spending permission, payment, and proof before an article becomes a citation.",
    kind: "hackathon",
    era: "lab",
    publishedAt: "2026-10-20",
    eventLabel: "September–October 2026 · SingHacks and AI Tinkerers Singapore",
    status: "published",
    projectIds: ["researchagent"],
    blocks: [
      {
        type: "paragraph",
        text: "I worked with a team on ResearchAgent for SingHacks, where we became finalists. The question behind it was more specific than whether an agent could search the web: when should it pay for another piece of evidence, and what should happen if that evidence fails the promise behind the purchase? I later presented it on the main stage at AI Tinkerers Singapore on 10 October. The live demo placed among the top three Cloud Run demos at that meetup.",
      },
      {
        type: "paragraph",
        text: "The demo uses fictional writers and articles. Payments run on XRPL Testnet, with a separately labelled simulated path for offline use. That keeps the experiment’s scope clear while letting us examine a real systems problem: a successful payment and a useful research result are separate events. A tool returning success cannot stand in for both.",
      },
      { type: "heading", text: "Name the gap before buying the answer" },
      {
        type: "paragraph",
        text: "ResearchAgent starts with open evidence. It groups what it has found into evidence families, identifies a gap, and considers whether a paid source could fill it. This gives the purchase a reason beyond finding another relevant-looking title. Repeated versions of the same underlying claim should not automatically count as new support. The useful question is what the next source adds to the answer.",
      },
      {
        type: "paragraph",
        text: "The model’s assessment then meets deterministic policy. Budget and per-source limits constrain what it can spend; payment intent and recipient checks sit outside the model’s prose. I find that separation useful when reading the system: the agent can explain why it wants something, while the payment path still has explicit conditions to enforce. A persuasive explanation does not itself authorise a transfer.",
      },
      { type: "heading", text: "Follow the failed purchase" },
      {
        type: "list",
        items: [
          "Keep purchase intent distinct from settlement, so retry handling does not casually create another charge.",
          "Verify the delivery against its signed manifest before treating the passage as evidence.",
          "Quarantine a failed proof and follow the challenge/refund path.",
          "Continue the research with another source, then assemble a cited answer from accepted evidence.",
        ],
      },
      {
        type: "paragraph",
        text: "The retained walkthrough follows that less convenient route: a purchase, a failed proof, a challenge and refund, then another purchase. It makes the recovery behavior visible instead of cutting directly to a polished answer. Delivery verification still has a limited meaning. Matching a signed promise can establish what arrived; it does not establish that an article’s claims are true or that it answers the research question well.",
      },
      {
        type: "callout",
        label: "What remains available",
        text: "The Cloud Run demo was removed after the October talk. The source, talk walkthrough, and evolution notes remain the useful public record of this synthetic-corpus, test-network prototype.",
      },
    ],
    sources: [
      {
        label: "ResearchAgent · source and scope",
        href: "https://github.com/Collaboration95/theFastandtheFungible",
      },
      {
        label: "Retained talk walkthrough",
        href: "https://collaboration95.github.io/theFastandtheFungible/talk/",
      },
      {
        label: "Project evolution",
        href: "https://collaboration95.github.io/theFastandtheFungible/evolution/",
      },
      {
        label: "SingHacks finalist reflection",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7502550000044752896/",
      },
    ],
  },
  {
    slug: "mandateflow-provenance",
    title: "MandateFlow: the same tool call can need a different answer",
    description:
      "Why an agent gateway needs to know where information came from, even when the outgoing request looks unchanged.",
    kind: "hackathon",
    era: "lab",
    publishedAt: "2026-10-20",
    eventLabel: "Late August–early September 2026 · TikTok TechJam",
    status: "published",
    projectIds: ["mandateflow"],
    cover: {
      src: "/mandateflow-provenance.jpg",
      alt: "MandateFlow diagram comparing an allowed support-derived path with a denied payment-derived path.",
      width: 1280,
      height: 344,
    },
    blocks: [
      {
        type: "paragraph",
        text: "I contributed to MandateFlow with team Cache Me If You Can for TikTok TechJam. We built on the supplied Agent Launchpad starter, adding a provenance-sensitive gateway between an agent and protected tools. My public contributions include the Go gateway and demo hardening. The interesting case was a request that looked reasonable on its own but depended on information the agent was not allowed to use that way.",
      },
      {
        type: "paragraph",
        text: "A permission check can ask who is calling, which tool they want, and what arguments they supplied. Our demo adds another question: where did those arguments come from? Once an agent carries information between tools, its final request can hide a history that matters to the decision. Renaming a value or passing it through an intermediate object should not erase that history.",
      },
      { type: "heading", text: "Two paths into the same destination" },
      {
        type: "list",
        items: [
          "Support → Case → CRM: the support-derived path is allowed in the protected demo.",
          "Payment failure → Case → CRM: the payment-derived path is denied before the protected tool executes.",
          "An aggregate recovery path offers a narrower way forward when the specific action is denied.",
        ],
      },
      {
        type: "paragraph",
        text: "The intermediate Case is what makes the example useful. If the gateway only inspected the final CRM call, the two paths could look equivalent. Tracking lineage lets the policy distinguish them. This is a property of the demo’s mandate and fixtures, rather than a universal rule about support or payment data. The rule needs to be explicit enough that someone reviewing a receipt can understand why the outcome changed.",
      },
      {
        type: "paragraph",
        text: "The React/Fastify playground gives the agent a disposable runtime, while the Go MCP gateway owns the policy and lineage checks. That division places the enforcement point outside the agent’s conversational explanation. Redacted receipts expose the decision without requiring the viewer to reconstruct the whole conversation or disclose the underlying protected content. The interface becomes a way to inspect enforcement, rather than the place where permission is merely promised.",
      },
      { type: "heading", text: "A recovery path needs its own evidence" },
      {
        type: "paragraph",
        text: "One of my demo-hardening changes dealt with incomplete proof. If a live run stopped after aggregate recovery without recording the required fresh support path, it could not publish a completed proof or an unsupported assistant result. Missing rows were labelled as not recorded. That detail matters: a neat-looking answer should not make an unfinished authorization sequence appear complete.",
      },
      {
        type: "paragraph",
        text: "MandateFlow remains a team proof of concept built around protected fixtures. Its useful contribution is a concrete distinction: permission attaches to the history of information as well as the shape of an action. Making that history inspectable also makes failures easier to discuss. A denial, an allowed alternative, and an incomplete proof should each have a recognisable place in the record.",
      },
    ],
    sources: [
      {
        label: "MandateFlow · team repository",
        href: "https://github.com/tradaokamsa/MandateFlow",
      },
      {
        label: "Go gateway policy",
        href: "https://github.com/tradaokamsa/MandateFlow/blob/main/middleware/mandateflow/internal/mandateflow/policy.go",
      },
      {
        label: "Fail-closed demo proof change",
        href: "https://github.com/tradaokamsa/MandateFlow/commit/6ba7f2be88e8e7036a9807d6f53b25ae9c624d41",
      },
      {
        label: "Published team project note",
        href: "https://www.linkedin.com/feed/update/urn:li:activity:7500451311562375170/",
      },
    ],
  },
  {
    slug: "local-screenshot-naming",
    title: "Making local screenshot naming fit a 16 GB Mac",
    description:
      "The naming feature became practical when I changed the runtime and kept suggestions inside a reversible local review workflow.",
    kind: "project",
    era: "lab",
    publishedAt: "2026-10-20",
    eventLabel: "June–August 2026 · screenshot naming experiments",
    status: "published",
    projectIds: ["screenshot-declutterer"],
    cover: {
      src: "/screenshot-declutterer-before-after.png",
      alt: "Screenshot Declutterer's Suggest control beside a screenshot renamed aws-backup-question.png.",
      width: 1576,
      height: 642,
    },
    blocks: [
      {
        type: "paragraph",
        text: "Screenshot Declutterer began as a way to review screenshots on my Mac. Keep, Unsorted, and Trash give the pile somewhere to go; renaming helps the things I keep become findable. Automated naming seemed like a natural addition, until a small vision model made the desktop app feel much heavier than the task deserved.",
      },
      {
        type: "paragraph",
        text: "My initial Ollama setup took roughly 21 seconds to suggest a filename and wanted about 7.7 GB of GPU memory on a 16 GB Mac. That is a substantial working set for a helper beside a review board. A filename is a small output, but producing it still requires the model to interpret an image. The feature had to fit the rest of the machine’s workload.",
      },
      { type: "heading", text: "Text alone lost part of the screenshot" },
      {
        type: "paragraph",
        text: "I tried Apple’s text recognition followed by a smaller text-only model. It was lighter, but it created another pipeline to maintain and missed information carried by layouts, charts, diagrams, and UI state. I also considered a hosted provider with a user-supplied API key. That would have changed the privacy boundary of an app built to review screenshots locally, so I kept looking for an on-device path.",
      },
      {
        type: "paragraph",
        text: "A video showing the model running on a Raspberry Pi led me to revisit the runtime rather than dismiss the machine. With LiteRT-LM, the comparison across the same 39 screenshots averaged 6.5 seconds per image, against 20.9 seconds with Ollama. That result made optional naming much more usable in my review workflow. It is a measurement from this machine and image set, rather than a general speed promise.",
      },
      {
        type: "callout",
        label: "Keep the measurements separate",
        text: "In that experiment, model size on disk fell from 7.2 GB to 2.4 GB. The app plus LiteRT-LM used about 1.8 GB of RAM. Disk size, GPU-memory demand, and total application RAM describe different things and should not be plotted as interchangeable savings.",
      },
      { type: "heading", text: "A suggestion still needs a decision" },
      {
        type: "paragraph",
        text: "The image goes to a localhost service and naming runs on the Mac. Naming is optional: the review board remains useful without loading a model. That separation also keeps the model’s role modest. A proposed name is something to review, just as a visual-similarity match is a reason to inspect two files rather than a reason to delete one automatically.",
      },
      {
        type: "paragraph",
        text: "The wider workflow keeps undo and a confirmed move to native macOS Trash distinct from reviewing a card. Those ordinary controls matter as much as inference time. Faster suggestions help only if I can still understand what the app will change. The practical lesson from this feature was to evaluate the whole local experience: runtime, memory, waiting, and the final human decision about a file.",
      },
    ],
    sources: [
      {
        label: "Screenshot Declutterer · source and local workflow",
        href: "https://github.com/Collaboration95/screenshot-declutterer",
      },
      {
        label: "Earlier naming evaluation · a separate experiment",
        href: "https://gist.github.com/Collaboration95/d89fedec12083990c454807590dd4f9a",
      },
    ],
  },
  {
    slug: "apple-health-importer",
    title: "The Apple Health importer needed a different architecture",
    description:
      "Profiling a slow import led from Python object work to parallel byte scanning, Parquet staging, and DuckDB reconciliation.",
    kind: "project",
    era: "lab",
    publishedAt: "2026-10-20",
    eventLabel: "29–30 June 2026 · importer rewrite",
    status: "published",
    projectIds: ["talktoit"],
    blocks: [
      {
        type: "paragraph",
        text: "I am building talktoit to ask questions of Apple Health data, but the first obstacle was getting an export into the database. My bounded test input contained six months of data and took 1594.9 seconds to import. Before a conversational interface could be useful, that wait needed an explanation. A better answer generator would not fix a pipeline that took about 26 minutes to prepare its facts.",
      },
      {
        type: "paragraph",
        text: "The first pass used fairly conventional improvements: put database writes in a transaction, replace slow timestamp parsing, combine XML passes, and tidy the regular-expression work. Import time fell to 1259.9 seconds. That was progress, but it left most of the wait intact. It also gave me a useful reason to stop assuming that database writes were the main problem.",
      },
      {
        type: "heading",
        text: "Measure the work between the reads and writes",
      },
      {
        type: "paragraph",
        text: "Profiling pointed to Python’s per-record work. The XML parser built objects, then pulled attributes back across the C/Python boundary one field at a time, under the GIL. Repeating that process around 1.35 million times dominated the run. DuckDB and disk I/O were not the bottlenecks I had expected. The next change needed to reduce that repeated object work.",
      },
      {
        type: "list",
        items: [
          "Memory-map the export so workers can scan the input bytes.",
          "Split work at record-safe boundaries and extract the supported records with byte-level scans.",
          "Write Parquet shards as an intermediate representation.",
          "Load and reconcile those shards in DuckDB, keeping coverage and record relationships explicit.",
        ],
      },
      {
        type: "callout",
        label: "One bounded benchmark",
        text: "On an Apple M1 with four workers, the 626,341,768-byte test input went from 1594.9 seconds to 9.77 seconds, about 163× faster. The intermediate version took 1259.9 seconds. These are results for that input and setup, not timings for every Apple Health export.",
      },
      {
        type: "paragraph",
        text: "Parallel extraction creates correctness work of its own. A record crossing a worker boundary must not disappear or be counted twice. Child rows must still belong to the right parent records when shards meet again. Transaction boundaries matter because an interrupted load should not leave a plausible-looking partial database. The speedup is useful only alongside an account of what was imported.",
      },
      { type: "heading", text: "The importer is part of the answer" },
      {
        type: "paragraph",
        text: "talktoit’s local analytics and conversational layer depend on those stored facts. Local processing is the default; remote planning or narration is an explicit opt-in configuration. That choice belongs beside the ingestion design, because both affect what happens to a sensitive export. This build note uses aggregate engineering timings only. The lasting lesson for me is the one the first optimization pass exposed: sometimes the next improvement comes from changing the unit of work, rather than making each existing step slightly faster.",
      },
    ],
    sources: [
      {
        label: "talktoit · source and data boundaries",
        href: "https://github.com/Collaboration95/talktoit",
      },
      {
        label: "Published importer benchmark",
        href: "https://gist.github.com/Collaboration95/f5f5f7414e04cb5c75e2d2e4274b3bcb",
      },
      {
        label: "Shard reconciliation implementation",
        href: "https://github.com/Collaboration95/talktoit/blob/49510a7c804bd4c044db87c6e90523cae2ba0602/backend/app/ingest/reconcile.py",
      },
    ],
  },
  {
    slug: "fitback-size-recommendation",
    title: "Fitback: a useful size recommendation starts before the model",
    description:
      "A team sizing project connects guided photo capture, retailer charts, and fit preference; Detect-T preserves one concrete technical slice.",
    kind: "project",
    era: "studio",
    publishedAt: "2026-10-20",
    eventLabel: "2024–2025 · Fitback; 14 April 2025 · InspireCon",
    status: "published",
    projectIds: ["fitback"],
    cover: {
      src: "/detectt-posenet-setup.png",
      alt: "Detect-T camera demo comparing the original feed with a mirrored feed overlaid with pose keypoints.",
      width: 1923,
      height: 1400,
    },
    blocks: [
      {
        type: "paragraph",
        text: "I worked on Fitback as part of a SUTD capstone team. The product question was familiar: an online shopper can read a size chart and still be unsure which size will feel right. Our project connected two user photos, retailer-specific sizing information, and fit preference to a recommendation in a Shopify shopping flow. Each input introduces a different kind of uncertainty.",
      },
      {
        type: "paragraph",
        text: "A body estimate does not tell you everything about a garment, and a retailer’s label does not tell you how someone wants it to fit. Tight, standard, and loose are meaningful differences in the decision. That makes the recommendation a chain of small translations: help someone capture usable photos, interpret the body information, read the relevant chart, and account for the requested fit.",
      },
      { type: "heading", text: "Make the camera input usable" },
      {
        type: "paragraph",
        text: "The public Detect-T repository preserves a pose-guidance and capture proof of concept from this work. It uses browser-based pose feedback and a front/side state machine to guide the capture sequence. This is a useful piece to examine because an image pipeline begins with what the camera can actually see. Feedback during capture gives a person a chance to correct the input before the later stages depend on it.",
      },
      {
        type: "paragraph",
        text: "There was also a concrete compatibility problem. MoveNet and the older Teachable Machine pose-classification tooling expected different TensorFlow.js environments. The prototype isolates the older stack in a Web Worker, with messages crossing the boundary to the main capture flow. That lets the two model environments coexist without making the page-level runtime carry incompatible versions together.",
      },
      {
        type: "list",
        items: [
          "The camera flow owns the visible guidance and capture state.",
          "The worker owns the older model environment and returns its results through messages.",
          "The broader sizing flow combines photo-derived information with the retailer chart and fit preference.",
        ],
      },
      {
        type: "paragraph",
        text: "I keep those scopes distinct when describing the project. Detect-T shows a specific engineering solution; it is not a public implementation of the entire sizing product. The worker boundary also illustrates a practical design point: sometimes a cleaner interaction depends on separating awkward internals. A shopper should be able to follow a capture sequence without needing to understand why two model runtimes are involved.",
      },
      {
        type: "callout",
        label: "Team recognition",
        text: "Fitback won first place in the Design AI category at SUTD’s InspireCon on 14 April 2025. The official university release records the result, and The Business Times names the team.",
      },
      {
        type: "paragraph",
        text: "The recognition belongs to the team’s project. The public technical story I can show here is narrower and concrete: pose feedback, capture state, and an isolated model runtime, placed within a sizing workflow that also needs garment information and human preference. That is enough to explain why getting a recommendation right involves more than selecting a model.",
      },
    ],
    sources: [
      {
        label: "SUTD · official InspireCon results",
        href: "https://www.sutd.edu.sg/media-releases-listing/sutd-students-partner-top-firms-including-loreal-db-schenker-changi-airport-group-in-first-inspirecon-showcase/",
      },
      {
        label: "The Business Times · Fitback team",
        href: "https://www.businesstimes.com.sg/events-awards/design-ai-tech-awards/design-ai-and-tech-awards/design-ai-next-stage-ai-evolution",
      },
      {
        label: "Detect-T · public pose/capture prototype",
        href: "https://github.com/Collaboration95/DetectT",
      },
      {
        label: "Isolated TensorFlow.js worker",
        href: "https://github.com/Collaboration95/DetectT/blob/d29d5518b05e1dae5247e398ba85e1b652107c3c/Shopify-export/tf1-worker.js",
      },
    ],
  },
  {
    slug: "aws-learning-by-building",
    title: "Learning AWS by building a study tool and asking why",
    description:
      "A mobile quiz app, a second look at networking, and architecture tradeoffs made five certification milestones useful beyond the exam.",
    kind: "certification",
    era: "lab",
    publishedAt: "2026-10-20",
    eventLabel: "April–June 2026 · associate and professional study notes",
    status: "published",
    projectIds: [],
    blocks: [
      {
        type: "paragraph",
        text: "I started studying AWS because I was already using its services and wanted a better explanation for the choices around them. Getting a task done and understanding why a service fits are different levels of familiarity. The useful part of the certification path was turning names I recognised into questions I could reason through: where traffic goes, what a cache promises, and how much recovery a system actually needs.",
      },
      { type: "heading", text: "Build the missing practice interface" },
      {
        type: "paragraph",
        text: "During AI Practitioner preparation, a practice resource had questions but lacked the timed-test and score-tracking experience I wanted. I put the questions into structured JSON, built a local Flask version, then rewrote the frontend as a static single-page app. It gave me a small mobile study tool for the MRT ride to my climbing gym. Seven practice sets became eight options by adding a randomized set drawn from the others.",
      },
      {
        type: "paragraph",
        text: "The app’s engineering was modest, but its form followed the need closely. A local Python interface was enough to start; a static frontend removed the need to run a server when I wanted to practise on my phone. I link the experiment as a study tool, rather than an official AWS resource. The interesting part here is the small change from consuming a resource to building the interface I needed around it.",
      },
      { type: "heading", text: "Tradeoffs made the later study stick" },
      {
        type: "paragraph",
        text: "Solutions Architect – Associate pushed me hardest on VPCs, subnets, and routing. I went through the material a second time and worked through difficult scenarios before the pieces clicked. Once the network path made sense, service-selection questions became less isolated: I could place the service inside a system and ask how a request would reach it.",
      },
      {
        type: "list",
        items: [
          "Developer – Associate gave me a clearer vocabulary for caching. Cache-aside exposes misses and stale reads; write-through adds work to the write path; write-behind introduces a durability gap before persistence.",
          "Solutions Architect – Professional made recovery time and recovery point explicit requirements. Backup/restore, pilot light, warm standby, and active-active arrangements buy different recovery behavior at different ongoing costs.",
          "Across both, the useful exercise was explaining which constraint justified the choice instead of selecting the most elaborate architecture.",
        ],
      },
      {
        type: "paragraph",
        text: "My published pass announcements cover Cloud Practitioner, AI Practitioner, Solutions Architect – Associate, Developer – Associate, and Solutions Architect – Professional. I treat those five milestones as a record of study. The more transferable output is the habit of stating an assumption and tracing its consequences: what can be stale, what can be lost, how long recovery can take, and what the system costs while waiting for a failure.",
      },
    ],
    sources: [
      {
        label: "AWS study quiz · source",
        href: "https://github.com/Collaboration95/aws-tests-ai",
      },
      {
        label: "Public profile · announced qualifications",
        href: "https://sg.linkedin.com/in/guruprasath3200",
      },
      {
        label: "AWS · Solutions Architect – Associate title and scope",
        href: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
      },
    ],
  },
  {
    slug: "yald-agent-logs",
    title: "YALD: a usage chart is only as honest as its logs",
    description:
      "Read-only local reports can explain agent usage without turning missing telemetry into invented metrics or estimates into a bill.",
    kind: "project",
    era: "lab",
    publishedAt: "2026-10-20",
    eventLabel:
      "September–October 2026 · local agent analytics; 2 October · preview release",
    status: "published",
    projectIds: ["yald"],
    blocks: [
      {
        type: "paragraph",
        text: "I built yald, Yet Another LLM Dashboard, because I wanted to understand where my coding-agent tokens were going. The records were already on my machine, but a useful explanation needed more than a total. I wanted to compare activity, see cache usage, and understand the shape of a build session. The tool reads local records without changing the source logs.",
      },
      {
        type: "paragraph",
        text: "The first difficulty is that the sources describe different events. An OpenCodex request ledger can include operational information about a request. A Claude Code transcript provides a different view of a conversation and its usage. Putting both in one dashboard requires a common representation, but it does not make the original records equally informative.",
      },
      { type: "heading", text: "Missing is a value worth preserving" },
      {
        type: "paragraph",
        text: "Claude transcript-derived rows do not supply latency, time to first token, quota, or failure fields. Those metrics must remain unavailable for that source. Filling them with zero would make the chart tidier while telling the wrong story: an unrecorded request duration is not an instantaneous request. The same distinction applies to a missing failure record and a confirmed successful call.",
      },
      {
        type: "callout",
        label: "The dollar figure is an estimate",
        text: "YALD estimates API list-price equivalents from recorded usage. It does not reconstruct an actual subscription bill. Token counts, cache categories, and an applicable pricing model describe an equivalent cost, not proof of what someone paid.",
      },
      {
        type: "paragraph",
        text: "Cache activity needs that context too. A large token total can include repeated cached input rather than an equally large amount of new work. Breaking categories apart makes the figure more useful for investigating a workflow. It still does not turn token volume into a measure of software quality, productivity, or the value of a completed project.",
      },
      { type: "heading", text: "Make the report’s boundary visible" },
      {
        type: "list",
        items: [
          "Choose an explicit half-open time window: include its start and exclude its end.",
          "Name the timezone so a day or build phase has a reproducible meaning.",
          "Keep source filters and phase totals consistent with the overall report.",
          "Redact before sharing and prefer curated aggregates to raw conversations.",
        ],
      },
      {
        type: "paragraph",
        text: "Portable reports make this useful beyond the live dashboard. I used the tool for a published retrospective on building The Commons, where phases of the day gave the usage a story to follow. This article keeps the explanation at the aggregate level. A report should let someone inspect how a number was assembled without exposing the prompts, project details, or identities inside the underlying sessions.",
      },
      {
        type: "paragraph",
        text: "The public v0.1.0 GitHub preview includes a packaged artifact. The source and preview are the concrete things to point to; registry publication is a separate step. For me, the useful result is a dashboard that can answer a question and show where its evidence stops. That boundary is part of the product, just as much as the chart.",
      },
    ],
    sources: [
      {
        label: "YALD · source and metric definitions",
        href: "https://github.com/Collaboration95/yald",
      },
      {
        label: "v0.1.0 · GitHub preview package",
        href: "https://github.com/Collaboration95/yald/releases/tag/v0.1.0",
      },
      {
        label: "Portable report implementation",
        href: "https://github.com/Collaboration95/yald/blob/efc249d57c5a4c35eb537bff2b42b588990a2175/server/src/report/build.ts",
      },
    ],
  },
];

export function getPublishedArticles(): readonly JournalArticle[] {
  return articles
    .filter((article) => article.status === "published")
    .sort(
      (a, b) =>
        b.publishedAt.localeCompare(a.publishedAt, "en") ||
        a.title.localeCompare(b.title, "en") ||
        a.slug.localeCompare(b.slug, "en"),
    );
}
