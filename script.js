/* ------------------------------------
   FAQ INTERACTIVE (Accordéon)
-------------------------------------- */

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {
    const button = item.querySelector(".faq-question");

    button.addEventListener("click", () => {
        item.classList.toggle("active");
    });
});
/* ------------------------------------
   ANIMATION DES CHIFFRES (STATISTIQUES)
-------------------------------------- */

const statNumbers = document.querySelectorAll(".stat-number");
let statsPlayed = false;

function animateStats() {
    statNumbers.forEach(num => {
        const target = +num.getAttribute("data-target");
        const speed = 40;

        let count = 0;

        const updateCount = () => {
            if (count < target) {
                count += Math.ceil(target / speed);
                num.textContent = count;
                requestAnimationFrame(updateCount);
            } else {
                num.textContent = target;
            }
        };

        updateCount();
    });
}

window.addEventListener("scroll", () => {
    const statsSection = document.querySelector(".stats");

    if (!statsPlayed && window.scrollY + window.innerHeight > statsSection.offsetTop + 200) {
        animateStats();
        statsPlayed = true;
    }
});
/* ------------------------------------
   ANIMATION REVEAL AU SCROLL
-------------------------------------- */

const revealElements = document.querySelectorAll(".section, .sport-card, .prog-card, .avis-card, .coach-card");

const revealOnScroll = () => {
    revealElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            el.style.opacity = 1;
            el.style.transform = "translateY(0)";
        }
    });
};

revealElements.forEach(el => {
    el.style.opacity = 0;
    el.style.transform = "translateY(40px)";
    el.style.transition = "all .7s ease-out";
});

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);
/* ------------------------------------
   HEADER SHRINK (effet professionnel)
-------------------------------------- */

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.style.padding = "12px 6%";
        header.style.background = "rgba(0,0,0,0.6)";
    } else {
        header.style.padding = "20px 6%";
        header.style.background = "rgba(0,0,0,0.35)";
    }
});
/* ------------------------------------
   FADE-IN ON PAGE LOAD
-------------------------------------- */

window.addEventListener("load", () => {
    document.body.classList.add("loaded");
});
/* ------------------------------------
   SMOOTH SCROLL INERTIA
-------------------------------------- */

const smoothLinks = document.querySelectorAll('a[href^="#"]');

smoothLinks.forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        const target = document.querySelector(link.getAttribute("href"));
        if (!target) return;

        window.scrollTo({
            top: target.offsetTop - 60,
            behavior: "smooth"
        });
    });
});
/* ------------------------------------
   PARALLAX HERO EFFECT
-------------------------------------- */

const hero = document.querySelector(".hero");

window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    hero.style.backgroundPositionY = scrollY * 0.4 + "px";
});
/* ------------------------------------
   HEADER SHRINK ULTRA PREMIUM
-------------------------------------- */

window.addEventListener("scroll", () => {
    if (window.scrollY > 60) {
        header.classList.add("shrink");
    } else {
        header.classList.remove("shrink");
    }
});
/* ------------------------------------
   MICRO PARALLAX ON CARDS
-------------------------------------- */

const cards = document.querySelectorAll(".sport-card, .prog-card, .coach-card, .gallery-item");

cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        card.style.transform = `translateY(-8px) rotateX(${y * 6}deg) rotateY(${x * -6}deg)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0) rotateX(0) rotateY(0)";
    });
});
