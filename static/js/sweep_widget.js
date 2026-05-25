// LAMP parameter-sweep widget — animates PNG frames + drives a colored
// slider (center 33% = dataset, outer 33% each = ±100% extrapolation).
// Metadata is inlined into window.LAMP_SWEEPS by sweep_data.js so the page
// works on file:// without fetch().
(function () {
  const FPS = 4;

  function pad3(n) { return String(n).padStart(3, '0'); }

  function buildBounce(n) {
    const fwd = Array.from({ length: n }, (_, i) => i);
    const rev = Array.from({ length: Math.max(0, n - 2) }, (_, i) => n - 2 - i);
    return fwd.concat(rev);
  }

  function setupWidget(widget, data) {
    const car = widget.dataset.car;
    const param = widget.dataset.param;
    const view = widget.dataset.view || '';        // '' | '_front' | '_side'
    const key = param + view;
    const meta = data[car] && data[car][key];
    if (!meta) {
      console.warn('Missing sweep data for', car, key);
      return;
    }
    const values = meta.values;
    const n = values.length;
    const img = widget.querySelector('.sweep-img');
    const slider = widget.querySelector('.sweep-slider');
    // Wrap img + slider so the slider overlays on top of a CSS-cropped image
    if (img && slider && !widget.querySelector('.sweep-img-wrap')) {
      const wrap = document.createElement('div');
      wrap.className = 'sweep-img-wrap';
      img.parentNode.insertBefore(wrap, img);
      wrap.appendChild(img);
      wrap.appendChild(slider);
    }
    const ind = widget.querySelector('.sweep-indicator');
    const valSpan = widget.querySelector('.sweep-value-num');

    const seq = buildBounce(n);
    let i = 0;

    function tick() {
      const step = seq[i % seq.length];
      const path = './static/sweep_frames/' + car + '/' + key + '/step_' + pad3(step) + '.png';
      img.src = path;
      const pos = (n <= 1) ? 50 : (step / (n - 1)) * 100;
      ind.style.left = pos + '%';
      if (valSpan) valSpan.textContent = values[step].toFixed(2);
      i++;
    }

    tick();
    setInterval(tick, 1000 / FPS);
  }

  function init() {
    const data = window.LAMP_SWEEPS;
    if (!data) {
      console.error('LAMP_SWEEPS not loaded');
      return;
    }
    document.querySelectorAll('.sweep-widget').forEach(w => setupWidget(w, data));
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
