/* ==========================================================================
   ui.js — Small DOM utilities shared across pages: toast, clipboard, escaping,
   reveal-on-scroll, count-up, badges. Keep these dependency-free.
   ========================================================================== */
(function () {
  const UI = {
    el(html) { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstElementChild; },

    esc(s) {
      return String(s == null ? '' : s)
        .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
    },

    toast(msg, type = '') {
      let wrap = document.querySelector('.toast-wrap');
      if (!wrap) { wrap = this.el('<div class="toast-wrap" aria-live="polite"></div>'); document.body.appendChild(wrap); }
      const t = this.el(`<div class="toast ${type}">${this.esc(msg)}</div>`);
      wrap.appendChild(t);
      setTimeout(() => { t.style.opacity = '0'; t.style.transition = 'opacity .3s'; setTimeout(() => t.remove(), 320); }, 2400);
    },

    async copy(text) {
      try { await navigator.clipboard.writeText(text); }
      catch {
        const ta = document.createElement('textarea'); ta.value = text; document.body.appendChild(ta);
        ta.select(); try { document.execCommand('copy'); } catch (e) {} ta.remove();
      }
      this.toast(window.t('btn.copied'), 'success');
    },

    diffBadge(d) {
      const map = { beginner: 'badge-green', intermediate: 'badge-amber', advanced: 'badge-red' };
      const label = window.t('common.' + (d || 'beginner'));
      return `<span class="badge ${map[d] || 'badge-green'}">${label}</span>`;
    },

    // IntersectionObserver-based reveal animation for .reveal elements
    observeReveal(root = document) {
      const els = root.querySelectorAll('.reveal:not(.in)');
      if (!('IntersectionObserver' in window)) { els.forEach(e => e.classList.add('in')); return; }
      const io = new IntersectionObserver((entries) => {
        entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
      }, { threshold: 0.12 });
      els.forEach((e, i) => { e.style.animationDelay = (i % 8 * 60) + 'ms'; io.observe(e); });
    },

    countUp(el, target, suffix = '') {
      const dur = 1100, start = performance.now();
      function step(now) {
        const p = Math.min((now - start) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = Math.round(target * eased).toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    },

    // Wire up copy buttons inside rendered code blocks
    bindCodeCopy(root = document) {
      root.querySelectorAll('.code-block').forEach(block => {
        if (block.querySelector('.copy-btn')) return;
        const btn = this.el(`<button class="copy-btn" type="button">${window.t('btn.copy')}</button>`);
        btn.addEventListener('click', () => {
          const code = block.querySelector('code, pre') || block;
          this.copy(code.innerText.replace(/^\$ /gm, ''));
        });
        block.appendChild(btn);
      });
    }
  };
  window.UI = UI;
})();
