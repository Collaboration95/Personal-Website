# Interactive Pip companion assets

Delivered 20 October 2026. All four production sprite sheets are complete. Each contains four distinct generated poses of the approved Pip otter: idle, wave, happy and sleep. All four preserve the copper keepsake, cream muzzle, rounded ears and substantial otter tail, with lilac resin, peach ceramic, teal enamel and sage voxel materials respectively.

## Deliverables

| Era | Asset | Dimensions | Bytes |
| --- | --- | --- | ---: |
| Lab | [pip-lab.webp](../../public/companions/sprites/pip-lab.webp) | 512 × 512 | 56,412 |
| Studio | [pip-studio.webp](../../public/companions/sprites/pip-studio.webp) | 512 × 512 | 47,092 |
| Field | [pip-field.webp](../../public/companions/sprites/pip-field.webp) | 512 × 512 | 52,886 |
| Playground | [pip-play.webp](../../public/companions/sprites/pip-play.webp) | 512 × 512 | 46,634 |

Total: **203,024 bytes**. Each is below **180,000 bytes**. The [manifest](../../public/companions/sprites/manifest.json) provides geometry, hashes, source crops, packing coordinates and alpha checks.

## Frame contract

All sheets are **512 × 512**, with **four 256 × 256 cells** in a fixed 2 × 2 grid. Coordinates are zero-based; widths and heights are exclusive sizes.

| Pose | Grid position | x | y | Width | Height | CSS background position |
| --- | --- | ---: | ---: | ---: | ---: | --- |
| idle | Top left | 0 | 0 | 256 | 256 | 0% 0% |
| wave | Top right | 256 | 0 | 256 | 256 | 100% 0% |
| happy | Bottom left | 0 | 256 | 256 | 256 | 0% 100% |
| sleep | Bottom right | 256 | 256 | 256 | 256 | 100% 100% |

Use a square display box with `background-size: 200% 200%`, or extract the listed frame rectangle. At a 96px display size the background is 192 × 192 CSS pixels. No application changes are included in this asset handoff.

Every cell has horizontal artwork center x=128 (within half a pixel after integer rounding) and an **exclusive lower packing baseline y=225** (87.89% of the cell). Decoded nonzero alpha ends at y=224 in every frame. The complete visible silhouette stays inside a 26px transparent safety margin on every side. A single scale factor per era is applied to all four source poses, preserving the source character scale; sleep is naturally lower rather than independently enlarged. Generative pose changes include natural head/limb rotation and slight silhouette variation. These are discrete pose states for brief application motion, not an interpolated animation cycle.

## Generation provenance

- Design agent: Sol 6.1. Actual artwork tool: built-in `image_gen.imagegen` (`image_gen__imagegen`). The tool exposes no confirmed underlying image-model identifier.
- Five successful built-in calls: one per era plus one playground spacing correction. Four selected outputs; no incomplete variants or tool/rate-limit errors.
- Each call used `transparent_background: true` and exactly one `referenced_image_paths` input, the corresponding existing `public/companions/pip-{era}.webp`. Each reference was inspected with `view_image` before generation.
- Each selected master is a 1254 × 1254 RGBA PNG. Original PNG masters and their embedded metadata remain unchanged in the generation tool's local image storage, outside the repository. Master basenames and SHA-256 hashes below identify them without publishing private machine paths.
- Sharp 0.35.3 / libwebp 1.6.0 performed only deterministic extraction, proportional resizing, transparent packing, preview scaling and WebP optimization. No replacement art was drawn.
- The initial playground output was rejected because its source bounding rectangles overlapped across cell boundaries. The correction changed the spacing requirement; it did not use cropped or erased character parts.
- All four existing base images retain the SHA-256 values in the earlier [companion asset record](companion-assets.md). Application integration, controls and motion remain the parent task's responsibility.

## Exact submitted prompts

Each block below is the complete literal prompt string submitted for that selected master. References and transparency settings are recorded above.

### Lab — selected

```text
Use case: stylized-concept
Asset type: production transparent 2x2 sprite sheet for an interactive portfolio otter companion.
Input image 1: approved era-specific Pip reference; preserve exact character identity, material, palette and rendering style.
Primary request: Generate ONE square sprite sheet containing EXACTLY FOUR separate full-body poses of the SAME Pip, arranged in an evenly spaced 2 columns by 2 rows grid. Each quadrant is one independent frame. No grid lines.
Character invariants: a small original otter collectible toy, large rounded head, small round ears, cream broad muzzle and whiskers, dark oval eyes and dark nose, bean-shaped body, short paws, substantial tapering otter tail curling toward viewer's right, copper oval keepsake held at chest. Preserve reference proportions, camera at three-quarter-left and warm soft upper-left lighting. 
Pose order MUST be:
TOP LEFT: IDLE, upright normal awake sitting pose, both eyes open, gentle curious face, both paws near copper keepsake.
TOP RIGHT: WAVE, same upright sitting pose with ONE PAW raised HIGH BESIDE HEAD in an unmistakable greeting, other paw holding copper keepsake; eyes open.
BOTTOM LEFT: HAPPY, delighted joyous open-mouth smile with visible upturned cheeks and closed crescent smile eyes, both paws tightly HUGGING the copper keepsake against chest, head tilted a little. The whole-body delighted pose must visibly differ from idle.
BOTTOM RIGHT: SLEEP, curled low and drowsy with head tipped sideways onto paws, eyes clearly CLOSED, long tail wrapped around resting body, copper keepsake held close and still visible. Clearly lower and more curled than idle. No sleep symbols.
Alignment: four equally sized square cells. Full character centered at the same relative x in every cell; use the SAME physical head/body scale, camera and material throughout. Feet or lower resting body must sit on a shared relative baseline 88% down each cell. Sleep is naturally shorter but not enlarged. Every entire silhouette must stay within its own cell with 10% empty transparent padding around all extremities, including wave paw, ears, feet and tail. No clipping or overlap between cells. Design for four 256x256 cells in a final 512x512 sheet and strong readability at 96px per cell. Clean bold silhouette and legible gestures matter more than tiny surface detail.
Backdrop: REAL TRANSPARENT ALPHA everywhere outside the four characters, including between cells. Object shading only; no floor, no ground shadow, no exterior glow. 
Avoid: extra characters within cells, extra frames, labels, lettering, text, watermarks, props, clothes, scene, floor, pedestal, border, divider lines, opaque backdrop, fake checkerboard. The only object is each pose of Pip and its copper keepsake.
Materials/textures: LAB era: luminous soft lilac glass/resin with rounded thickness, restrained translucency and polished highlights. Cream frosted muzzle, copper keepsake. Do not make Pip ghostlike.
```

### Studio — selected

```text
Use case: stylized-concept
Asset type: production transparent 2x2 sprite sheet for an interactive portfolio otter companion.
Input image 1: approved era-specific Pip reference; preserve exact character identity, material, palette and rendering style.
Primary request: Generate ONE square sprite sheet containing EXACTLY FOUR separate full-body poses of the SAME Pip, arranged in an evenly spaced 2 columns by 2 rows grid. Each quadrant is one independent frame. No grid lines.
Character invariants: a small original otter collectible toy, large rounded head, small round ears, cream broad muzzle and whiskers, dark oval eyes and dark nose, bean-shaped body, short paws, substantial tapering otter tail curling toward viewer's right, copper oval keepsake held at chest. Preserve reference proportions, camera at three-quarter-left and warm soft upper-left lighting. 
Pose order MUST be:
TOP LEFT: IDLE, upright normal awake sitting pose, both eyes open, gentle curious face, both paws near copper keepsake.
TOP RIGHT: WAVE, same upright sitting pose with ONE PAW raised HIGH BESIDE HEAD in an unmistakable greeting, other paw holding copper keepsake; eyes open.
BOTTOM LEFT: HAPPY, delighted joyous open-mouth smile with visible upturned cheeks and closed crescent smile eyes, both paws tightly HUGGING the copper keepsake against chest, head tilted a little. The whole-body delighted pose must visibly differ from idle.
BOTTOM RIGHT: SLEEP, curled low and drowsy with head tipped sideways onto paws, eyes clearly CLOSED, long tail wrapped around resting body, copper keepsake held close and still visible. Clearly lower and more curled than idle. No sleep symbols.
Alignment: four equally sized square cells. Full character centered at the same relative x in every cell; use the SAME physical head/body scale, camera and material throughout. Feet or lower resting body must sit on a shared relative baseline 88% down each cell. Sleep is naturally shorter but not enlarged. Every entire silhouette must stay within its own cell with 10% empty transparent padding around all extremities, including wave paw, ears, feet and tail. No clipping or overlap between cells. Design for four 256x256 cells in a final 512x512 sheet and strong readability at 96px per cell. Clean bold silhouette and legible gestures matter more than tiny surface detail.
Backdrop: REAL TRANSPARENT ALPHA everywhere outside the four characters, including between cells. Object shading only; no floor, no ground shadow, no exterior glow. 
Avoid: extra characters within cells, extra frames, labels, lettering, text, watermarks, props, clothes, scene, floor, pedestal, border, divider lines, opaque backdrop, fake checkerboard. The only object is each pose of Pip and its copper keepsake.
Materials/textures: STUDIO era: matte warm peach ceramic with subtle handmade surface texture and soft highlights. Cream muzzle, copper keepsake. Solid ceramic, not translucent glass.
```

### Field — selected

```text
Use case: stylized-concept
Asset type: production transparent 2x2 sprite sheet for an interactive portfolio otter companion.
Input image 1: approved era-specific Pip reference; preserve exact character identity, material, palette and rendering style.
Primary request: Generate ONE square sprite sheet containing EXACTLY FOUR separate full-body poses of the SAME Pip, arranged in an evenly spaced 2 columns by 2 rows grid. Each quadrant is one independent frame. No grid lines.
Character invariants: a small original otter collectible toy, large rounded head, small round ears, cream broad muzzle and whiskers, dark oval eyes and dark nose, bean-shaped body, short paws, substantial tapering otter tail curling toward viewer's right, copper oval keepsake held at chest. Preserve reference proportions, camera at three-quarter-left and warm soft upper-left lighting. 
Pose order MUST be:
TOP LEFT: IDLE, upright normal awake sitting pose, both eyes open, gentle curious face, both paws near copper keepsake.
TOP RIGHT: WAVE, same upright sitting pose with ONE PAW raised HIGH BESIDE HEAD in an unmistakable greeting, other paw holding copper keepsake; eyes open.
BOTTOM LEFT: HAPPY, delighted joyous open-mouth smile with visible upturned cheeks and closed crescent smile eyes, both paws tightly HUGGING the copper keepsake against chest, head tilted a little. The whole-body delighted pose must visibly differ from idle.
BOTTOM RIGHT: SLEEP, curled low and drowsy with head tipped sideways onto paws, eyes clearly CLOSED, long tail wrapped around resting body, copper keepsake held close and still visible. Clearly lower and more curled than idle. No sleep symbols.
Alignment: four equally sized square cells. Full character centered at the same relative x in every cell; use the SAME physical head/body scale, camera and material throughout. Feet or lower resting body must sit on a shared relative baseline 88% down each cell. Sleep is naturally shorter but not enlarged. Every entire silhouette must stay within its own cell with 10% empty transparent padding around all extremities, including wave paw, ears, feet and tail. No clipping or overlap between cells. Design for four 256x256 cells in a final 512x512 sheet and strong readability at 96px per cell. Clean bold silhouette and legible gestures matter more than tiny surface detail.
Backdrop: REAL TRANSPARENT ALPHA everywhere outside the four characters, including between cells. Object shading only; no floor, no ground shadow, no exterior glow. 
Avoid: extra characters within cells, extra frames, labels, lettering, text, watermarks, props, clothes, scene, floor, pedestal, border, divider lines, opaque backdrop, fake checkerboard. The only object is each pose of Pip and its copper keepsake.
Materials/textures: FIELD era: desaturated teal satin enamel over molded hardware, fine recessed seams within the body/limb joins. Cream muzzle, copper keepsake. No gadgets.
```

### Playground — selected

```text
Use case: stylized-concept
Asset type: production transparent 2x2 sprite sheet for an interactive portfolio otter companion.
Input image 1: approved era-specific Pip reference; preserve exact character identity, material, palette and rendering style.
Primary request: Generate ONE square sprite sheet containing EXACTLY FOUR separate full-body poses of the SAME Pip, arranged in an evenly spaced 2 columns by 2 rows grid. Each quadrant is one independent frame. No grid lines.
Character invariants: a small original otter collectible toy, large rounded head, small round ears, cream broad muzzle and whiskers, dark oval eyes and dark nose, bean-shaped body, short paws, substantial tapering otter tail curling toward viewer's right, copper oval keepsake held at chest. Preserve reference proportions, camera at three-quarter-left and warm soft upper-left lighting. 
Pose order MUST be:
TOP LEFT: IDLE, upright normal awake sitting pose, both eyes open, gentle curious face, both paws near copper keepsake.
TOP RIGHT: WAVE, same upright sitting pose with ONE PAW raised HIGH BESIDE HEAD in an unmistakable greeting, other paw holding copper keepsake; eyes open.
BOTTOM LEFT: HAPPY, delighted joyous open-mouth smile with visible upturned cheeks and closed crescent smile eyes, both paws tightly HUGGING the copper keepsake against chest, head tilted a little. The whole-body delighted pose must visibly differ from idle.
BOTTOM RIGHT: SLEEP, curled low and drowsy with head tipped sideways onto paws, eyes clearly CLOSED, long tail wrapped around resting body, copper keepsake held close and still visible. Clearly lower and more curled than idle. No sleep symbols.
Alignment: four equally sized square cells. Full character centered at the same relative x in every cell; use the SAME physical head/body scale, camera and material throughout. Feet or lower resting body must sit on a shared relative baseline 88% down each cell. Sleep is naturally shorter but not enlarged. Every entire silhouette must stay within its own cell with 10% empty transparent padding around all extremities, including wave paw, ears, feet and tail. No clipping or overlap between cells. Design for four 256x256 cells in a final 512x512 sheet and strong readability at 96px per cell. Clean bold silhouette and legible gestures matter more than tiny surface detail.
Backdrop: REAL TRANSPARENT ALPHA everywhere outside the four characters, including between cells. Object shading only; no floor, no ground shadow, no exterior glow. 
Avoid: extra characters within cells, extra frames, labels, lettering, text, watermarks, props, clothes, scene, floor, pedestal, border, divider lines, opaque backdrop, fake checkerboard. The only object is each pose of Pip and its copper keepsake.
Materials/textures: PLAY era: desaturated sage molded voxel/cartridge toy, chunky softly beveled stepped head, cheeks, paws and tail. Dimensional physical toy with broad faces, round-ish stepped ears, cream muzzle and chest, dark oval eyes, copper stepped keepsake.
CRITICAL GRID SPACING: The previous attempt placed figures too close together. Render on a strictly even 2x2 grid with each complete figure INSIDE the CENTERED 72% width and 72% height of its own quadrant. Each quadrant has a wide EMPTY TRANSPARENT gutter of AT LEAST 14% on all four sides. Thus NO silhouette can approach or cross the middle vertical or horizontal grid boundaries. The entire top-left tail and entire top-right raised paw MUST stay in separate nonoverlapping rectangles. The top row feet and bottom row ears must have a wide empty transparent gap. Reduce all four subjects equally in the canvas to enforce gutters; preserve the same original character/body size relative to one another. No lines or visible grid.
```

### Playground — rejected first attempt

This output was not shipped. Its prompt is retained to account for every generation call.

```text
Use case: stylized-concept
Asset type: production transparent 2x2 sprite sheet for an interactive portfolio otter companion.
Input image 1: approved era-specific Pip reference; preserve exact character identity, material, palette and rendering style.
Primary request: Generate ONE square sprite sheet containing EXACTLY FOUR separate full-body poses of the SAME Pip, arranged in an evenly spaced 2 columns by 2 rows grid. Each quadrant is one independent frame. No grid lines.
Character invariants: a small original otter collectible toy, large rounded head, small round ears, cream broad muzzle and whiskers, dark oval eyes and dark nose, bean-shaped body, short paws, substantial tapering otter tail curling toward viewer's right, copper oval keepsake held at chest. Preserve reference proportions, camera at three-quarter-left and warm soft upper-left lighting. 
Pose order MUST be:
TOP LEFT: IDLE, upright normal awake sitting pose, both eyes open, gentle curious face, both paws near copper keepsake.
TOP RIGHT: WAVE, same upright sitting pose with ONE PAW raised HIGH BESIDE HEAD in an unmistakable greeting, other paw holding copper keepsake; eyes open.
BOTTOM LEFT: HAPPY, delighted joyous open-mouth smile with visible upturned cheeks and closed crescent smile eyes, both paws tightly HUGGING the copper keepsake against chest, head tilted a little. The whole-body delighted pose must visibly differ from idle.
BOTTOM RIGHT: SLEEP, curled low and drowsy with head tipped sideways onto paws, eyes clearly CLOSED, long tail wrapped around resting body, copper keepsake held close and still visible. Clearly lower and more curled than idle. No sleep symbols.
Alignment: four equally sized square cells. Full character centered at the same relative x in every cell; use the SAME physical head/body scale, camera and material throughout. Feet or lower resting body must sit on a shared relative baseline 88% down each cell. Sleep is naturally shorter but not enlarged. Every entire silhouette must stay within its own cell with 10% empty transparent padding around all extremities, including wave paw, ears, feet and tail. No clipping or overlap between cells. Design for four 256x256 cells in a final 512x512 sheet and strong readability at 96px per cell. Clean bold silhouette and legible gestures matter more than tiny surface detail.
Backdrop: REAL TRANSPARENT ALPHA everywhere outside the four characters, including between cells. Object shading only; no floor, no ground shadow, no exterior glow. 
Avoid: extra characters within cells, extra frames, labels, lettering, text, watermarks, props, clothes, scene, floor, pedestal, border, divider lines, opaque backdrop, fake checkerboard. The only object is each pose of Pip and its copper keepsake.
Materials/textures: PLAY era: desaturated sage molded voxel/cartridge toy, chunky softly beveled stepped head, cheeks, paws and tail. Dimensional physical toy with broad faces, round-ish stepped ears, cream muzzle and chest, dark oval eyes, copper stepped keepsake.
```

## Deterministic processing

1. Read source RGBA pixels. Divide each source using the source split coordinates below, then measure pixels with alpha ≥16 within each region. Include a further 3px on every side to retain antialiased edge pixels. This threshold determines framing only; alpha inside each extracted rectangle is preserved.
2. Use one common scale for all four crops in an era: `196 / max(all four crop widths and heights)`. Round each resulting width and height to the nearest integer, using Sharp Lanczos3. The artwork is never stretched to a different aspect ratio.
3. For each 256px cell, set `left = round((256 - resizedWidth) / 2)` and `top = 225 - resizedHeight`. Composite the extracted raster over transparent RGBA at that offset. Pack the four cells at the frame coordinates above.
4. Encode with `webp({ quality: 90, alphaQuality: 100, effort: 6 })`. Metadata is stripped in delivered WebPs; the master identity is retained here.
5. Decode the WebPs and verify 512 × 512 RGBA, alpha 0–255, partially transparent edges, <180,000 bytes each, exact shared lower alpha extent y=224, and zero nontransparent pixels in the outer 26px of every cell.

Source region split lines (x, y): lab (640, 645); studio (645, 630); field (650, 640); playground (645, 660). These are source-master slicing guides, not runtime frame boundaries.

### Exact crop and packing measurements

Source crop is (left, top, width, height) in the selected PNG. Offset is (left, top) within its final 256px cell.

| Era | Pose | Source crop | Resized artwork | Cell offset |
| --- | --- | --- | --- | --- |
| Lab | idle | 99, 66, 525, 573 | 178 × 194 | 39, 31 |
| Lab | wave | 670, 61, 567, 576 | 192 × 195 | 32, 30 |
| Lab | happy | 133, 656, 487, 543 | 165 × 184 | 46, 41 |
| Lab | sleep | 646, 784, 578, 407 | 196 × 138 | 30, 87 |
| Studio | idle | 115, 54, 520, 568 | 178 × 195 | 39, 30 |
| Studio | wave | 721, 50, 503, 572 | 172 × 196 | 42, 29 |
| Studio | happy | 150, 643, 470, 548 | 161 × 188 | 48, 37 |
| Studio | sleep | 659, 769, 519, 418 | 178 × 143 | 39, 82 |
| Field | idle | 104, 60, 517, 569 | 177 × 194 | 40, 31 |
| Field | wave | 677, 55, 555, 574 | 190 × 196 | 33, 29 |
| Field | happy | 120, 652, 506, 561 | 173 × 192 | 42, 33 |
| Field | sleep | 674, 763, 548, 434 | 187 × 148 | 35, 77 |
| Playground | idle | 147, 104, 473, 539 | 172 × 196 | 42, 29 |
| Playground | wave | 704, 105, 473, 538 | 172 × 196 | 42, 29 |
| Playground | happy | 160, 681, 463, 516 | 168 × 188 | 44, 37 |
| Playground | sleep | 671, 816, 506, 367 | 184 × 133 | 36, 92 |

### Alpha verification

| Era | Fully transparent pixels | Intermediate alpha pixels | Opaque pixels | Nontransparent pixels outside 26px cell margin |
| --- | ---: | ---: | ---: | ---: |
| Lab | 171,724 | 88,634 | 1,786 | 0 |
| Studio | 179,057 | 81,292 | 1,795 | 0 |
| Field | 175,622 | 84,705 | 1,817 | 0 |
| Playground | 179,142 | 81,196 | 1,806 | 0 |

## Visual verification

- Inspected every final 512px sheet and all sixteen individual cells at a 96px display size.
- Checked dark graphite and warm light surface composites using the final decoded WebPs. At preview widths 728px and 360px, all four 512px sheets decoded, all sixteen poses rendered, and there was no horizontal overflow or reported console error.
- Idle has open eyes and paws at the keepsake; wave raises one paw beside the head; happy has a delighted open smile, crescent eyes, tilted head and both paws hugging the keepsake; sleep has closed eyes, a low curled body, head resting on paws and wrapped tail.
- All sixteen poses are distinct, transparent, readable and uncut at 96px. No extra character, label, unrelated prop, floor, backdrop, exterior cast shadow or cell divider is present.
- Recognizable material treatments remain visible at 96px. 512px sheet geometry is sufficient; 768px sheets were unnecessary.
- This validates raster assets and the isolated preview only. Application click/tap/keyboard controls, accessible state names, reduced motion and CSS transitions require parent integration.

## Master and delivered checksums

### Lab

- Selected master basename: `exec-6c0d12fa-99e3-4a3d-89bc-155b778edd64.png`
- Master SHA-256: `5538569dde21a7c5ab7cef3170430a1d20b0a9219d09e007770274e55287a614`
- Delivered WebP SHA-256: `cbd6dc33d62beec5a7d9df9be78f1a25c07cc2f405695e06d1878654f1fa63ca`
- Input reference SHA-256: `b61ff2e51cc3097b1117d1bdfea2fe1d9fb56cc7c2c08cbfd68646d19bb7258a`

### Studio

- Selected master basename: `exec-0006d6d8-3bf3-4790-8562-4be5a11f9932.png`
- Master SHA-256: `df1d61cc3d428f182a214a2da5be56a981e70234971b8cf5f78630acfa5da000`
- Delivered WebP SHA-256: `c862b3b0bb46b17ca5e64832ce7b78f17ac4ee8f60791206f638cf920a6ec151`
- Input reference SHA-256: `9dd2ae096d2276c089178c6664ec141d83e883c5bb4124050b3f848c27132952`

### Field

- Selected master basename: `exec-5eb0386b-503a-40cb-8ffa-7248cac09729.png`
- Master SHA-256: `73647c9f822aed767cd974b48586c4454f5cf0850453dcae7f2d148ef7eccb53`
- Delivered WebP SHA-256: `a96a4d7d17c2b5395b38d9806eba127ee5c25b427908bde08dd496c38326af3b`
- Input reference SHA-256: `0a9b6871b7c7bfbb7ac4e990a54ea8c0886ff3458dfbcefcca70e74f76b3dbaa`

### Playground

- Selected master basename: `exec-7cebe492-7850-4e3f-8748-5b1eb74d9561.png`
- Master SHA-256: `213095e3cb35a9544c1b7b7a0eb8e55240e6ae6fcaf2bb2ba7475876dad52219`
- Delivered WebP SHA-256: `2754530fea1253fc9df7dc87b6b76488c30cef7a70e8827fde48a42dafc00d0d`
- Input reference SHA-256: `c7218ccefca717b4f5d10dae24b84c78a1c60de575efa3896528567248e99e5a`

### Rejected playground master

- Basename: `exec-ee0490eb-dce0-4759-a7ce-38ed9467f48e.png`
- SHA-256: `a21a060c498b4c1ef740452d689230693e246b746cbaa221fae79ebcb2d79f72`
- Reason: insufficient source gutters; replaced by the selected spaced output above.

No blockers remain for the assigned artwork deliverables.

