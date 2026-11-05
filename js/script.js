// ===== Portfolio Script =====

// Theme toggle
const themeToggle = document.getElementById("theme-toggle");
const html = document.documentElement;

// Load saved theme
const savedTheme = localStorage.getItem("theme") || "dark";
html.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const current = html.getAttribute("data-theme");
    const next = current === "dark" ? "light" : "dark";
    html.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    updateThemeIcon(next);
  });
}

function updateThemeIcon(theme) {
  if (themeToggle) {
    themeToggle.textContent = theme === "dark" ? "🌙" : "☀️";
  }
}

// Mobile nav toggle
const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

if (navToggle && navMenu) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    navToggle.classList.toggle("open");
  });

  // Close menu when clicking a link
  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      navToggle.classList.remove("open");
    });
  });
}

// Smooth scroll for nav links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Fade-in on scroll (Intersection Observer)
const fadeElements = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
);

fadeElements.forEach((el) => observer.observe(el));

// Skill bars animation on scroll
const skillBars = document.querySelectorAll(".skill-fill");
const skillObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const width = entry.target.style.width;
        entry.target.style.width = "0%";
        setTimeout(() => {
          entry.target.style.width = width;
        }, 100);
      }
    });
  },
  { threshold: 0.5 }
);

skillBars.forEach((bar) => skillObserver.observe(bar));

// Scroll to top button
const scrollTopBtn = document.getElementById("scroll-top");
if (scrollTopBtn) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      scrollTopBtn.classList.add("visible");
    } else {
      scrollTopBtn.classList.remove("visible");
    }
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// Navbar scroll effect
const navbar = document.getElementById("navbar");
if (navbar) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
}

// Contact form handling
const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = "Mengirim...";
    btn.disabled = true;

    // Simulate send (replace with Formspree or actual API)
    setTimeout(() => {
      btn.textContent = "Terkirim! ✓";
      btn.style.background = "#22c55e";
      contactForm.reset();
      setTimeout(() => {
        btn.textContent = originalText;
        btn.style.background = "";
        btn.disabled = false;
      }, 3000);
    }, 1000);
  });
}

// Add fade-in class to sections
document.querySelectorAll("section").forEach((section) => {
  section.classList.add("fade-in");
});

// Re-observe after adding classes
document.querySelectorAll(".fade-in").forEach((el) => observer.observe(el));

console.log("Portfolio loaded successfully!");