# Website refinement — 25 October 2026

## Blog navigation and fuller project descriptions

The homepage article list has been removed at the owner's request. Both pages'
navigation now links directly to `https://liyouqi.github.io/` as **Blog**, and the
hero uses the same destination. Original blog articles remain untouched.

Expanded the main project descriptions without restoring decorative UI:

- Added career context to the introduction.
- Platform: model-independent reading/search, legal relationship distinctions,
  canonical-to-SQLite data flow, bounded document memory and storage fallback.
- RAG: candidate retrieval, claim-aware reranking, structural context recovery,
  release activation checks, evidence evaluation and public integration interfaces.
- Risk Copilot: reviewer decisions, warnings, exports, visible generation modes,
  CSV monitoring, challenge preparation, opinion input and follow-up drafts.
- Cube Cloud: a fuller homepage account of the engineering stack and delivery role.

Technical paragraphs remain visible and use the existing ordinary typography.
Removed unused Writing styles. Browser checks cover both pages at 390, 768 and
1440 px, both themes, mobile navigation and the direct Blog destination.

## Visual follow-up

The owner requested a less templated presentation after reviewing the first pass.
This follow-up supersedes the presentation choices described in the original record below.

- Removed the citation pull quote, its coloured vertical rule, and the remaining
  styled blockquote. The RAG statement is ordinary body text.
- Replaced slogan headings with project and section names; reduced project heading
  sizes and removed forced line breaks, uppercase labels and decorative numbering.
- Replaced the three-column progression with a compact project directory, retaining
  Knowledge / Intelligence / Workflow and links to each project.
- Moved important multi-turn, memory, citation and orchestration explanations directly
  into project prose. Removed the three repeated disclosure components.
- Replaced the risk workflow's boxes and arrows with a plain ordered sequence.
- Removed Selected Work cards, the Cube Cloud slogan graphic and generic data-mining
  artwork from the page. Projects and writing now use compact text lists.
- Removed portrait framing, image shadows, timeline dots, hover lifts, handwriting
  styles and scroll-reveal animation. Main-page section spacing is smaller, while
  body text is larger and more readable. Palette, font stack and theme switch remain.
- Simplified the Cube Cloud page to ordinary headings and a technology inventory.
- Removed theme colour transitions to avoid mixed foreground/background colours
  during switching. All content remains visible without JavaScript.

Both pages were rechecked in Chrome at 390, 768 and 1440 px in both themes:
no horizontal overflow, broken images or page exceptions; mobile navigation works.
HTML nesting, local links, anchors, image alt text, unique IDs, JavaScript syntax and
whitespace checks passed. Existing project and article destinations were preserved.

## Changes

- Kept the hero title, portrait, navigation, font stack, palette and theme switch.
  Shortened the introduction around enterprise engineering and current AI/data work.
- Kept the three-layer project narrative and removed its duplicate concluding chain.
  Project names now link to their sections.
- Replaced abstract platform/RAG images with frames from recorded local demonstrations.
  Images preserve their aspect ratio and colours and open at full resolution.
- Replaced the generic risk-dashboard illustration with a simplified diagram of the
  implemented workflow. It does not pretend to be an application screenshot.
- Added expandable engineering notes: multi-turn document context, IndexedDB thread
  persistence, citation ordering, claim-local evidence validation, corpus/index
  integrity, typed orchestration contracts and separate reviewer projections.
- Replaced the six decorative RAG steps with a concrete explanation of coverage and
  citation validation. The RAG demo is a local GIF because its configured GitHub
  remote returned an unauthenticated 404 during verification.
- Added the Cube Cloud commercial case study and put it beside Ethereum research.
  Removed Market Regime from Selected Work; its existing Writing link remains.
  Replaced the generic Cyber-Physical Systems feature. Original image assets remain.
- Replaced generic experience headings with the supplied companies, roles and
  contributions. Removed the claim of overall responsibility across 13 bank entities.
  Public dates use years only; roles without supplied individual years omit dates.
- Replaced the logo wall with three compact text groups; earlier technologies are secondary.
- Added canonical metadata and the existing logo as favicon. The case study has its
  own title, description, canonical URL and working links back to homepage sections.
- Made content visible without JavaScript, isolated theme-storage failures, added
  Escape-to-close navigation and avoided reveal thresholds that hide tall sections.

## Content basis

Personal history, Cube Cloud scope, responsibilities and enterprise technologies
come from the owner's supplied brief. No CV is required as proof of those statements.
No headcount, performance, adoption or business-impact metrics were invented.

Project mechanisms were checked against these local repositories on 25 October:

| Repository / observed HEAD | Source inspected | Content used |
| --- | --- | --- |
| regulatory_knowledge_platform / `7b4745f` | `README.md`, `src/copilot/web/ReaderCopilot.tsx`, `copilot-memory.ts`, `src/copilot/providers/configured-private-ai-provider.ts`, `src/agent/citation-text-projection.ts` | Canonical data, recent-turn context, document-keyed IndexedDB threads, bounded storage, load cancellation, Reader-order citation projection |
| regulatory-rag / `e5acd0a` | `README.md`, `docs/architecture.md`, `src/regulatory_rag/qa.py`, `private_ai.py` | Structured plans, deterministic coverage guard, claim-local citation validation, release boundaries, single-question engine |
| Governance-Agent-Platform / `bbaa8a2` | `README.md`, `agents/second_line/graph.py`, `services/api/store.py` | Explicit LangGraph, capability ports, linked quality checks, original candidates and reviewer overlays, lock-protected in-memory store |

These are source inspections, not fresh end-to-end validation of the three upstream
applications. Repository revisions identify the inspected checkouts, not their public
deployment state. Multi-agent orchestration and durable case tracking are explicitly
identified as next-stage work in the current risk project.

## Image provenance

- `platform-reader.webp`: frame 103 of the platform's 122-frame
  `docs/media/search-reader.gif` (1280 × 820).
- `rag-evidence.webp`: frame 59 of the RAG's 70-frame `docs/media/qa.gif`
  (1120 × 700).
- `rag-demo.gif`: unchanged copy of that RAG recording (about 444 KB).
- Frames were converted to WebP without cropping, overlays or invented UI.
  The RAG capture shows BM25 plus offline extractive mode on the legacy DORA corpus.
  It is not a demonstration of model-generated answers or the full configured release.

## Verification

- JavaScript syntax: `node --check script.js` passed.
- Whitespace: `git diff --check` passed.
- Static checks passed for local links, assets, anchors, duplicate IDs, image alt text
  and canonical metadata on both pages.
- Chrome browser checks passed on both pages at 390, 768 and 1440 px widths,
  in dark and light themes. No horizontal overflow, missing images, page exceptions
  or failed local resources. All three engineering disclosures opened and closed.
  Mobile menu and Escape handling passed.
- Content remains visible with JavaScript disabled. Theme switching still works when
  access to localStorage throws.
- Regular-motion reveal, theme persistence after reload, navigation to and from the
  case study, and loading the recorded GIF also passed in Chrome.
- External links: platform, GitHub profile, platform/risk repositories and all linked
  articles returned HTTP 200. The RAG repository returned 404 and is not linked.
  LinkedIn returned HTTP 999 (automated-access restriction); its existing URL is retained,
  not classified as a confirmed broken link.

This is focused browser and static verification, not a comprehensive accessibility
audit. No upstream project code was changed and no deployment, commit or push was made.

## Optional materials

- Add a public email if the owner chooses to expose one. LinkedIn remains the contact route.
- Add Download CV only when a current, public CV file is supplied. No placeholder button.
- Individual employment years can be added if desired; months and private CV details
  are intentionally unnecessary for the public site.
- A publicly accessible RAG repository URL can replace or complement the recorded demo.
- Cube Cloud can later include specific engineering decisions or outcomes supplied by
  the owner; the current case uses the provided scope and contributions without metrics.
