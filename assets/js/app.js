/* ==========================================================================
   app.js — Application shell: theme, language, header/footer, mobile nav,
   global search, keyboard shortcuts, service-worker registration.
   Runs after data + helpers are loaded; hands routing off to router.js.
   ========================================================================== */
(function () {
  const NAV = [
    { key: 'nav.home', href: '#/', icon: 'home' },
    { key: 'nav.ccna', href: '#/learn/ccna', icon: 'route' },
    { key: 'nav.netplus', href: '#/learn/networkplus', icon: 'layers' },
    { key: 'nav.tools', href: '#/tools', icon: 'tool' },
    { key: 'nav.labs', href: '#/labs', icon: 'flask' },
    { key: 'nav.resources', href: '#/resources', icon: 'book' },
    { key: 'nav.progress', href: '#/progress', icon: 'activity' }
  ];

  /* ---------- Theme ---------- */
  function initTheme() {
    const saved = window.Store.getTheme();
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = saved || (prefersDark ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', theme);
  }
  function toggleTheme() {
    const cur = document.documentElement.getAttribute('data-theme');
    const next = cur === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    window.Store.setTheme(next);
    updateThemeIcon();
  }
  function updateThemeIcon() {
    const btn = document.getElementById('themeBtn');
    if (btn) btn.innerHTML = window.icon(document.documentElement.getAttribute('data-theme') === 'dark' ? 'sun' : 'moon', 20);
  }

  /* ---------- Header / Footer ---------- */
  function buildHeader() {
    const header = document.getElementById('appHeader');
    header.innerHTML = `
      <div class="container">
        <button class="icon-btn menu-toggle" id="menuToggle" aria-label="${t('common.menu')}" aria-expanded="false">${icon('menu', 22)}</button>
        <a class="brand" href="#/" aria-label="${t('app.name')}">
          <span class="logo">${icon('network', 22)}</span>
          <span>Net<b>School</b></span>
        </a>
        <nav class="main-nav" id="mainNav" aria-label="Primary">
          ${NAV.map(n => `<a href="${n.href}" data-i18n="${n.key}">${t(n.key)}</a>`).join('')}
        </nav>
        <div class="header-actions">
          <button class="icon-btn" id="searchBtn" aria-label="${t('search.open')}" title="${t('search.open')} (Ctrl+K)">${icon('search', 20)}</button>
          <button class="icon-btn" id="themeBtn" aria-label="${t('common.theme')}" title="${t('common.theme')}"></button>
          <button class="icon-btn lang-toggle" id="langBtn" aria-label="language">${i18n.lang === 'ar' ? 'EN' : 'ع'}</button>
        </div>
      </div>`;
    updateThemeIcon();

    document.getElementById('themeBtn').addEventListener('click', toggleTheme);
    document.getElementById('searchBtn').addEventListener('click', openSearch);
    document.getElementById('langBtn').addEventListener('click', () => {
      i18n.toggle();
      document.getElementById('langBtn').textContent = i18n.lang === 'ar' ? 'EN' : 'ع';
      window.Router.render(); // re-render current route in new language
    });
    const menuToggle = document.getElementById('menuToggle');
    menuToggle.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      const open = nav.classList.toggle('open');
      menuToggle.setAttribute('aria-expanded', open);
    });
  }

  function buildFooter() {
    const f = document.getElementById('appFooter');
    const col = (titleKey, links) => `
      <div><h5 data-i18n="${titleKey}">${t(titleKey)}</h5><ul>
        ${links.map(l => `<li><a href="${l.href}" data-i18n="${l.key}">${t(l.key)}</a></li>`).join('')}
      </ul></div>`;
    f.innerHTML = `
      <div class="container">
        <div class="footer-grid">
          <div>
            <a class="brand" href="#/"><span class="logo">${icon('network', 22)}</span><span>Net<b>School</b></span></a>
            <p style="margin-top:14px;max-width:280px" data-i18n="footer.tagline">${t('footer.tagline')}</p>
          </div>
          ${col('footer.learn', [
            { key: 'nav.ccna', href: '#/learn/ccna' },
            { key: 'nav.netplus', href: '#/learn/networkplus' },
            { key: 'nav.labs', href: '#/labs' },
            { key: 'nav.quiz', href: '#/quiz' }
          ])}
          ${col('footer.tools', [
            { key: 'nav.subnet', href: '#/tools/subnet' },
            { key: 'nav.osi', href: '#/tools/osi' },
            { key: 'nav.tools', href: '#/tools' },
            { key: 'nav.certificate', href: '#/certificate' }
          ])}
          ${col('footer.resources', [
            { key: 'nav.cheatsheets', href: '#/resources/cheatsheets' },
            { key: 'nav.ports', href: '#/resources/ports' },
            { key: 'nav.commands', href: '#/commands' },
            { key: 'nav.interview', href: '#/resources/interview' }
          ])}
        </div>
        <div class="footer-bottom">
          <p>© ${new Date().getFullYear()} NetSchool · <span data-i18n="footer.rights">${t('footer.rights')}</span></p>
        </div>
      </div>`;
  }

  function highlightNav() {
    const hash = location.hash || '#/';
    document.querySelectorAll('#mainNav a').forEach(a => {
      const h = a.getAttribute('href');
      const active = h === '#/' ? hash === '#/' : hash.startsWith(h);
      a.classList.toggle('active', active);
    });
    document.getElementById('mainNav')?.classList.remove('open');
  }

  /* ---------- Search ---------- */
  let searchIdx = null, searchSel = 0, searchHits = [];
  function buildSearchModal() {
    const m = window.UI.el(`
      <div class="search-modal" id="searchModal" role="dialog" aria-modal="true" aria-label="${t('search.open')}">
        <div class="search-box">
          <div class="search-input-row">
            ${icon('search', 20)}
            <input id="searchInput" type="search" placeholder="${t('search.placeholder')}" autocomplete="off" aria-label="${t('search.placeholder')}">
            <kbd>Esc</kbd>
          </div>
          <div class="search-results" id="searchResults"></div>
        </div>
      </div>`);
    document.body.appendChild(m);
    m.addEventListener('click', e => { if (e.target === m) closeSearch(); });
    const input = m.querySelector('#searchInput');
    input.addEventListener('input', () => runSearch(input.value));
    input.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown') { e.preventDefault(); moveSel(1); }
      else if (e.key === 'ArrowUp') { e.preventDefault(); moveSel(-1); }
      else if (e.key === 'Enter') { const a = searchHits[searchSel]; if (a) { location.hash = a.href; closeSearch(); } }
    });
  }
  function openSearch() {
    if (!searchIdx) searchIdx = window.Data.searchIndex();
    document.getElementById('searchModal').classList.add('open');
    const inp = document.getElementById('searchInput');
    inp.value = ''; inp.focus(); runSearch('');
  }
  function closeSearch() { document.getElementById('searchModal')?.classList.remove('open'); }
  function moveSel(d) {
    const items = document.querySelectorAll('.search-item');
    if (!items.length) return;
    searchSel = (searchSel + d + items.length) % items.length;
    items.forEach((it, i) => it.classList.toggle('sel', i === searchSel));
    items[searchSel].scrollIntoView({ block: 'nearest' });
  }
  function runSearch(q) {
    searchIdx = searchIdx || window.Data.searchIndex();
    const res = document.getElementById('searchResults');
    q = q.trim().toLowerCase();
    searchSel = 0;
    if (!q) {
      searchHits = searchIdx.filter(x => x.type === 'lesson').slice(0, 8);
    } else {
      searchHits = searchIdx
        .map(x => ({ x, s: x.text.indexOf(q) }))
        .filter(o => o.s >= 0)
        .sort((a, b) => a.s - b.s)
        .slice(0, 12)
        .map(o => o.x);
    }
    if (!searchHits.length) { res.innerHTML = `<div class="search-empty">${icon('search', 32)}<p>${t('search.empty')}</p></div>`; return; }
    const typeIcon = { lesson: 'book', command: 'terminal', port: 'server' };
    res.innerHTML = searchHits.map((h, i) => `
      <a class="search-item ${i === 0 ? 'sel' : ''}" href="${h.href}">
        <div style="display:flex;align-items:center;gap:10px">
          <span style="color:var(--primary)">${icon(typeIcon[h.type] || 'file', 18)}</span>
          <div><div class="si-title">${window.UI.esc(h.title)}</div>
          <div class="si-meta">${window.UI.esc(h.sub || h.type)}</div></div>
        </div>
      </a>`).join('');
    res.querySelectorAll('.search-item').forEach(a => a.addEventListener('click', closeSearch));
  }

  /* ---------- Keyboard shortcuts ---------- */
  function initShortcuts() {
    document.addEventListener('keydown', e => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); openSearch(); }
      else if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); openSearch(); }
      else if (e.key === 'Escape') closeSearch();
      else if (e.altKey && e.key.toLowerCase() === 't') toggleTheme();
      else if (e.altKey && e.key.toLowerCase() === 'l') { i18n.toggle(); window.Router.render(); }
    });
  }

  /* ---------- PWA ---------- */
  function initPWA() {
    if ('serviceWorker' in navigator && location.protocol.startsWith('http')) {
      window.addEventListener('load', () => navigator.serviceWorker.register('sw.js').catch(() => {}));
    }
  }

  /* ---------- Boot ---------- */
  function boot() {
    initTheme();
    i18n.apply();
    buildHeader();
    buildFooter();
    buildSearchModal();
    initShortcuts();
    initPWA();
    window.Router.init();
    window.addEventListener('hashchange', highlightNav);
    highlightNav();
    i18n.onChange(() => { buildHeader(); buildFooter(); highlightNav(); });
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();

  window.App = { toggleTheme, openSearch, highlightNav };
})();
