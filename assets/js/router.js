/* ==========================================================================
   router.js — Tiny hash router. Parses location.hash into a route + params
   and calls the matching renderer from window.Pages. Renders into #app.
   ========================================================================== */
(function () {
  const app = () => document.getElementById('app');

  // Route table: [pattern, pageFn]. ":x" captures a param.
  const ROUTES = [
    ['/', 'home'],
    ['/learn/:track', 'track'],
    ['/learn/:track/:lesson', 'lesson'],
    ['/tools', 'toolsHub'],
    ['/tools/:tool', 'tool'],
    ['/labs', 'labs'],
    ['/labs/:id', 'lab'],
    ['/resources', 'resourcesHub'],
    ['/resources/cheatsheets', 'cheatsheets'],
    ['/resources/ports', 'ports'],
    ['/resources/interview', 'interview'],
    ['/resources/topologies', 'topologies'],
    ['/commands', 'commands'],
    ['/quiz', 'quizHub'],
    ['/quiz/:topic', 'quiz'],
    ['/progress', 'progress'],
    ['/certificate', 'certificate']
  ];

  function parse(hash) {
    const path = (hash || '#/').replace(/^#/, '') || '/';
    const segs = path.split('/').filter(Boolean);
    for (const [pattern, page] of ROUTES) {
      const pSegs = pattern.split('/').filter(Boolean);
      if (pSegs.length !== segs.length) continue;
      const params = {}; let ok = true;
      for (let i = 0; i < pSegs.length; i++) {
        if (pSegs[i].startsWith(':')) params[pSegs[i].slice(1)] = decodeURIComponent(segs[i]);
        else if (pSegs[i] !== segs[i]) { ok = false; break; }
      }
      if (ok) return { page, params };
    }
    return { page: 'notFound', params: {} };
  }

  let current = null;

  function render() {
    const route = parse(location.hash);
    current = route;
    const fn = (window.Pages || {})[route.page];
    const mount = app();
    mount.innerHTML = '';
    window.scrollTo({ top: 0, behavior: 'instant' in window ? 'instant' : 'auto' });
    try {
      if (fn) fn(mount, route.params);
      else notFound(mount);
    } catch (err) {
      console.error('Render error', err);
      mount.innerHTML = `<div class="container section"><div class="empty-state">${window.icon('alert', 48)}<h2>Something went wrong</h2><p>${window.UI.esc(err.message)}</p></div></div>`;
    }
    window.UI.observeReveal(mount);
    window.UI.bindCodeCopy(mount);
    document.title = `${pageTitle(route)} · NetSchool`;
    window.App && window.App.highlightNav();
  }

  function pageTitle(route) {
    const map = { home: 'app.tagline', track: 'nav.ccna', lesson: 'nav.ccna', toolsHub: 'nav.tools', tool: 'nav.tools',
      labs: 'nav.labs', resourcesHub: 'nav.resources', cheatsheets: 'nav.cheatsheets', ports: 'nav.ports',
      interview: 'nav.interview', commands: 'nav.commands', quizHub: 'nav.quiz', quiz: 'nav.quiz',
      progress: 'nav.progress', certificate: 'nav.certificate', topologies: 'nav.topologies' };
    return window.t(map[route.page] || 'app.name');
  }

  function notFound(mount) {
    mount.innerHTML = `<div class="container section"><div class="empty-state">
      ${window.icon('alert', 64)}<h2>404</h2><p>${window.t('lesson.notFound')}</p>
      <a class="btn btn-primary" href="#/" style="margin-top:16px">${window.icon('home',18)} ${window.t('nav.home')}</a></div></div>`;
  }
  window.Pages = window.Pages || {};
  window.Pages.notFound = notFound;

  window.Router = {
    init() { window.addEventListener('hashchange', render); if (!location.hash) location.replace('#/'); render(); },
    render, parse, current: () => current
  };
})();
