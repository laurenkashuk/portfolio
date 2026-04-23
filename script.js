const sections = document.querySelectorAll(".reveal");
const navLinks = document.querySelectorAll(".site-nav a");
const sectionLinks = document.querySelectorAll('.site-nav a[href^="#"]');
const currentPage = window.location.pathname.split("/").pop() || "index.html";

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.2 }
);

sections.forEach((section) => revealObserver.observe(section));

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");
      if (!id || !entry.isIntersecting) {
        return;
      }

      sectionLinks.forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${id}`);
      });
    });
  },
  {
    rootMargin: "-30% 0px -50% 0px",
    threshold: 0.1,
  }
);

document.querySelectorAll("main section[id]").forEach((section) => {
  sectionObserver.observe(section);
});

navLinks.forEach((link) => {
  const page = link.dataset.page;
  if (page) {
    link.classList.toggle("is-active", page === currentPage);
  }
});
