/* ================= ELEMENTS ================= */

const navbar = document.getElementById("navbar");

const navLinks = document.querySelectorAll(".nav-link");

const themeToggle = document.getElementById("themeToggle");

const themeIcon = document.getElementById("themeIcon");

const menuToggle = document.getElementById("menuToggle");

const navMenu = document.getElementById("navMenu");

/* ================= NAVBAR SCROLL ================= */

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

/* ================= ACTIVE NAV LINK ================= */

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((item) => {
      item.classList.remove("active");
    });

    link.classList.add("active");

    /* Close mobile menu */

    navMenu.classList.remove("open");
  });
});

/* ================= DARK / LIGHT MODE ================= */

themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");

  /* Change icon */

  if (document.body.classList.contains("dark")) {
    themeIcon.textContent = "☾";
  } else {
    themeIcon.textContent = "☀";
  }
});

/* ================= MOBILE MENU ================= */

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});
/* ================= SKILLS ANIMATION ================= */

const skillCircles = document.querySelectorAll(".circle");

const animateSkills = () => {

    skillCircles.forEach(circle => {

        const target = Number(circle.dataset.percent);

        const number = circle.querySelector(".skill-number");

        let current = 0;

        const animation = setInterval(() => {

            current++;

            circle.style.setProperty("--percent", current);

            number.textContent = current;

            if (current >= target) {
                clearInterval(animation);
            }

        }, 20);

    });

};


/* Start animation when Skills appears */

const skillsSection = document.querySelector("#skills");

const skillsObserver = new IntersectionObserver(
    (entries) => {

        if (entries[0].isIntersecting) {

            animateSkills();

            skillsObserver.disconnect();

        }

    },
    {
        threshold: 0.3
    }
);

skillsObserver.observe(skillsSection);
