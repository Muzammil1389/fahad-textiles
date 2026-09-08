/* =========================================================
   Fahad Textiles — site script
   ---------------------------------------------------------
   EDIT THE BUSINESS DETAILS BELOW. Everything else updates
   automatically (contact cards, footer, WhatsApp links).
   ========================================================= */
const BUSINESS = {
  whatsapp: "923001234567",              // digits only, with country code (92 for Pakistan)
  phoneDisplay: "+92 300 1234567",       // how the number is shown on the page
  email: "fahadtextile@gmail.com",
  address: "123 Textile Market, Chauburji, Lahore, Pakistan",
};

(function () {
  "use strict";

  /* ---- Fill business details into the page ---- */
  document.querySelectorAll("[data-phone]").forEach((el) => {
    el.textContent = BUSINESS.phoneDisplay;
    el.href = "tel:+" + BUSINESS.whatsapp;
  });
  document.querySelectorAll("[data-email]").forEach((el) => {
    el.textContent = BUSINESS.email;
    el.href = "mailto:" + BUSINESS.email;
  });
  document.querySelectorAll("[data-address]").forEach((el) => {
    el.textContent = BUSINESS.address;
  });

  const waLink = (text) =>
    "https://wa.me/" + BUSINESS.whatsapp + (text ? "?text=" + encodeURIComponent(text) : "");

  const waFloat = document.getElementById("wa-float");
  if (waFloat) waFloat.href = waLink("Hello Fahad Textiles, I would like to ask about an order.");

  /* ---- Footer year ---- */
  const year = document.getElementById("year");
  if (year) year.textContent = new Date().getFullYear();

  /* ---- Sticky header shadow ---- */
  const header = document.querySelector(".header");
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });

  /* ---- Mobile navigation ---- */
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("nav");
  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });
    nav.querySelectorAll("a").forEach((a) =>
      a.addEventListener("click", () => {
        nav.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      })
    );
  }

  /* ---- Highlight the nav link for the section in view ---- */
  const sections = [...document.querySelectorAll("section[id]")];
  const navLinks = [...document.querySelectorAll('.nav a[href^="#"]:not(.btn)')];
  if ("IntersectionObserver" in window && sections.length) {
    const spy = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          navLinks.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + e.target.id));
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    sections.forEach((s) => spy.observe(s));
  }

  /* ---- Reveal on scroll ---- */
  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    reveals.forEach((el) => io.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("in"));
  }

  /* ---- Quote form: send via WhatsApp or email ---- */
  const form = document.getElementById("quote-form");
  const note = document.getElementById("form-note");

  const readForm = () => {
    const data = Object.fromEntries(new FormData(form).entries());
    const missing = [...form.querySelectorAll("[required]")].filter((f) => !f.value.trim());
    if (missing.length) {
      missing[0].focus();
      note.textContent = "Please fill in your name, phone number and the service you need.";
      note.style.color = "#c0392b";
      return null;
    }
    note.style.color = "";
    note.textContent = "Opening your app with the message pre-filled...";
    return data;
  };

  const buildMessage = (d) =>
    [
      "Quote request - Fahad Textiles",
      "",
      "Name: " + d.name,
      "Phone: " + d.phone,
      "Service: " + d.service,
      "Quantity: " + (d.quantity || "Not specified"),
      "Details: " + (d.message || "-"),
    ].join("\n");

  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const d = readForm();
      if (!d) return;
      window.open(waLink(buildMessage(d)), "_blank", "noopener");
    });

    const emailBtn = document.getElementById("send-email");
    if (emailBtn) {
      emailBtn.addEventListener("click", () => {
        const d = readForm();
        if (!d) return;
        const subject = "Quote request: " + d.service;
        window.location.href =
          "mailto:" + BUSINESS.email +
          "?subject=" + encodeURIComponent(subject) +
          "&body=" + encodeURIComponent(buildMessage(d));
      });
    }
  }
})();
