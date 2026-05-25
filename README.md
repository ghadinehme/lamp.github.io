# LAMP

This website is inspired by the repositories for the [Nerfies website](https://nerfies.github.io).

**LAMP** (Linear Affine Mixing of Parametric shapes) is a data-efficient framework for controllable, interpretable 3D shape generation. LAMP aligns per-shape SIREN signed-distance-function (SDF) decoders by overfitting each exemplar from a shared anchor initialization, then synthesizes new geometries by solving a parameter-constrained affine mixing problem in the aligned weight space. The result is a generator that works with as few as 50 training shapes, supports safe extrapolation up to ±100% beyond the training parameter range, and exposes a linearity-mismatch safety metric that flags degenerate extrapolations.

If you find **LAMP** useful for your work, please cite:

```bibtex
@article{nehme2025lamp,
  title={LAMP: Data-Efficient Linear Affine Weight-Space Models for Parameter-Controlled 3D Shape Generation and Extrapolation},
  author={Nehme, Ghadi and Zhang, Yanxia and Shu, Dule and Klenk, Matt and Ahmed, Faez},
  journal={arXiv preprint arXiv:2510.22491},
  year={2025}
}
```

---

## Website License
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
  <img alt="Creative Commons License" style="border-width:0"
       src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" />
</a><br />
This website is licensed under a
<a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
Creative Commons Attribution-ShareAlike 4.0 International License</a>.
