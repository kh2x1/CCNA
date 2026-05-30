/* ==========================================================================
   i18n.js — Bilingual (Arabic / English) interface strings + helpers
   Lesson/quiz content carries its own {en, ar} fields; this file holds the
   chrome (navigation, buttons, labels). Switch with i18n.setLang('ar'|'en').
   ========================================================================== */
(function () {
  const STR = {
    // ----- generic / nav -----
    'app.name': { en: 'NetSchool', ar: 'نت سكول' },
    'app.tagline': { en: 'Master CCNA & Network+', ar: 'أتقن CCNA و Network+' },
    'nav.home': { en: 'Home', ar: 'الرئيسية' },
    'nav.ccna': { en: 'CCNA', ar: 'CCNA' },
    'nav.netplus': { en: 'Network+', ar: 'Network+' },
    'nav.tools': { en: 'Tools', ar: 'الأدوات' },
    'nav.labs': { en: 'Labs', ar: 'المختبرات' },
    'nav.resources': { en: 'Resources', ar: 'المصادر' },
    'nav.progress': { en: 'Progress', ar: 'تقدّمي' },
    'nav.cheatsheets': { en: 'Cheatsheets', ar: 'مرجع سريع' },
    'nav.ports': { en: 'Ports & Protocols', ar: 'المنافذ والبروتوكولات' },
    'nav.commands': { en: 'Cisco Commands', ar: 'أوامر سيسكو' },
    'nav.interview': { en: 'Interview Q&A', ar: 'أسئلة المقابلات' },
    'nav.osi': { en: 'OSI Interactive', ar: 'نموذج OSI التفاعلي' },
    'nav.subnet': { en: 'Subnet Calculator', ar: 'حاسبة الشبكات الفرعية' },
    'nav.topologies': { en: 'Topologies', ar: 'هياكل الشبكات' },
    'nav.quiz': { en: 'Quiz Center', ar: 'مركز الاختبارات' },
    'nav.certificate': { en: 'Certificate', ar: 'الشهادة' },

    // ----- buttons -----
    'btn.start': { en: 'Start Learning', ar: 'ابدأ التعلّم' },
    'btn.continue': { en: 'Continue', ar: 'متابعة' },
    'btn.explore': { en: 'Explore Tools', ar: 'استكشف الأدوات' },
    'btn.next': { en: 'Next', ar: 'التالي' },
    'btn.prev': { en: 'Previous', ar: 'السابق' },
    'btn.check': { en: 'Check Answer', ar: 'تحقّق من الإجابة' },
    'btn.retry': { en: 'Retry', ar: 'إعادة' },
    'btn.markDone': { en: 'Mark as Complete', ar: 'وضع علامة مكتمل' },
    'btn.completed': { en: 'Completed', ar: 'مكتمل' },
    'btn.save': { en: 'Save', ar: 'حفظ' },
    'btn.print': { en: 'Print / PDF', ar: 'طباعة / PDF' },
    'btn.copy': { en: 'Copy', ar: 'نسخ' },
    'btn.copied': { en: 'Copied!', ar: 'تم النسخ!' },
    'btn.flip': { en: 'Flip', ar: 'اقلب' },
    'btn.calculate': { en: 'Calculate', ar: 'احسب' },
    'btn.viewAll': { en: 'View all', ar: 'عرض الكل' },
    'btn.reset': { en: 'Reset', ar: 'إعادة ضبط' },
    'btn.favorite': { en: 'Favorite', ar: 'مفضّلة' },
    'btn.note': { en: 'Notes', ar: 'ملاحظات' },
    'btn.startQuiz': { en: 'Start Quiz', ar: 'ابدأ الاختبار' },

    // ----- home -----
    'home.hero.title1': { en: 'Become a', ar: 'كن' },
    'home.hero.grad': { en: 'Network Engineer', ar: 'مهندس شبكات' },
    'home.hero.title2': { en: 'the modern way', ar: 'بالطريقة الحديثة' },
    'home.hero.lead': {
      en: 'A complete, interactive platform covering the full CCNA and CompTIA Network+ syllabi — with real lessons, labs, quizzes, flashcards and pro tools. 100% free, works offline.',
      ar: 'منصة تفاعلية متكاملة تغطي منهجَي CCNA و CompTIA Network+ بالكامل — دروس حقيقية ومختبرات واختبارات وبطاقات تعليمية وأدوات احترافية. مجانية بالكامل وتعمل بدون إنترنت.'
    },
    'home.badge.free': { en: '100% Free', ar: 'مجاني 100%' },
    'home.badge.offline': { en: 'Works Offline', ar: 'يعمل دون اتصال' },
    'home.badge.bilingual': { en: 'AR / EN', ar: 'عربي / إنجليزي' },
    'home.paths.eyebrow': { en: 'Learning Paths', ar: 'مسارات التعلّم' },
    'home.paths.title': { en: 'Choose your track', ar: 'اختر مسارك' },
    'home.paths.lead': { en: 'Structured, module-based curricula built for absolute beginners through to certification.', ar: 'مناهج منظّمة قائمة على الوحدات مصممة من المبتدئ تمامًا حتى الحصول على الشهادة.' },
    'home.stats.title': { en: 'Everything you need to pass', ar: 'كل ما تحتاجه للنجاح' },
    'home.features.eyebrow': { en: 'Platform Features', ar: 'مميزات المنصة' },
    'home.features.title': { en: 'Built like a real learning platform', ar: 'مبنية كمنصة تعليمية حقيقية' },
    'home.cta.title': { en: 'Ready to start your networking journey?', ar: 'جاهز لبدء رحلتك في الشبكات؟' },
    'home.cta.lead': { en: 'No sign-up. No cost. Your progress is saved on this device.', ar: 'بدون تسجيل. بدون تكلفة. يُحفظ تقدّمك على هذا الجهاز.' },
    'home.whatis.title': { en: 'What is computer networking?', ar: 'ما هي شبكات الحاسوب؟' },
    'home.whatis.body': {
      en: 'A computer network is a set of devices connected together to share data and resources. From the Wi-Fi in your home to the global Internet, networks rely on the same core ideas: addressing, routing, switching, and protocols. This platform teaches those ideas from the ground up and prepares you for the two most valuable entry-level certifications in IT.',
      ar: 'شبكة الحاسوب هي مجموعة من الأجهزة المتصلة معًا لمشاركة البيانات والموارد. من شبكة الواي فاي في منزلك إلى الإنترنت العالمي، تعتمد الشبكات على نفس المفاهيم الأساسية: العنونة والتوجيه والتبديل والبروتوكولات. تعلّمك هذه المنصة تلك المفاهيم من الصفر وتجهّزك لأهم شهادتين للمبتدئين في مجال تقنية المعلومات.'
    },

    // ----- stats labels -----
    'stat.lessons': { en: 'Lessons', ar: 'درس' },
    'stat.quizzes': { en: 'Quiz Questions', ar: 'سؤال اختبار' },
    'stat.labs': { en: 'Hands-on Labs', ar: 'مختبر عملي' },
    'stat.tools': { en: 'Interactive Tools', ar: 'أداة تفاعلية' },
    'stat.modules': { en: 'Modules', ar: 'وحدة' },
    'stat.flashcards': { en: 'Flashcards', ar: 'بطاقة' },

    // ----- lesson -----
    'lesson.overview': { en: 'Overview', ar: 'نظرة عامة' },
    'lesson.examples': { en: 'Examples', ar: 'أمثلة' },
    'lesson.commands': { en: 'CLI Commands', ar: 'أوامر CLI' },
    'lesson.lab': { en: 'Lab', ar: 'مختبر' },
    'lesson.quiz': { en: 'Quiz', ar: 'اختبار' },
    'lesson.flashcards': { en: 'Flashcards', ar: 'بطاقات' },
    'lesson.summary': { en: 'Quick Summary', ar: 'ملخص سريع' },
    'lesson.keypoints': { en: 'Key Takeaways', ar: 'النقاط الأساسية' },
    'lesson.minutes': { en: 'min read', ar: 'دقيقة قراءة' },
    'lesson.notFound': { en: 'Lesson not found', ar: 'الدرس غير موجود' },
    'lesson.notesPlaceholder': { en: 'Write your personal notes here… (saved automatically)', ar: 'اكتب ملاحظاتك الشخصية هنا… (تُحفظ تلقائيًا)' },

    // ----- quiz -----
    'quiz.question': { en: 'Question', ar: 'سؤال' },
    'quiz.of': { en: 'of', ar: 'من' },
    'quiz.correct': { en: 'Correct!', ar: 'صحيح!' },
    'quiz.wrong': { en: 'Not quite', ar: 'ليست صحيحة' },
    'quiz.yourScore': { en: 'Your Score', ar: 'نتيجتك' },
    'quiz.passed': { en: 'Great job! You passed.', ar: 'عمل رائع! لقد نجحت.' },
    'quiz.failed': { en: 'Keep practicing — review and try again.', ar: 'واصل التدرّب — راجع وحاول مرة أخرى.' },
    'quiz.explanation': { en: 'Explanation', ar: 'الشرح' },
    'quiz.allTopics': { en: 'All Topics', ar: 'كل المواضيع' },

    // ----- progress -----
    'progress.title': { en: 'Your Progress', ar: 'تقدّمك' },
    'progress.lead': { en: 'Saved locally on this device.', ar: 'محفوظ محليًا على هذا الجهاز.' },
    'progress.overall': { en: 'Overall Completion', ar: 'الإنجاز الكلي' },
    'progress.lessonsDone': { en: 'Lessons completed', ar: 'دروس مكتملة' },
    'progress.quizAvg': { en: 'Average quiz score', ar: 'متوسط نتائج الاختبارات' },
    'progress.favorites': { en: 'Favorites', ar: 'المفضّلة' },
    'progress.streak': { en: 'Best quiz', ar: 'أفضل اختبار' },
    'progress.reset': { en: 'Reset all progress', ar: 'إعادة ضبط كل التقدّم' },
    'progress.resetConfirm': { en: 'Erase all saved progress, notes and favorites?', ar: 'هل تريد مسح كل التقدّم والملاحظات والمفضّلات المحفوظة؟' },
    'progress.empty': { en: 'No progress yet. Start a lesson!', ar: 'لا يوجد تقدّم بعد. ابدأ درسًا!' },

    // ----- certificate -----
    'cert.title': { en: 'Certificate of Completion', ar: 'شهادة إتمام' },
    'cert.intro': { en: 'Earn a printable certificate by completing a track.', ar: 'احصل على شهادة قابلة للطباعة بإكمال أحد المسارات.' },
    'cert.namePlaceholder': { en: 'Enter your full name', ar: 'أدخل اسمك الكامل' },
    'cert.presented': { en: 'This certificate is proudly presented to', ar: 'تُمنح هذه الشهادة بكل فخر إلى' },
    'cert.forCompleting': { en: 'for successfully completing the', ar: 'لإتمامه بنجاح مسار' },
    'cert.track': { en: 'track on NetSchool', ar: 'على منصة نت سكول' },
    'cert.locked': { en: 'Complete the track to unlock', ar: 'أكمل المسار لفتح الشهادة' },
    'cert.date': { en: 'Date', ar: 'التاريخ' },
    'cert.id': { en: 'Certificate ID', ar: 'رقم الشهادة' },
    'cert.generate': { en: 'Generate Certificate', ar: 'إنشاء الشهادة' },
    'cert.disclaimer': { en: 'Note: This is a personal learning certificate, not an official Cisco or CompTIA credential.', ar: 'ملاحظة: هذه شهادة تعلّم شخصية وليست اعتمادًا رسميًا من Cisco أو CompTIA.' },

    // ----- search -----
    'search.placeholder': { en: 'Search lessons, commands, ports…', ar: 'ابحث في الدروس والأوامر والمنافذ…' },
    'search.hint': { en: 'Type to search · Esc to close', ar: 'اكتب للبحث · Esc للإغلاق' },
    'search.empty': { en: 'No results found', ar: 'لا توجد نتائج' },
    'search.open': { en: 'Search', ar: 'بحث' },

    // ----- misc -----
    'common.beginner': { en: 'Beginner', ar: 'مبتدئ' },
    'common.intermediate': { en: 'Intermediate', ar: 'متوسط' },
    'common.advanced': { en: 'Advanced', ar: 'متقدم' },
    'common.lessons': { en: 'lessons', ar: 'دروس' },
    'common.loading': { en: 'Loading…', ar: 'جارٍ التحميل…' },
    'common.theme': { en: 'Toggle theme', ar: 'تبديل المظهر' },
    'common.menu': { en: 'Menu', ar: 'القائمة' },
    'footer.tagline': { en: 'The free, open networking academy. Built with ❤ for learners.', ar: 'أكاديمية الشبكات المجانية المفتوحة. صُنعت بحب للمتعلّمين.' },
    'footer.learn': { en: 'Learn', ar: 'تعلّم' },
    'footer.tools': { en: 'Tools', ar: 'أدوات' },
    'footer.resources': { en: 'Resources', ar: 'مصادر' },
    'footer.rights': { en: 'Educational project. Not affiliated with Cisco or CompTIA.', ar: 'مشروع تعليمي. غير تابع لشركة Cisco أو CompTIA.' }
  };

  const LANG_KEY = 'ns_lang';
  let lang = localStorage.getItem(LANG_KEY) || (navigator.language || 'en').startsWith('ar') ? 'ar' : 'en';
  // normalize
  lang = (localStorage.getItem(LANG_KEY)) || ((navigator.language || 'en').startsWith('ar') ? 'ar' : 'en');

  const listeners = [];

  const i18n = {
    get lang() { return lang; },
    t(key) { const e = STR[key]; return e ? (e[lang] || e.en) : key; },
    // pick localized value from a {en, ar} object (used for content data)
    pick(obj) {
      if (obj == null) return '';
      if (typeof obj === 'string') return obj;
      return obj[lang] || obj.en || obj.ar || '';
    },
    setLang(l) {
      lang = l; localStorage.setItem(LANG_KEY, l);
      this.apply();
      listeners.forEach(fn => fn(l));
    },
    toggle() { this.setLang(lang === 'ar' ? 'en' : 'ar'); },
    onChange(fn) { listeners.push(fn); },
    // apply <html> attributes + translate any [data-i18n] elements
    apply() {
      const html = document.documentElement;
      html.lang = lang;
      html.dir = lang === 'ar' ? 'rtl' : 'ltr';
      document.querySelectorAll('[data-i18n]').forEach(el => {
        el.textContent = this.t(el.getAttribute('data-i18n'));
      });
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        el.innerHTML = this.t(el.getAttribute('data-i18n-html'));
      });
      document.querySelectorAll('[data-i18n-attr]').forEach(el => {
        const [attr, key] = el.getAttribute('data-i18n-attr').split(':');
        el.setAttribute(attr, this.t(key));
      });
    }
  };

  window.i18n = i18n;
  window.t = (k) => i18n.t(k);
})();
