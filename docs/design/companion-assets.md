# Pip companion assets

Delivered 20 October 2026. Four separate static full-body images for the same original pocket otter, ordered present → past. The approved task brief supersedes the earlier material names, chronology, 256px size target, and waiting instruction in the earlier design research.

## Deliverables

| World | Career chapter | Material | Asset | Dimensions | Bytes |
| --- | --- | --- | --- | --- | ---: |
| Lab | 2026 | Lilac glass/resin | [pip-lab.webp](../../public/companions/pip-lab.webp) | 512 × 512 | 37,320 |
| Studio | 2024–25 | Warm peach ceramic | [pip-studio.webp](../../public/companions/pip-studio.webp) | 512 × 512 | 31,990 |
| Field | 2023–24 | Desaturated teal enamel / hardware | [pip-field.webp](../../public/companions/pip-field.webp) | 512 × 512 | 34,396 |
| Playground | Earlier projects | Blocky sage molded toy | [pip-play.webp](../../public/companions/pip-play.webp) | 512 × 512 | 30,390 |

Total: **134,096 bytes** (134.1 KB decimal). Every asset is below the requested 150,000-byte limit. No incomplete variants.

## Generation provenance

- Actual generation tool: built-in `image_gen__imagegen` (`image_gen.imagegen`), four successful calls with `transparent_background: true`.
- Lab was generated first without reference arguments. Its saved PNG was inspected using `view_image` before generating variants.
- Studio, field and playground each used the lab master as the sole `referenced_image_paths` entry. Each is a separate tool call and output, not a sprite sheet.
- The tool did not expose a selectable or confirmed underlying model identifier; no claim of a specific image-model version is made. “Sol” identifies the asset handoff context from the brief.
- No Work Pets, paid CLI/API fallback, code-drawn substitute artwork, application changes, commits, pushes, or external publication.
- Generation PNG masters remain outside the repository at the local paths recorded below. The tool's original PNGs remain unchanged, including their embedded provenance metadata. Only optimized WebPs are delivered into `public/companions/`.

## Exact submitted prompts

These are the complete prompt strings submitted to the built-in tool. For the three variants the input path was the lab master recorded under Local master provenance.

### Lab

```text
Use case: stylized-concept
Asset type: final transparent website companion, lab world (2026); first identity reference for a four-material set.
Primary request: Create ONE original small otter named Pip as a tactile stylized 3D collectible desk toy. Full body, sitting upright with paws close to chest, same gentle curious expression that will be reused across all worlds.
Subject identity: rounded bean-shaped body, two small ROUND ears, two dark oval eyes, pale cream muzzle, small dark nose, long tapering tail clearly visible curling to the VIEWER'S RIGHT, one simple copper oval chest patch (#B9684D). Keep the copper oval fully visible between the paws. An otter, not a bear: broad little muzzle, short paws and a substantial long curved otter tail.
Materials: luminous soft lilac glass/resin body with tangible rounded thickness, restrained internal translucency and polished edge highlights, frosted cream muzzle, dark glossy oval eyes, copper chest inlay. Material suitable beside dark graphite and lilac UI. Do not make the whole animal invisible or ghostlike.
Composition: square image, full body centered, camera at a three-quarter-left view so Pip's nose points slightly toward the viewer's left, static neutral sitting pose. Entire silhouette including tail and ears fits within a centered 76% square, leaving at least 12% empty transparent margin on every side. Feet baseline at 88% canvas height. Bold simple shapes legible at 48–192 pixels. Warm soft studio key light from upper left; shading contained inside the object.
Backdrop: REAL transparent alpha, clean antialiased silhouette. No scene or floor.
Avoid: scenery, text, badge, logo, watermark, clothes, weapons, pedestal, other objects, additional characters, exterior cast shadow, ground contact shadow, glow outside silhouette, checkerboard texture, fake transparency, frame. One standalone otter only.
```

### Studio

```text
Use case: style-transfer
Asset type: final transparent website companion for the studio world (2024–25).
Input image 1: approved Pip lab reference, exact character identity and pose reference.
Primary request: Render the SAME original small otter Pip as a tactile stylized 3D collectible desk toy made of MATTE WARM PEACH CERAMIC. Change only the material and body color. Warm editorial clay palette, slight handmade ceramic surface texture; cream muzzle, dark oval eyes and nose, copper oval chest inlay remain. A solid warm peach body rather than lilac resin; soft diffused highlights, no glass transparency.
Invariants: preserve the reference's bean body, large rounded head, small round ears, gentle curious expression, two dark oval eyes, cream broad otter muzzle, visible copper oval patch, paws held beside patch, sitting full-body pose, long tail curling upward to VIEWER'S RIGHT. Preserve the exact three-quarter-left camera angle, proportions, silhouette, relative scale and feet baseline from the reference. Whiskers should be simple and readable.
Composition: one full body centered in square image with 12% EMPTY TRANSPARENT margin on all sides. Feet baseline at 88% canvas height. Strong simple silhouette at 48–192px. Warm soft upper-left studio key light, shading inside figure.
Backdrop: real transparent alpha and clean antialiased silhouette.
Avoid: scenery, desk, floor, backdrop color, fake checkerboard, text, badge, logo, watermark, clothes, weapons, pedestal, props, other characters, outside cast shadow, ground contact shadow, exterior glow. One standalone figurine only.
```

### Field

```text
Use case: style-transfer
Asset type: final transparent website companion for the field world (2023–24).
Input image 1: approved Pip lab reference, exact character identity and pose reference.
Primary request: Render the SAME original small otter Pip as a tactile stylized 3D collectible desk toy made of DESATURATED TEAL ENAMEL over solid molded hardware. Change only the material and body color. Muted teal satin enamel, precise subtly recessed assembly seams along the sides and at limb joins, very restrained hardware character contained INSIDE the silhouette. No exposed gadgets or extra objects. Cream muzzle, dark oval eyes and nose, copper oval chest inlay remain.
Invariants: preserve reference bean body, large rounded head, two small round ears, gentle curious expression, dark oval eyes, cream broad otter muzzle, visible copper oval patch, paws beside patch, sitting full-body pose, long tail curling upward to VIEWER'S RIGHT. Preserve exact three-quarter-left camera angle, proportions, silhouette, relative scale and feet baseline from the reference. Whiskers simple and readable.
Composition: one full body centered in square image with 12% EMPTY TRANSPARENT margin on all sides. Feet baseline at 88% canvas height. Bold clear silhouette readable at 48–192px. Warm soft studio light from upper left; shading contained inside figure.
Backdrop: real transparent alpha and clean antialiased silhouette.
Avoid: scenery, drafting sheet, desk, floor, background color, fake checkerboard, text, badge, logo, watermark, clothes, weapons, pedestal, props, other characters, exterior cast shadow, ground contact shadow, exterior glow. One standalone figurine only.
```

### Playground

```text
Use case: style-transfer
Asset type: final transparent website companion for the playground world (earlier projects).
Input image 1: approved Pip lab reference, exact character identity and pose reference.
Primary request: Render the SAME original small otter Pip as a BLOCKY SAGE PIXEL-INSPIRED MOLDED 3D COLLECTIBLE TOY. It must still be a physical dimensional desk toy, not flat pixel art. Retro desaturated sage body, softly beveled chunky stepped geometry across head, cheeks, paws and tail, low-resolution voxel-inspired contour and molded plastic/clay surface. Distinct toy material with broad simple faces and rounded edges. Pale cream broad muzzle, dark oval eyes and nose, copper oval chest patch remain recognizable; patch can have a softly stepped edge.
Invariants: preserve the reference's bean-shaped body proportions, large head, two small round ears, gentle curious expression, dark oval eyes, pale muzzle, visible copper oval patch, paws close beside patch, sitting full-body pose and substantial long tail curling upward to VIEWER'S RIGHT. Keep exact three-quarter-left camera angle, scale and baseline from the reference while discretizing its surface into chunky softened blocks. Round ears should stay recognizable rather than become pointed.
Composition: one full body centered in square image, 12% EMPTY TRANSPARENT margin on all sides, feet baseline at 88% canvas height. Bold simple silhouette legible at 48–192px. Warm soft upper-left studio lighting with shading contained inside figurine.
Backdrop: genuine transparent alpha, clean antialiased silhouette, not a checkerboard.
Avoid: scene, scenery, floor, desk, text, badge, logo, watermark, clothing, weapons, pedestal, accessories, additional objects, other characters, outside cast shadow, ground contact shadow, glow or opaque backdrop. One standalone toy only.
```

## Optimization and validation

Used the repository's existing Sharp 0.35.3, libwebp 1.6.0; no dependency installation or configuration change. This was format/framing optimization of generated artwork.

1. Decode each 1254 × 1254 RGBA PNG. Locate the subject bounding box from pixels with alpha ≥16, excluding the masters' near-transparent outer noise from framing. No background was flattened or synthesized; original alpha inside the crop was preserved.
2. Extract the measured bounds below. Resize proportionally with Lanczos3 into a 388 × 388 box. Each figure is 388px high; width follows its silhouette.
3. Extend with transparent RGBA padding to 512 × 512, horizontally centered, with baseline at y=450 (88% of canvas height). The 62px top/bottom padding is 12.1%; side padding is at least 69px. Small silhouette-width differences, especially the blocky playground geometry, are intentional rather than stretching the character.
4. Encode WebP with `quality: 90, alphaQuality: 100, effort: 6`. Sharp's default metadata stripping applies to delivered assets; retain these provenance notes and original masters for source history.
5. Decode every delivered WebP and verify 512 × 512, RGBA alpha range 0–255, nonzero fully transparent and intermediate-alpha pixels, all pixels outside the central 388px square exactly alpha=0, and bytes <150,000.
6. View all four final WebPs. Review actual browser composites against the four era surfaces and a dark panel, including 48px and 96px previews. At 728px and 360px preview widths all 12 preview images decoded, with no horizontal overflow or reported console errors. Also inspect 512px light/dark composites of the source renders. Identity, three-quarter-left view, round ears, dark eyes, cream muzzle, copper chest patch and right-curling tail remain recognizable. No scenery, pedestal or exterior cast shadow is present.

Coordinates below use pixel indices for crop origins and exclusive sizes. Partial-alpha counts reflect the generated translucent/antialiased source rather than an opaque-background cutout. No checkerboard was used as image content.

| Variant | Source crop (left, top, width, height) | Scaled figure | Final offset (left, top) | Fully transparent pixels | Intermediate alpha pixels |
| --- | --- | --- | --- | ---: | ---: |
| lab | 211, 164, 964, 1001 | 374 × 388 | 69, 62 | 174,021 | 87,260 |
| studio | 212, 160, 966, 1004 | 373 × 388 | 69, 62 | 174,327 | 86,790 |
| field | 211, 160, 967, 1005 | 373 × 388 | 69, 62 | 174,229 | 86,911 |
| play | 227, 139, 962, 1034 | 361 × 388 | 75, 62 | 174,530 | 86,579 |

### Local master provenance and checksums

All paths below are local source records, not website runtime dependencies.

**Lab**

- Master PNG SHA-256: `c2afaaddc585cc79263c6175fe6b38de721d88b262799924357762b502f951a9`
- Delivered WebP SHA-256: `b61ff2e51cc3097b1117d1bdfea2fe1d9fb56cc7c2c08cbfd68646d19bb7258a`

**Studio**

- Master PNG SHA-256: `5e354da6eedd463ddba3239ca4c69183848d7ef2ee896842c5ca7167ce792f80`
- Delivered WebP SHA-256: `9dd2ae096d2276c089178c6664ec141d83e883c5bb4124050b3f848c27132952`

**Field**

- Master PNG SHA-256: `1d5a901de35846c742b9a918ed2fbd3b1674915ff7971b09add152b11f376fb6`
- Delivered WebP SHA-256: `0a9b6871b7c7bfbb7ac4e990a54ea8c0886ff3458dfbcefcca70e74f76b3dbaa`

**Playground**

- Master PNG SHA-256: `7c9b21cb5dd54866fe200198e92c79004fd76e1689c725e0c45f69eca38ef72d`
- Delivered WebP SHA-256: `c7218ccefca717b4f5d10dae24b84c78a1c60de575efa3896528567248e99e5a`

## Implementation handoff

Consume `/companions/pip-lab.webp`, `/companions/pip-studio.webp`, `/companions/pip-field.webp`, and `/companions/pip-play.webp`. Use the same square image box for all four so the shared baseline is preserved. These assets are static; reduced-motion handling and any transitions belong to the parent implementation. For a decorative companion use empty alt text and keep it outside navigation hit targets. These are illustrations of an original character, not a real pet or a claim about career evidence.

