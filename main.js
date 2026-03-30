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
        start: "2027-06-26T11:00:00",
        end: "2027-06-27T02:00:00",
        timeZone: "Europe/Lisbon",
        location:
            "Quinta do Páteo — Quinta do Pateo, 2565-000 Dois Portos, Portugal",
        description: [
            "Dress code: Elegante attire.",
            "Children are welcome.",
            "RSVP on the website.",
            "Website: https://beatriz-c.github.io/",
        ].join("\\n"),
        google: {
            // details/location override (optional)
        },
    },

    dressCode:
        "Elegante, mas pedimos que não usem branco por razões óbvias. Podem trazer fato de banho, se estiverem interessados num mergulho.",

    foodSlides: [
        {
            title: "Welcome Drinks",
            text: "<br>Água Mineral, Água com Gás, Água Aromatizada, Sumo de Laranja, Cerveja, Sangria, Favaios, Martini Rosso e Branco, Vinho Branco e Rosé Leve, Porto Tónico, Gin Tónico, Caipirinha",
        },
        {
            title: "Sopa e Entradas",
            text: "<br>Sopa: Creme de Cenoura<br><br>Entradas: Rissóis de Camarão, Croquetes, Bolinhas de Alheira com Creme de Maçã, Tâmaras com Bacon, Cogumelos Gratinados, Pão de Alho Caseiro, Rolinhos de Queijo e Fiambre, Húmus, Patê de Marisco, Requeijão com Doce de Abóbora, Melão com Presunto, Camarão com Uva, Espetadas de Fruta, Choco Frito com Maionese",
        },
        {
            title: "Pratos Principais",
            text: "<br>Menu Infantil: Peito de Frango em Cubinhos com Arroz e Batata Frita<br><br>Prato de Peixe: Filete de Robalo Corado acompanhado de Batatinhas e Legumes Salteados<br><br>Prato de Carne: Naco do Lombo de Vitela Grelhado acompanhado de Batata Rústica e Legumes Salteados<br><br>Sobremesa na Mesa: Petit Gâteau de Chocolate com Bola de Gelado",
        },
        {
            title: "Bebidas e Sobremesas",
            text: "<br>Bebidas: Água, Sumo de Laranja, Coca-Cola, Vinho Branco e Tinto, Sangria Caseira, Cerveja<br><br>Buffet de Sobremesas: Quindim, Molotoff, Torta de Laranja, Serradura, Pannacotta, Cheesecake, Baba de Camelo, Bolo de Bolacha, Tarte de Maçã, Pudim Caseiro, Bolo de Chocolate, Mousse de Chocolate, Fruta da Época<br><br>Café",
        },
        {
            title: "Buffet Final e Bar Aberto",
            text: "<br>Buffet: Leitão, Camarão, Sapateira, Mexilhão em Vinagrete, Queijos e Enchidos, Bifaninhas no Pão, Lombo de Porco Fatiado, Caldo Verde, Tostinhas, Pão, Batata Frita<br><br>Bar Aberto: Gin Tónico, Famous Grouse, Aguardente Velha, Licor Beirão, Amêndoa Amarga",
        },
    ],

    maps: {
        embedUrl:
            "https://www.google.com/maps?q=Quinta+do+P%C3%A1teo&output=embed",
        linkUrl:
            "https://www.google.com/maps/place/Quinta+do+P%C3%A1teo/@39.0533596,-9.1708356,17z/data=!3m1!4b1!4m6!3m5!1s0xd18d342a9c48deb:0x6ff73e946720deee!8m2!3d39.0533555!4d-9.1682607!16s%2Fg%2F11c3l9tcjd?entry=ttu&g_ep=EgoyMDI2MDIwOC4wIKXMDSoASAFQAw%3D%3D",
    },
    howToGetThere: [
        "Estacionamento disponível no local.",
        "Se tiverem problemas ou dúvidas para chegar, por favor entrem em contacto connosco (os nossos números foram enviados no convite)",
    ],

    schedule: [
        {
            time: "12:00",
            title: "Welcome Drinks",
            note: "Uma boa festa começa assim",
        },
        {
            time: "12:30",
            title: "Cerimónia",
            note: "Por favor, sentem-se cerca de 10 minutos antes e não se coloquem à frente dos fotógrafos",
        },
        {
            time: "13:30",
            title: "Almoço",
            note: "Brindes e discursos",
        },
        {
            time: "16:00",
            title: "Fotos e Atividades",
            note: "Zona dos jogos e piscina",
        },
        {
            time: "19:00",
            title: "Buffet",
            note: "Em conjunto com momentos em vídeo",
        },
        {
            time: "20:30",
            title: "Corte do Bolo",
            note: "Esperamos que tenham espaço para a sobremesa...",
        },
        {
            time: "21:30",
            title: "Primeira Dança",
            note: 'Ensaiámos o suficiente para "parecermos" profissionais',
        },
        {
            time: "22:00",
            title: "Pista Aberta",
            note: "Os fortes ficam até ao dia seguinte",
        },
    ],

    about: {
        lede: "Tudo começou numa paragem de autocarro e, desde aí, tudo correu sobre rodas. O que começou num sítio improvável acabou por nos levar um pouco por todo o mundo. Pelo caminho, fomos somando histórias, experiências, mudanças de trabalho, licenciaturas e mestrados. Sempre com a certeza de que, acontecesse o que acontecesse, estaríamos lá um para o outro. Somos diferentes, mas iguais, e talvez seja por isso que nos encontramos sempre.",
        body: "Agora que aqui chegaram, é com muito gosto que vos recebemos no nosso dia especial.",
        mini: [
            "Frankie",
            "À sombra de pavões num jardim interminável",
            "Se a Beatriz pudesse viver nas nuvens, teria finalmente encontrado o seu lugar ideal. Já o David, prefere apreciar boas vistas com os pés bem assentes na terra",
            "Curiosos • Apaixonados • Divertidos",
        ],
        chapters: [
            "A chance introduction that felt anything but random.",
            "A simple question, a sure answer.",
            "A celebration with the people we love most.",
        ],
    },

    rsvp: {
        method: "mailto", // "mailto" | "formProvider"
        mailtoTo: "carvdomingues@gmail.com",
        mailtoSubject: "Casamento - RSVP",
        formActionUrl: "",
    },

    gifts: {
        registryLink: "https://example.com/registry",
        registryText: "A small list of favorites and future-home essentials.",
        iban: "PT00 0000 0000 0000 0000 0000 0",
    },

    photos: {
        driveUploadLink:
            "https://photos.google.com/u/2/share/AF1QipMjr0NRf8MSZmEbY-PFI3rDEVU6BYIJMCHExuc_1BpMVaYrcaX6C2EKyM_bEl8sLw",
        photographerLink: "https://example.com/photographer-gallery",
    },
};

/* ==========================================================
   Helpers
   ========================================================== */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

function prefersReducedMotion() {
    return (
        window.matchMedia &&
        window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
}

function pad2(n) {
    return String(n).padStart(2, "0");
}

function toUTCCompact(dtLocal, tz) {
    try {
        const parts = new Intl.DateTimeFormat("en-US", {
            timeZone: tz,
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
            hour12: false,
        }).formatToParts(new Date(dtLocal));
        const map = Object.fromEntries(
            parts
                .filter((p) => p.type !== "literal")
                .map((p) => [p.type, p.value]),
        );
        const utc = new Date(
            Date.UTC(
                +map.year,
                +map.month - 1,
                +map.day,
                +map.hour,
                +map.minute,
                +map.second,
            ),
        );
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
    const dtstamp =
        new Date().toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const tz = cfg.calendar.timeZone;
    const start = cfg.calendar.start.replace(/-/g, "").replace(/:/g, "");
    const end = cfg.calendar.end.replace(/-/g, "").replace(/:/g, "");

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
        "END:VCALENDAR",
    ];
    return lines.join("\r\n");
}

function buildGoogleCalendarUrl(cfg) {
    const title = encodeURIComponent(cfg.calendar.title);
    const details = encodeURIComponent(
        cfg.calendar.google.details || cfg.calendar.description,
    );
    const location = encodeURIComponent(
        cfg.calendar.google.location || cfg.calendar.location,
    );
    const start = toUTCCompact(cfg.calendar.start, cfg.calendar.timeZone);
    const end = toUTCCompact(cfg.calendar.end, cfg.calendar.timeZone);
    const base = "https://calendar.google.com/calendar/render?action=TEMPLATE";
    return `${base}&text=${title}&dates=${start}/${end}&details=${details}&location=${location}&ctz=${encodeURIComponent(cfg.calendar.timeZone)}`;
}

function showToast(title, text) {
    const toast = $("[data-toast]");
    $("[data-toast-title]").textContent = title;
    $("[data-toast-text]").textContent = text;
    toast.hidden = false;
    window.clearTimeout(showToast._t);
    showToast._t = window.setTimeout(() => {
        toast.hidden = true;
    }, 4200);
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
        try {
            document.execCommand("copy");
            return true;
        } catch {
            return false;
        } finally {
            document.body.removeChild(ta);
        }
    }
}

/* ==========================================================
   Bind content from CONFIG
   ========================================================== */

function bindContent() {
    document.title = `Casamento — ${CONFIG.coupleNames}`;

    $$("[data-bind]").forEach((el) => {
        const key = el.getAttribute("data-bind");
        const map = {
            coupleNames: CONFIG.coupleNames,
            weddingDate: CONFIG.weddingDateText,
            venueName: CONFIG.venueName,
            venueAddress: CONFIG.venueAddress,
            dressCode: CONFIG.dressCode,
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

    $$("[data-bind-href]").forEach((el) => {
        const key = el.getAttribute("data-bind-href");
        if (key === "mapsLink") el.href = CONFIG.maps.linkUrl;
        if (key === "registryLink") el.href = CONFIG.gifts.registryLink;
        if (key === "photographerLink")
            el.href = CONFIG.photos.photographerLink;
        if (key === "driveUploadLink") el.href = CONFIG.photos.driveUploadLink;
    });

    $$("[data-bind-src]").forEach((el) => {
        if (el.getAttribute("data-bind-src") === "mapsEmbedUrl")
            el.src = CONFIG.maps.embedUrl;
    });

    const list = $("[data-bind='scheduleList']");
    if (list) {
        list.innerHTML = "";
        CONFIG.schedule.forEach((item) => {
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
        CONFIG.howToGetThere.forEach((b) => {
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
        const x = r.left - navRect.left + r.width * 0.1;
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

    links.forEach((a) => a.addEventListener("click", closeMobileNav));

    const sections = links
        .map((a) => document.querySelector(a.getAttribute("href")))
        .filter(Boolean);
    const obs = new IntersectionObserver(
        (entries) => {
            const visible = entries
                .filter((e) => e.isIntersecting)
                .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
            if (!visible) return;
            const id = "#" + visible.target.id;
            const active = links.find((a) => a.getAttribute("href") === id);
            if (!active) return;
            links.forEach((a) => a.classList.toggle("is-active", a === active));
            setIndicatorTo(active);
        },
        { threshold: [0.35, 0.55, 0.75] },
    );
    sections.forEach((s) => obs.observe(s));

    window.addEventListener("load", () =>
        setIndicatorTo($(".nav-link.is-active")),
    );
    window.addEventListener("resize", () =>
        setIndicatorTo($(".nav-link.is-active")),
    );

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeMobileNav();
    });
    document.addEventListener("click", (e) => {
        if (!nav.classList.contains("is-open")) return;
        if (!nav.contains(e.target) && !toggle.contains(e.target))
            closeMobileNav();
    });
}

/* ==========================================================
   Reveal animations
   ========================================================== */

function setupReveal() {
    if (prefersReducedMotion()) {
        $$(".reveal").forEach((el) => el.classList.add("is-in"));
        return;
    }
    const obs = new IntersectionObserver(
        (entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) {
                    e.target.classList.add("is-in");
                    obs.unobserve(e.target);
                }
            });
        },
        { threshold: 0.16 },
    );
    $$(".reveal").forEach((el) => obs.observe(el));
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
        showToast(
            "Evento descarregado",
            "Abre-o para adicionar ao teu calendário.",
        );
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
        if (!fields.fullName?.trim()) errors.push("O nome é obrigatório.");
        if (!fields.email?.trim() || !emailRe.test(fields.email.trim()))
            errors.push("Por favor insere um email válido.");
        if (!fields.attendance)
            errors.push("Por favor, seleciona a presença (Sim/Não).");
        if (!fields.transportNeeded)
            errors.push(
                "Por favor, seleciona se precisas de transporte (Sim/Não).",
            );
        return errors;
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const fields = getFormData();
        const errors = validate(fields);

        if (errors.length) {
            showToast("Verifica o RSVP", errors[0]);

            // focus first error
            if (!fields.fullName?.trim()) {
                $("#fullName")?.focus();
                return;
            }
            if (!fields.email?.trim() || !emailRe.test(fields.email.trim())) {
                $("#email")?.focus();
                return;
            }
            if (!fields.attendance) {
                form.querySelector("input[name='attendance']")?.focus();
                return;
            }
            if (!fields.transportNeeded) {
                form.querySelector("input[name='transportNeeded']")?.focus();
                return;
            }

            return;
        }

        const payload = [
            `Nome: ${fields.fullName}`,
            `Email: ${fields.email}`,
            `Presença: ${fields.attendance}`,
            fields.guests ? `Convidados: ${fields.guests}` : "",
            fields.diet ? `Restrições alimentares: ${fields.diet}` : "",
            `Necessita de transporte: ${fields.transportNeeded}`,
            fields.transportPeople
                ? `Pessoas para transporte: ${fields.transportPeople}`
                : "",
            fields.notes ? `Notas: ${fields.notes}` : "",
            "",
            `Evento: ${CONFIG.calendar.title}`,
            `Data: ${CONFIG.weddingDateText}`,
            `Local: ${CONFIG.venueName}`,
            `Endereço: ${CONFIG.venueAddress}`,
        ]
            .filter(Boolean)
            .join("\n");

        if (
            CONFIG.rsvp.method === "formProvider" &&
            CONFIG.rsvp.formActionUrl
        ) {
            fetch(CONFIG.rsvp.formActionUrl, {
                method: "POST",
                mode: "no-cors",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    ...fields,
                    meta: { event: CONFIG.calendar.title },
                }),
            })
                .then(() => {
                    form.reset();
                    showToast(
                        "RSVP enviado",
                        "Obrigado. Recebemos a tua resposta.",
                    );
                })
                .catch(() => {
                    showToast(
                        "Não foi possível enviar",
                        "Por favor tenta novamente ou usa o método do email.",
                    );
                });
            return;
        }

        const to = CONFIG.rsvp.mailtoTo;
        const subject = encodeURIComponent(
            CONFIG.rsvp.mailtoSubject || "Wedding RSVP",
        );
        const body = encodeURIComponent(payload);
        window.location.href = `mailto:${encodeURIComponent(to)}?subject=${subject}&body=${body}`;
        form.reset();
        showToast(
            "Rascunho de email",
            "Um rascunho de email foi preparado com os detalhes do teu RSVP.",
        );
    });
}

/* ==========================================================
   Copy buttons + QR + player + toast
   ========================================================== */

function setupCopyButtons() {
    $("[data-action='copy-iban']")?.addEventListener("click", async () => {
        const ok = await copyToClipboard(CONFIG.gifts.iban);
        showToast(
            ok ? "Copiado" : "Falha ao copiar",
            ok
                ? "IBAN copiado para a área de transferência."
                : "Por favor copia manualmente.",
        );
    });

    $("[data-action='copy-upload-link']")?.addEventListener(
        "click",
        async () => {
            const ok = await copyToClipboard(CONFIG.photos.driveUploadLink);
            showToast(
                ok ? "Copiado" : "Falha ao copiar",
                ok
                    ? "Link de upload copiado para a área de transferência."
                    : "Por favor copia manualmente.",
            );
        },
    );
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
        toggle.setAttribute(
            "aria-label",
            state ? "Pausar música" : "Tocar música",
        );
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
                    showToast?.(
                        "Áudio bloqueado",
                        "Toca no botão de reprodução ou verifica as definições do navegador.",
                    );
                }
            };
            window.addEventListener("pointerdown", resumeOnGesture, {
                once: true,
                passive: true,
            });
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
            showToast?.(
                "Áudio bloqueado",
                "Toca novamente ou verifica as definições do navegador.",
            );
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
    $("[data-action='toast-close']")?.addEventListener("click", () => {
        toast.hidden = true;
    });
}

function setupFoodSlider() {
    const slider = document.querySelector("[data-food-slider]");
    if (!slider || !CONFIG.foodSlides?.length) return;

    const titleEl = document.querySelector("[data-food-title]");
    const textEl = document.querySelector("[data-food-text]");
    const prevBtn = document.querySelector("[data-food-prev]");
    const nextBtn = document.querySelector("[data-food-next]");

    let currentSlide = 0;

    function renderSlide() {
        const slide = CONFIG.foodSlides[currentSlide];
        titleEl.textContent = slide.title;
        textEl.innerHTML = slide.text.replace(/\.\s/g, ".<br><br>");
    }

    prevBtn?.addEventListener("click", () => {
        currentSlide =
            (currentSlide - 1 + CONFIG.foodSlides.length) %
            CONFIG.foodSlides.length;
        renderSlide();
    });

    nextBtn?.addEventListener("click", () => {
        currentSlide = (currentSlide + 1) % CONFIG.foodSlides.length;
        renderSlide();
    });

    renderSlide();
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
    setupPlayer();
    setupToast();
    setupFoodSlider();
}

document.addEventListener("DOMContentLoaded", init);
