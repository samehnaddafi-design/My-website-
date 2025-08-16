// Simple JS: mobile menu, year, and bilingual content swap (EN/FA)
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();

// Mobile nav
const menu = document.getElementById('menu');
const nav = document.getElementById('nav');
if (menu && nav) {
  menu.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menu.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
}

// Translations
const t = {
  en: {
    brand: "Your Name",
    nav_about: "About",
    nav_work: "Work",
    nav_services: "Services",
    nav_contact: "Contact",
    hero_title: "I make clean, modern websites & designs.",
    hero_sub: "Simple, fast, mobile-friendly. Scroll to see my work or contact me below.",
    btn_view_work: "View Work",
    btn_contact: "Contact",
    about_title: "About Me",
    about_p1: "Write a short bio here. Who you are, what you do, and the value you bring. Keep it to 2–3 sentences.",
    about_p2: "Tip: replace images in /assets/images/ and update text in this file. Everything is 100% static & free.",
    fact_location_label: "Location:",
    fact_location_val: "Your City, Country",
    fact_email_label: "Email:",
    fact_social_label: "Instagram:",
    work_title: "Recent Work",
    work_item_desc: "Short one-line description of the project.",
    services_title: "Services",
    svc_1_title: "Web Design",
    svc_1_desc: "Landing pages, portfolios, and simple business sites.",
    svc_2_title: "Branding",
    svc_2_desc: "Logos, color systems, and social media assets.",
    svc_3_title: "Consulting",
    svc_3_desc: "Advice on tools, hosting, and growth strategy.",
    contact_title: "Contact",
    contact_p1: "The fastest way is email. Click the button and tell me what you need.",
    btn_email_me: "Email me",
    contact_hint: "Prefer a form? You can add a free Formspree or Netlify form later.",
    contact_card_title: "Quick Details",
    contact_avail_label: "Availability:",
    contact_avail_val: "Taking new projects",
    contact_rate_label: "Rate:",
    contact_rate_val: "Ask for a quote",
    footer_rights: "All rights reserved."
  },
  fa: {
    brand: "نام شما",
    nav_about: "درباره من",
    nav_work: "نمونه‌کار",
    nav_services: "خدمات",
    nav_contact: "تماس",
    hero_title: "وب‌سایت‌های تمیز و مدرن می‌سازم.",
    hero_sub: "ساده، سریع و مناسب موبایل. پایین اسکرول کنید یا با من تماس بگیرید.",
    btn_view_work: "مشاهده کارها",
    btn_contact: "تماس",
    about_title: "درباره من",
    about_p1: "اینجا یک بیوی کوتاه بنویسید؛ کی هستید، چه می‌کنید و چه ارزشی اضافه می‌کنید.",
    about_p2: "نکته: عکس‌ها را در مسیر /assets/images/ جایگزین کنید و این متن‌ها را ویرایش کنید.",
    fact_location_label: "موقعیت:",
    fact_location_val: "شهر شما، کشور",
    fact_email_label: "ایمیل:",
    fact_social_label: "اینستاگرام:",
    work_title: "نمونه‌کارهای اخیر",
    work_item_desc: "توضیح یک‌خطی کوتاه درباره پروژه.",
    services_title: "خدمات",
    svc_1_title: "طراحی وب",
    svc_1_desc: "لندینگ‌پیج، پورتفولیو و وب‌سایت‌های ساده تجاری.",
    svc_2_title: "برندسازی",
    svc_2_desc: "لوگو، سیستم رنگ و محتوای شبکه‌های اجتماعی.",
    svc_3_title: "مشاوره",
    svc_3_desc: "راهنمای ابزارها، هاستینگ و استراتژی رشد.",
    contact_title: "ارتباط",
    contact_p1: "سریع‌ترین راه ایمیل است. روی دکمه بزنید و نیازتان را بگویید.",
    btn_email_me: "ایمیل بزنید",
    contact_hint: "فرم می‌خواهید؟ بعداً فرم رایگان Formspree یا Netlify اضافه کنید.",
    contact_card_title: "جزئیات سریع",
    contact_avail_label: "دسترسی:",
    contact_avail_val: "پروژه جدید می‌پذیرم",
    contact_rate_label: "هزینه:",
    contact_rate_val: "برای برآورد پیام دهید",
    footer_rights: "تمام حقوق محفوظ است."
  }
};

const langBtns = document.querySelectorAll('.lang-btn');
function setLang(l){
  const dict = t[l] || t.en;
  document.documentElement.dir = (l === 'fa') ? 'rtl' : 'ltr';
  langBtns.forEach(b => b.setAttribute('aria-pressed', b.dataset.lang === l ? 'true' : 'false'));
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) el.textContent = dict[key];
  });
}
langBtns.forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
setLang('en');
