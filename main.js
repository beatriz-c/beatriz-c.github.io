/* ==========================================================
   Single-source config (edit here)
   ========================================================== */

const CONFIG = {
  coupleNames: "Beatriz & David",
  weddingDateText: "26 de Junho de 2027",
  venueName: "Quinta do Páteo",
  venueAddress: "Quinta do Pateo, 2565-000 Dois Portos, Portugal",

  // Calendar event (easy to edit)
  calendar: {
    title: "Casamento da Beatriz & David",
    start: "2027-06-26T16:00:00",
    end:   "2027-06-26T23:00:00",
    timeZone: "Europe/Lisbon",
    location: "Quinta do Páteo — Quinta do Pateo, 2565-000 Dois Portos, Portugal",
    description: [
      "Dress code: Elegant attire.",
      "Children are welcome.",
      "RSVP on the website.",
      "Website: https://example.com"
    ].join("\\n"),
    google: {
      // details/location override (optional)
    }
  },

  dressCode: "Elegant attire. Think modern formal with soft tones and subtle metallic accents.",
  menuText: "Seasonal dinner with vegetarian options. Please share allergies in your RSVP.",
  maps: {
    embedUrl: "https://www.google.com/maps?q=Quinta+do+P%C3%A1teo&output=embed",
    linkUrl: "https://www.google.com/maps/place/Quinta+do+P%C3%A1teo/@39.0533596,-9.1708356,17z/data=!3m1!4b1!4m6!3m5!1s0xd18d342a9c48deb:0x6ff73e946720deee!8m2!3d39.0533555!4d-9.1682607!16s%2Fg%2F11c3l9tcjd?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D"
  },
  howToGetThere: [
    "Parque de estacionamento disponível (Limitado ao número de vagas).",
  ],

  schedule: [
    { time: "15:30", title: "Guests arrive", note: "Welcome drink in the lounge" },
    { time: "16:00", title: "Ceremony", note: "Please be seated 10 minutes early" },
    { time: "17:00", title: "Cocktail hour", note: "Short walk to the garden" },
    { time: "19:00", title: "Dinner", note: "Toasts and speeches" },
    { time: "21:00", title: "Party", note: "Dancing, dessert, and late-night bites" }
  ],

  about: {
    lede:
      "We met the way the best stories begin—unexpectedly, and with the feeling that something had shifted. Since then, the ordinary has looked a little more cinematic.",
    body:
      "From first coffee to late-night walks, we discovered a shared love of calm mornings, good music, and making simple moments feel special. The proposal was intimate, deliberate, and perfectly us—equal parts elegance and laughter.",
    mini: [
      "A warm espresso, a long conversation, and no desire to leave.",
      "Quiet, intentional, and beautifully unforgettable.",
      "We both believe candles instantly improve any evening.",
      "Calm • Curious • Devoted"
    ],
    chapters: [
      "A chance introduction that felt anything but random.",
      "A simple question, a sure answer.",
      "A celebration with the people we love most."
    ]
  },

  rsvp: {
    method: "mailto", // "mailto" | "formProvider"
    mailtoTo: "yourname@example.com",
    mailtoSubject: "Wedding RSVP",
    formActionUrl: ""
  },

  gifts: {
    registryLink: "https://example.com/registry",
    registryText: "A small list of favorites and future-home essentials.",
    iban: "PT00 0000 0000 0000 0000 0000 0"
  },

  photos: {
    driveUploadLink: "https://example.com/drive-upload-folder",
    photographerLink: "https://example.com/photographer-gallery"
  }
};

/* ==========================================================
   Helpers
   ========================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function prefersReducedMotion() {
  return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function pad2(n){ return String(n).padStart(2, "0"); }

function toUTCCompact(dtLocal, tz) {
  try {
    const parts = new Intl.DateTimeFormat("en-US", {
      timeZone: tz,
      year: "numeric", month: "2-digit", day: "2-digit",
      hour: "2-digit", minute: "2-digit", second: "2-digit",
      hour12: false
    }).formatToParts(new Date(dtLocal));
    const map = Object.fromEntries(parts.filter(p => p.type !== "literal").map(p => [p.type, p.value]));
    const utc = new Date(Date.UTC(+map.year, +map.month - 1, +map.day, +map.hour, +map.minute, +map.second));
    return (
      utc.getUTCFullYear() +
      pad2(utc.getUTCMonth() + 1) +
      pad2(utc.getUTCDate()) +
      "T" +
      pad2(utc.getUTCHours()) +
      pad2(utc.getUTCMinutes()) +
      pad2(utc.getUTCSeconds()) +
      "Z"
    );
  } catch {
    const d = new Date(dtLocal);
    return (
      d.getFullYear() +
      pad2(d.getMonth() + 1) +
      pad2(d.getDate()) +
      "T" +
      pad2(d.getHours()) +
      pad2(d.getMinutes()) +
      pad2(d.getSeconds())
    );
  }
}

function escapeICS(text) {
  return String(text)
    .replace(/\\/g, "\\\\")
    .replace(/\n/g, "\\n")
    .replace(/,/g, "\\,")
    .replace(/;/g, "\\;");
}

function buildICS(cfg) {
  const uid = `wedding-${Date.now()}@example.com`;
  const dtstamp = new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const tz = cfg.calendar.timeZone;
  const start = cfg.calendar.start.replace(/-/g,"").replace(/:/g,"");
  const end   = cfg.calendar.end.replace(/-/g,"").replace(/:/g,"");

  const lines = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Wedding Website//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VTIMEZONE",
    `TZID:${tz}`,
    "BEGIN:DAYLIGHT",
    "TZOFFSETFROM:+0100",
    "TZOFFSETTO:+0200",
    "TZNAME:CEST",
    "DTSTART:19700329T020000",
    "RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=-1SU",
    "END:DAYLIGHT",
    "BEGIN:STANDARD",
    "TZOFFSETFROM:+0200",
    "TZOFFSETTO:+0100",
    "TZNAME:CET",
    "DTSTART:19701025T030000",
    "RRULE:FREQ=YEARLY;BYMONTH=10;BYDAY=-1SU",
    "END:STANDARD",
    "END:VTIMEZONE",
    "BEGIN:VEVENT",
    `UID:${uid}`,
    `DTSTAMP:${dtstamp}`,
    `SUMMARY:${escapeICS(cfg.calendar.title)}`,
    `DTSTART;TZID=${tz}:${start}`,
    `DTEND;TZID=${tz}:${end}`,
    `LOCATION:${escapeICS(cfg.calendar.location)}`,
    `DESCRIPTION:${escapeICS(cfg.calendar.description)}`,
    "STATUS:CONFIRMED",
    "TRANSP:OPAQUE",
    "END:VEVENT",
    "END:VCALENDAR"
  ];
  return lines.join("\r\n");
}

function buildGoogleCalendarUrl(cfg) {
  const title = encodeURIComponent(cfg.calendar.title);
  const details = encodeURIComponent(cfg.calendar.google.details || cfg.calendar.description);
  const location = encodeURIComponent(cfg.calendar.google.location || cfg.calendar.location);
  const start = toUTCCompact(cfg.calendar.start, cfg.calendar.timeZone);
  const end   = toUTCCompact(cfg.calendar.end, cfg.calendar.timeZone);
  const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
  return `${base}&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&ctz=${encodeURIComponent(cfg.calendar.timeZone)}`;
}

function showToast(title, text) {
  const toast = $("[data-toast]");
  $("[data-toast-title]").textContent = title;
  $("[data-toast-text]").textContent = text;
  toast.hidden = false;
  window.clearTimeout(showToast._t);
  showToast._t = window.setTimeout(() => { toast.hidden = true; }, 4200);
}

async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    const ta = document.createElement("textarea");
    ta.value = text;
    ta.style.position = "fixed";
    ta.style.left = "-9999px";
    document.body.appendChild(ta);
    ta.focus();
    ta.select();
    try { document.execCommand("copy"); return true; }
    catch { return false; }
    finally { document.body.removeChild(ta); }
  }
}

/* ==========================================================
   Bind content from CONFIG
   ========================================================== */

function bindContent() {
  document.title = `Casamento — ${CONFIG.coupleNames}`;

  $$("[data-bind]").forEach(el => {
    const key = el.getAttribute("data-bind");
    const map = {
      coupleNames: CONFIG.coupleNames,
      weddingDate: CONFIG.weddingDateText,
      venueName: CONFIG.venueName,
      venueAddress: CONFIG.venueAddress,
      dressCode: CONFIG.dressCode,
      menuText: CONFIG.menuText,
      scheduleNote: CONFIG.scheduleNote,
      registryText: CONFIG.gifts.registryText,
      iban: CONFIG.gifts.iban,
      driveUploadLink: CONFIG.photos.driveUploadLink,
      aboutLede: CONFIG.about.lede,
      aboutBody: CONFIG.about.body,
      mini1: CONFIG.about.mini[0],
      mini2: CONFIG.about.mini[1],
      mini3: CONFIG.about.mini[2],
      mini4: CONFIG.about.mini[3],
      chapter1: CONFIG.about.chapters[0],
      chapter2: CONFIG.about.chapters[1],
      chapter3: CONFIG.about.chapters[2],
    };
    if (key in map) el.textContent = map[key];
  });

  $$("[data-bind-href]").forEach(el => {
    const key = el.getAttribute("data-bind-href");
    if (key === "mapsLink") el.href = CONFIG.maps.linkUrl;
    if (key === "registryLink") el.href = CONFIG.gifts.registryLink;
    if (key === "photographerLink") el.href = CONFIG.photos.photographerLink;
    if (key === "driveUploadLink") el.href = CONFIG.photos.driveUploadLink;
  });

  $$("[data-bind-src]").forEach(el => {
    if (el.getAttribute("data-bind-src") === "mapsEmbedUrl") el.src = CONFIG.maps.embedUrl;
  });

  const list = $("[data-bind='scheduleList']");
  if (list) {
    list.innerHTML = "";
    CONFIG.schedule.forEach(item => {
      const li = document.createElement("li");
      li.className = "t-item reveal";
      li.innerHTML = `
        <div class="t-time">${item.time}</div>
        <div>
          <p class="t-title">${item.title}</p>
          ${item.note ? `<p class="t-note">${item.note}</p>` : ""}
        </div>
      `;
      list.appendChild(li);
    });
  }

  const bullets = $("[data-bind='howToGetThere']");
  if (bullets) {
    bullets.innerHTML = "";
    CONFIG.howToGetThere.forEach(b => {
      const li = document.createElement("li");
      li.textContent = b;
      bullets.appendChild(li);
    });
  }
}

/* ==========================================================
   Navigation + active indicator + mobile menu
   ========================================================== */

function setupNav() {
  const nav = $("[data-nav]");
  const toggle = $("[data-nav-toggle]");
  const links = $$(".nav-link");
  const indicator = $("[data-nav-indicator]");

  function setIndicatorTo(link) {
    if (!indicator || !link) return;
    const navRect = nav.getBoundingClientRect();
    const r = link.getBoundingClientRect();
    const x = r.left - navRect.left + (r.width * 0.1);
    const w = r.width * 0.8;
    indicator.style.setProperty("--x", `${x}px`);
    indicator.style.setProperty("--w", `${w / 20}`);
  }

  function closeMobileNav() {
    if (!nav.classList.contains("is-open")) return;
    nav.classList.remove("is-open");
    toggle.setAttribute("aria-expanded", "false");
  }

  toggle?.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(open));
  });

  links.forEach(a => a.addEventListener("click", closeMobileNav));

  const sections = links.map(a => document.querySelector(a.getAttribute("href"))).filter(Boolean);
  const obs = new IntersectionObserver((entries) => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b) => b.intersectionRatio - a.intersectionRatio)[0];
    if (!visible) return;
    const id = "#" + visible.target.id;
    const active = links.find(a => a.getAttribute("href") === id);
    if (!active) return;
    links.forEach(a => a.classList.toggle("is-active", a === active));
    setIndicatorTo(active);
  }, { threshold: [0.35, 0.55, 0.75] });
  sections.forEach(s => obs.observe(s));

  window.addEventListener("load", () => setIndicatorTo($(".nav-link.is-active")));
  window.addEventListener("resize", () => setIndicatorTo($(".nav-link.is-active")));

  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeMobileNav(); });
  document.addEventListener("click", (e) => {
    if (!nav.classList.contains("is-open")) return;
    if (!nav.contains(e.target) && !toggle.contains(e.target)) closeMobileNav();
  });
}

/* ==========================================================
   Reveal animations
   ========================================================== */

function setupReveal() {
  if (prefersReducedMotion()) { $$(".reveal").forEach(el => el.classList.add("is-in")); return; }
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add("is-in"); obs.unobserve(e.target); } });
  }, { threshold: 0.16 });
  $$(".reveal").forEach(el => obs.observe(el));
}

/* ==========================================================
   Calendar buttons + ICS download
   ========================================================== */

function setupCalendar() {
  const googleBtn = $("[data-action='google-calendar']");
  const icsBtn = $("[data-action='download-ics']");
  if (googleBtn) googleBtn.href = buildGoogleCalendarUrl(CONFIG);

  icsBtn?.addEventListener("click", () => {
    const ics = buildICS(CONFIG);
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "wedding.ics";
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);
    showToast("Calendar file", "Downloaded an .ics file (edit event details in CONFIG).");
  });
}

/* ==========================================================
   RSVP form (client-side validation + mailto)
   ========================================================== */

function setupRSVP() {
  const form = $("[data-rsvp-form]");
  if (!form) return;

  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function getFormData() {
    const data = new FormData(form);
    return Object.fromEntries(data.entries());
  }

  function validate(fields) {
    const errors = [];
    if (!fields.fullName?.trim()) errors.push("Full name is required.");
    if (!fields.email?.trim() || !emailRe.test(fields.email.trim())) errors.push("Please enter a valid email.");
    if (!fields.attendance) errors.push("Please select attendance (Yes/No).");
    return errors;
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const fields = getFormData();
    const errors = validate(fields);

    if (errors.length) {
      showToast("Check the form", errors[0]);
      const first = !fields.fullName ? $("#fullName") : (!emailRe.test(fields.email || "") ? $("#email") : null);
      first?.focus();
      return;
    }

    const payload = [
      `Name: ${fields.fullName}`,
      `Email: ${fields.email}`,
      `Attendance: ${fields.attendance}`,
      fields.guests ? `Guests: ${fields.guests}` : "",
      fields.diet ? `Dietary restrictions: ${fields.diet}` : "",
      fields.notes ? `Notes: ${fields.notes}` : "",
      "",
      `Event: ${CONFIG.calendar.title}`,
      `Date: ${CONFIG.weddingDateText}`,
      `Venue: ${CONFIG.venueName}`,
      `Address: ${CONFIG.venueAddress}`
    ].filter(Boolean).join("\n");

    if (CONFIG.rsvp.method === "formProvider" && CONFIG.rsvp.formActionUrl) {
      fetch(CONFIG.rsvp.formActionUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, meta: { event: CONFIG.calendar.title } })
      }).then(() => {
        form.reset();
        showToast("RSVP sent", "Thank you. We received your response.");
      }).catch(() => {
        showToast("Could not submit", "Please try again or use the email method.");
      });
      return;
    }

    const to = CONFIG.rsvp.mailtoTo;
    const subject = encodeURIComponent(CONFIG.rsvp.mailtoSubject || "Wedding RSVP");
    const body = encodeURIComponent(payload);
    window.location.href = `mailto:${encodeURIComponent(to)}?subject=${subject}&body=${body}`;
    form.reset();
    showToast("Email draft", "An email draft has been prepared with your RSVP details.");
  });
}

/* ==========================================================
   Copy buttons + QR + player + toast
   ========================================================== */

function setupCopyButtons() {
  $("[data-action='copy-iban']")?.addEventListener("click", async () => {
    const ok = await copyToClipboard(CONFIG.gifts.iban);
    showToast(ok ? "Copied" : "Copy failed", ok ? "IBAN copied to clipboard." : "Please copy manually.");
  });

  $("[data-action='copy-upload-link']")?.addEventListener("click", async () => {
    const ok = await copyToClipboard(CONFIG.photos.driveUploadLink);
    showToast(ok ? "Copied" : "Copy failed", ok ? "Upload link copied to clipboard." : "Please copy manually.");
  });
}

function setupQR() {
  const el = $("[data-qr]");
  if (!el) return;

  const maxWait = 2500;
  const start = performance.now();

  const renderFallback = () => {
    el.innerHTML = "";
    const p = document.createElement("p");
    p.style.margin = "0";
    p.style.padding = "12px";
    p.style.textAlign = "center";
    p.style.fontSize = "12px";
    p.style.color = "#111";
    p.textContent = "QR unavailable. Use the upload link instead.";
    el.appendChild(p);
  };

  const tick = () => {
    if (window.QRCode) {
      el.innerHTML = "";
      new window.QRCode(el, {
        text: CONFIG.photos.driveUploadLink,
        width: 120,
        height: 120,
        correctLevel: window.QRCode.CorrectLevel.M
      });
      return;
    }
    if (performance.now() - start > maxWait) return renderFallback();
    requestAnimationFrame(tick);
  };
  tick();
}

function setupPlayer() {
  const player = document.querySelector("[data-player]");
  const audio = document.querySelector("[data-audio]");
  const toggle = document.querySelector("[data-action='toggle-audio']");
  const vol = document.querySelector("[data-action='volume']");
  if (!player || !audio || !toggle || !vol) return;

  const DEFAULT_VOL = 0.35;

  // initial UI state
  audio.volume = 0;
  audio.muted = true;
  vol.value = "0";
  let isPlaying = false;

  const setPlaying = (state) => {
    isPlaying = state;
    player.classList.toggle("is-playing", state);
    toggle.setAttribute("aria-label", state ? "Pause music" : "Play music");
  };

  const fadeTo = (target, ms = 600) => {
    const start = audio.volume;
    const startTime = performance.now();

    const tick = (t) => {
      const p = Math.min(1, (t - startTime) / ms);
      audio.volume = start + (target - start) * p;
      vol.value = String(audio.volume);
      if (p < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  };

  // Try autoplay on page load (muted first, then fade up)
  const tryAutoplay = async () => {
    try {
      audio.muted = true;
      audio.volume = 0;
      vol.value = "0";

      await audio.play();
      setPlaying(true);

      // unmute + fade up (if allowed)
      audio.muted = false;
      fadeTo(DEFAULT_VOL, 700);
    } catch {
      // Autoplay blocked: start on first user gesture instead
      setPlaying(false);
      const resumeOnGesture = async () => {
        try {
          audio.muted = false;
          await audio.play();
          setPlaying(true);
          if (Number(vol.value) === 0) {
            audio.volume = DEFAULT_VOL;
            vol.value = String(DEFAULT_VOL);
          }
        } catch {
          showToast?.("Audio blocked", "Tap the play button or check browser settings.");
        }
      };
      window.addEventListener("pointerdown", resumeOnGesture, { once: true, passive: true });
    }
  };

  tryAutoplay();

  toggle.addEventListener("click", async () => {
    try {
      if (!isPlaying) {
        audio.muted = false;
        await audio.play();
        setPlaying(true);
        if (Number(vol.value) === 0) {
          vol.value = String(DEFAULT_VOL);
          audio.volume = DEFAULT_VOL;
        }
      } else {
        audio.pause();
        setPlaying(false);
      }
    } catch {
      showToast?.("Audio blocked", "Tap again or check your browser settings.");
    }
  });

  vol.addEventListener("input", () => {
    audio.muted = false;
    audio.volume = Number(vol.value);
  });

  audio.addEventListener("ended", () => setPlaying(false));
}

// Ensure it runs on page load
document.addEventListener("DOMContentLoaded", setupPlayer);

function setupToast() {
  const toast = $("[data-toast]");
  $("[data-action='toast-close']")?.addEventListener("click", () => { toast.hidden = true; });
}

/* ==========================================================
   Init
   ========================================================== */

function init() {
  bindContent();
  setupNav();
  setupReveal();
  setupCalendar();
  setupRSVP();
  setupCopyButtons();
  setupQR();
  setupPlayer();
  setupToast();
}

document.addEventListener("DOMContentLoaded", init);
