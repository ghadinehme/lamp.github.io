# LAMP Project Page

Project page for **LAMP: Data-Efficient Linear Affine Weight-Space Models for
Parameter-Controlled 3D Shape Generation and Extrapolation** (ICML 2026
submission).

## Local preview
```bash
cd lamp.github.io
python3 -m http.server 8000
# → open http://localhost:8000
```

## Layout
```
lamp.github.io/
├── index.html
└── static/
    ├── css/         # bulma + custom
    ├── js/          # bulma carousel/slider + fontawesome
    ├── images/      # paper figures (PNG) and PDF→PNG conversions
    └── gifs/{C-HR,Porsche,Supra}/
                     # weight-space sweep animations
```

## YouTube placeholder
The video block embeds `1C6KqY-3Okw` (the CADFit demo). Replace with the LAMP
video ID in `index.html` at the `<iframe src=...>` line and the matching `Video`
button link.
