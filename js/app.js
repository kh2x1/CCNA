/* ============================================================
   منطق الموقع: التنقّل، التوجيه (Hash routing)، البحث، الوضع الليلي
   ============================================================ */
(function () {
  "use strict";

  const data = window.CURRICULUM || [];

  // قائمة مسطّحة بكل الدروس لتسهيل التنقّل والبحث
  const flat = [];
  data.forEach((mod) => {
    mod.lessons.forEach((lesson) => {
      flat.push({ modId: mod.id, modTitle: mod.title, ...lesson });
    });
  });

  const els = {
    nav: document.getElementById("nav"),
    content: document.getElementById("content"),
    sidebar: document.getElementById("sidebar"),
    overlay: document.getElementById("overlay"),
    menuToggle: document.getElementById("menuToggle"),
    themeToggle: document.getElementById("themeToggle"),
    searchInput: document.getElementById("searchInput"),
    searchResults: document.getElementById("searchResults"),
    toTop: document.getElementById("toTop"),
  };

  /* ---------- بناء القائمة الجانبية ---------- */
  function buildNav() {
    const html = data
      .map(
        (mod) => `
        <div class="nav-group" data-mod="${mod.id}">
          <button class="nav-group-title" data-toggle="${mod.id}">
            <span>${mod.title}</span>
            ${mod.badge ? `<span class="nav-badge">${mod.badge}</span>` : ""}
            <span class="chev">▾</span>
          </button>
          <ul class="nav-items">
            ${mod.lessons
              .map(
                (l) =>
                  `<li><a href="#/${l.id}" data-lesson="${l.id}">${l.title}</a></li>`
              )
              .join("")}
          </ul>
        </div>`
      )
      .join("");
    els.nav.innerHTML = html;

    els.nav.querySelectorAll("[data-toggle]").forEach((btn) => {
      btn.addEventListener("click", () => {
        btn.closest(".nav-group").classList.toggle("collapsed");
      });
    });

    els.nav.querySelectorAll("[data-lesson]").forEach((a) => {
      a.addEventListener("click", () => closeSidebar());
    });
  }

  /* ---------- الصفحة الرئيسية ---------- */
  function renderHome() {
    const totalLessons = flat.length;
    const cards = data
      .map(
        (mod) => `
        <div class="card" data-goto="${mod.lessons[0].id}">
          <div class="card-icon">${iconFor(mod.id)}</div>
          <h3>${mod.title}</h3>
          <p>${mod.lessons.length} دروس${mod.badge ? " · " + mod.badge : ""}</p>
        </div>`
      )
      .join("");

    els.content.innerHTML = `
      <section class="hero">
        <h1>أكاديمية الشبكات — شرح CCNA و Network+</h1>
        <p>مرجع عربي شامل ومبسّط يغطّي أهم مواضيع شهادتي <strong>CCNA (200-301)</strong> و <strong>CompTIA Network+</strong>: من أساسيات الشبكات والـ OSI، مرورًا بالعنونة والتبديل والتوجيه، وصولًا للأمان والأتمتة واستكشاف الأخطاء.</p>
        <div class="stat-row">
          <div class="stat"><b>${data.length}</b><span>محاور رئيسية</span></div>
          <div class="stat"><b>${totalLessons}</b><span>درسًا</span></div>
          <div class="stat"><b>2</b><span>شهادتان مغطّاتان</span></div>
        </div>
      </section>
      <h2 style="margin-top:8px">ابدأ من هنا — اختر محورًا</h2>
      <div class="cards">${cards}</div>
    `;

    els.content.querySelectorAll("[data-goto]").forEach((c) => {
      c.addEventListener("click", () => {
        location.hash = "#/" + c.getAttribute("data-goto");
      });
    });
    setActive(null);
    window.scrollTo(0, 0);
  }

  function iconFor(id) {
    const map = {
      intro: "🚀", models: "📚", addressing: "🔢", switching: "🔀",
      routing: "🧭", services: "⚙️", security: "🛡️", wireless: "📶",
      operations: "🤖",
    };
    return map[id] || "📄";
  }

  /* ---------- عرض درس ---------- */
  function renderLesson(id) {
    const idx = flat.findIndex((l) => l.id === id);
    if (idx === -1) {
      renderHome();
      return;
    }
    const lesson = flat[idx];
    const prev = flat[idx - 1];
    const next = flat[idx + 1];

    els.content.innerHTML = `
      <article class="lesson">
        <div class="breadcrumb">${lesson.modTitle} ‹ الدرس ${idx + 1} من ${flat.length}</div>
        <h1>${lesson.title}</h1>
        ${lesson.lead ? `<p class="lead">${lesson.lead}</p>` : ""}
        ${lesson.html}
        <nav class="lesson-nav">
          ${
            prev
              ? `<a class="prev" href="#/${prev.id}"><span>السابق ›</span>${prev.title}</a>`
              : `<a class="prev disabled" href="#"><span>السابق ›</span>—</a>`
          }
          ${
            next
              ? `<a class="next" href="#/${next.id}"><span>‹ التالي</span>${next.title}</a>`
              : `<a class="next disabled" href="#"><span>‹ التالي</span>—</a>`
          }
        </nav>
      </article>
    `;
    setActive(id);
    window.scrollTo(0, 0);
  }

  /* ---------- تمييز العنصر النشط في القائمة ---------- */
  function setActive(id) {
    els.nav.querySelectorAll("[data-lesson]").forEach((a) => {
      const on = a.getAttribute("data-lesson") === id;
      a.classList.toggle("active", on);
      if (on) {
        const grp = a.closest(".nav-group");
        if (grp) grp.classList.remove("collapsed");
      }
    });
  }

  /* ---------- التوجيه عبر الـ hash ---------- */
  function router() {
    const hash = location.hash.replace(/^#\/?/, "");
    if (!hash) renderHome();
    else renderLesson(hash);
  }

  /* ---------- البحث ---------- */
  function stripTags(html) {
    const tmp = document.createElement("div");
    tmp.innerHTML = html;
    return (tmp.textContent || "").replace(/\s+/g, " ");
  }

  const searchIndex = flat.map((l) => ({
    id: l.id,
    title: l.title,
    cat: l.modTitle,
    text: (l.title + " " + (l.lead || "") + " " + stripTags(l.html)).toLowerCase(),
  }));

  function runSearch(q) {
    q = q.trim().toLowerCase();
    if (!q) {
      els.searchResults.hidden = true;
      return;
    }
    const terms = q.split(/\s+/);
    const matches = searchIndex
      .map((item) => {
        let score = 0;
        terms.forEach((t) => {
          if (item.title.toLowerCase().includes(t)) score += 5;
          if (item.text.includes(t)) score += 1;
        });
        return { item, score };
      })
      .filter((m) => m.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);

    if (matches.length === 0) {
      els.searchResults.innerHTML = `<li class="sr-empty">لا توجد نتائج لـ «${q}»</li>`;
    } else {
      els.searchResults.innerHTML = matches
        .map(
          (m) =>
            `<li><button data-go="${m.item.id}">${m.item.title}<br><span class="sr-cat">${m.item.cat}</span></button></li>`
        )
        .join("");
      els.searchResults.querySelectorAll("[data-go]").forEach((b) => {
        b.addEventListener("click", () => {
          location.hash = "#/" + b.getAttribute("data-go");
          els.searchInput.value = "";
          els.searchResults.hidden = true;
        });
      });
    }
    els.searchResults.hidden = false;
  }

  /* ---------- الوضع الليلي ---------- */
  function initTheme() {
    const saved = localStorage.getItem("net-theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (prefersDark ? "dark" : "light");
    applyTheme(theme);
  }
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    els.themeToggle.textContent = theme === "dark" ? "☀️" : "🌙";
    localStorage.setItem("net-theme", theme);
  }

  /* ---------- القائمة الجانبية للجوال ---------- */
  function openSidebar() {
    els.sidebar.classList.add("open");
    els.overlay.classList.add("show");
  }
  function closeSidebar() {
    els.sidebar.classList.remove("open");
    els.overlay.classList.remove("show");
  }

  /* ---------- ربط الأحداث ---------- */
  function bindEvents() {
    window.addEventListener("hashchange", router);
    els.themeToggle.addEventListener("click", () => {
      const cur = document.documentElement.getAttribute("data-theme");
      applyTheme(cur === "dark" ? "light" : "dark");
    });
    els.menuToggle.addEventListener("click", openSidebar);
    els.overlay.addEventListener("click", closeSidebar);

    let t;
    els.searchInput.addEventListener("input", (e) => {
      clearTimeout(t);
      const v = e.target.value;
      t = setTimeout(() => runSearch(v), 120);
    });
    document.addEventListener("click", (e) => {
      if (!e.target.closest(".search-wrap")) els.searchResults.hidden = true;
    });

    window.addEventListener("scroll", () => {
      els.toTop.hidden = window.scrollY < 400;
    });
    els.toTop.addEventListener("click", () =>
      window.scrollTo({ top: 0, behavior: "smooth" })
    );
  }

  /* ---------- التشغيل ---------- */
  initTheme();
  buildNav();
  bindEvents();
  router();
})();
