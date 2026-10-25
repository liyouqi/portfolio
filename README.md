# Li Da — personal website

Static HTML, CSS and JavaScript for [lida.today](https://lida.today/).

## Preview locally

```sh
python3 -m http.server 8765 --bind 127.0.0.1
```

Open `http://127.0.0.1:8765/`. The Cube Cloud case study is at
`http://127.0.0.1:8765/work/cube-cloud/`.

No installation or build is needed. Serve the repository root so nested pages
and shared assets resolve correctly. The existing hosting configuration is
unchanged; local edits do not publish the site.

## Content and assets

- `index.html`: homepage, visible project engineering explanations, experience and a direct blog link.
- `work/cube-cloud/index.html`: commercial enterprise-platform case study.
- `style.css`: shared dark/light theme and responsive layouts.
- `script.js`: navigation and theme preference.
- `assets/projects/platform-reader.webp`: a frame from the platform's recorded Reader demo.
- `assets/projects/rag-evidence.webp`: a frame from the RAG's recorded offline DORA demo.
- `assets/projects/rag-demo.gif`: the original recorded RAG demo, opened on request.

Screenshots retain their original content and can be opened at full resolution.
The risk workflow and Cube Cloud technology inventory use plain HTML text.
Original illustrations remain in the repository for recoverability.

See [the refinement record](docs/refinement-2026-10.md) for content provenance,
checks and remaining optional materials.
