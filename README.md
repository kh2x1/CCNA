# NetSchool — Learn CCNA & CompTIA Network+

> A complete, interactive, **bilingual (Arabic / English)** web platform for mastering the full **Cisco CCNA 200-301** and **CompTIA Network+ (N10-009)** syllabi — real lessons, hands-on labs, quizzes, flashcards, and professional networking tools. **100% frontend, no backend, works offline (PWA).**

منصة تعليمية تفاعلية متكاملة وثنائية اللغة (عربي/إنجليزي) لإتقان منهجَي **CCNA** و **CompTIA Network+** — دروس حقيقية، مختبرات عملية، اختبارات، بطاقات تعليمية، وأدوات شبكات احترافية. **تعمل بالكامل في المتصفح وبدون إنترنت.**

---

## ✨ Features

| | Feature | Description |
|---|---|---|
| 🌓 | **Dark / Light mode** | Auto-detects OS preference, remembers your choice. |
| 🌐 | **Arabic & English** | Full bilingual UI with proper **RTL** support — switch any time. |
| 📚 | **Full CCNA + Network+** | 80+ structured lessons across modules, beginner → advanced. |
| 🧪 | **Hands-on labs** | Packet-Tracer-style guided labs with topology, steps & verification. |
| ❓ | **Quiz engine** | 350+ exam-style questions, per-lesson quizzes & full mock exams. |
| 🃏 | **Flashcards** | Flip-card decks for active recall on every lesson. |
| 🧮 | **Pro tools** | Subnet calculator, IP/binary/CIDR converters, ping, packet-flow & OSI simulators. |
| 📈 | **Progress tracking** | Completed lessons, quiz scores, favorites — saved in `localStorage`. |
| 📝 | **Personal notes** | Per-lesson notes, auto-saved locally. |
| 🏅 | **Printable certificate** | Generate a personalized completion certificate (PDF via print). |
| 🔎 | **Instant search** | `Ctrl/⌘ + K` to search lessons, commands & ports. |
| 📱 | **PWA / Offline** | Installable; a service worker caches everything for offline study. |
| ♿ | **Accessible & SEO-ready** | Semantic HTML, ARIA, keyboard nav, skip links, structured data. |

---

## 🚀 Getting Started

The project is **pure HTML/CSS/JavaScript** — no build step, no dependencies, no backend.

### Option 1 — Run a local server (recommended)

A local server enables the service worker (offline/PWA) and avoids any browser file restrictions.

```bash
# Python 3
python3 -m http.server 8080

# or Node.js
npx serve .
```

Then open <http://localhost:8080>.

### Option 2 — Open directly

Because all lesson data is loaded as JavaScript (not `fetch`-ed JSON), you can also just **open `index.html`** in any modern browser. (The service worker only activates over `http(s)`.)

### Deploy

Drop the folder onto any static host — **GitHub Pages, Netlify, Vercel, Cloudflare Pages** — it just works.

---

## ⌨️ Keyboard Shortcuts

| Shortcut | Action |
|---|---|
| `Ctrl/⌘ + K` or `/` | Open search |
| `Esc` | Close search / dialogs |
| `Alt + T` | Toggle dark/light theme |
| `Alt + L` | Toggle Arabic/English |
| `↑ / ↓` + `Enter` | Navigate search results |
| `Space / Enter` | Flip a flashcard |

---

## 🗂️ Project Structure

```
CCNA/
├── index.html                 # App shell (loads everything)
├── manifest.webmanifest       # PWA manifest
├── sw.js                      # Service worker (offline cache)
├── robots.txt · sitemap.xml   # SEO
├── README.md
└── assets/
    ├── css/
    │   ├── themes.css         # Design tokens (dark/light variables)
    │   ├── main.css           # Layout, header, sidebar, footer, responsive
    │   └── components.css     # Cards, hero, lessons, quiz, tools, certificate
    ├── icons/                 # SVG favicon / PWA / OG images
    └── js/
        ├── icons.js           # Inline SVG icon set (offline-friendly)
        ├── i18n.js            # Bilingual UI strings + RTL switching
        ├── store.js           # localStorage: progress, scores, notes, favorites
        ├── netcalc.js         # Pure IPv4 math (subnetting, conversions)
        ├── ui.js              # Toast, clipboard, reveal animations, helpers
        ├── data.js            # Content registry + search index + queries
        ├── router.js          # Hash-based SPA router
        ├── app.js             # Theme, header/footer, search, shortcuts, PWA
        ├── pages.home.js      # Landing page
        ├── pages.learn.js     # Track overview, lesson viewer, quiz & flashcard engines
        ├── pages.tools.js     # 7 interactive tools
        ├── pages.resources.js # Cheatsheets, ports, commands, interview, topologies
        ├── pages.quiz.js      # Quiz Center & mock exams
        ├── pages.progress.js  # Progress dashboard, certificate, labs
        └── ../data/           # ── Lesson & reference content (JSON-shaped JS) ──
            ├── ccna.fundamentals.js        # ← schema reference (documented)
            ├── ccna.network-access.js
            ├── ccna.ip-connectivity.js
            ├── ccna.services-security.js
            ├── ccna.automation.js
            ├── networkplus.js
            ├── quizbank.js
            ├── labs.js
            ├── cheatsheets.js
            ├── ports.js
            ├── commands.js
            └── interview.js
```

---

## 🏗️ Architecture

- **Single-Page App** driven by a tiny **hash router** (`router.js`). Each route maps to a renderer registered on `window.Pages`.
- **Content as data.** Lessons, quizzes, labs, ports and commands live in `assets/data/*.js` as plain **JSON-shaped objects** that register onto `window.NS_DATA`. They're delivered as `.js` (not fetched `.json`) so the app runs from the file system with zero build and full offline support. The schema is documented at the top of `ccna.fundamentals.js`.
- **Reusable components.** Render helpers (cards, quiz engine, flashcard deck, toasts, badges) are shared across pages.
- **State** is persisted in `localStorage` via a single `Store` module (progress, quiz scores, notes, favorites, theme, name).
- **No tracking, no accounts, no network calls** beyond optional web fonts.

### Adding a lesson

1. Open the relevant module file in `assets/data/` (or create a new one and add a `<script>` tag in `index.html` + `sw.js`).
2. Push a lesson object following the schema in `ccna.fundamentals.js` (`title`, `content`, `quiz`, `flashcards`, … — all bilingual `{en, ar}`).
3. Reload. The sidebar, search index, progress and quizzes pick it up automatically.

---

## 🧮 Interactive Tools

| Tool | What it does |
|---|---|
| **Subnet Calculator** | Network, broadcast, host range, mask, wildcard, class & type from any IP/CIDR. |
| **IP Converter** | IPv4 ⇄ decimal, binary, hex, integer, class & scope. |
| **Binary Converter** | Click bits on/off and watch the decimal/hex update live. |
| **CIDR / VLSM Planner** | Smallest prefix for N hosts, or N subnets from a base prefix. |
| **Ping Simulator** | Realistic ICMP echo output with latency, TTL and packet loss. |
| **Packet Flow** | Animated encapsulation across host → switch → router → server. |
| **OSI Simulator** | Click each of the 7 layers to explore its role, PDU and protocols. |

All math lives in `netcalc.js` (pure, DOM-free, easy to test).

---

## 🔒 Performance & Security Best Practices

- **Performance**: no framework runtime, inline SVG icons (no icon-font request), CSS custom properties for instant theming, `IntersectionObserver` reveal animations, content rendered on demand per route, and a cache-first service worker.
- **Security**: all user-supplied text (notes, names, search) is HTML-escaped before rendering (`UI.esc`). No `eval`, no remote code execution, no cookies, no third-party trackers. Data never leaves the device.
- **Privacy**: progress is yours alone — stored only in your browser's `localStorage`.

---

## ♿ Accessibility

- Semantic landmarks, skip-to-content link, focus-visible outlines.
- ARIA labels on icon buttons, dialogs and live regions (toasts).
- Full keyboard navigation; respects `prefers-reduced-motion` and `prefers-color-scheme`.
- Sufficient color contrast in both themes; RTL mirrored layout for Arabic.

---

## 🗺️ Roadmap

- [ ] Spaced-repetition (SRS) scheduling for flashcards.
- [ ] Export/import progress as a JSON file (sync between devices).
- [ ] More labs with an in-browser CLI emulator.
- [ ] IPv6 subnetting calculator + advanced VLSM designer.
- [ ] Community-contributed question packs.
- [ ] Audio narration for lessons.
- [ ] Optional account sync (opt-in, privacy-preserving).

---

## ⚠️ Disclaimer

NetSchool is an **independent educational project**. It is **not affiliated with, endorsed by, or sponsored by Cisco Systems or CompTIA**. "CCNA" and "Network+" are trademarks of their respective owners. The completion certificate is a personal study artifact and **not** an official credential.

## 📄 License

Released under the **MIT License** — free to use, study, modify and share.

---

<p align="center">Built with ❤ for networking learners everywhere · صُنع بحب لمتعلّمي الشبكات</p>
