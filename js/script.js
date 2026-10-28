document.documentElement.classList.add("js");

document.addEventListener("DOMContentLoaded", () => {
    const navbar = document.querySelector(".navbar");
    const yearTargets = document.querySelectorAll("[data-current-year]");
    const revealItems = document.querySelectorAll(".reveal");
    const timelines = document.querySelectorAll(".timeline");
    const progressBars = document.querySelectorAll(".progress-bar[data-progress]");
    const filterButtons = document.querySelectorAll("[data-filter]");
    const portfolioItems = document.querySelectorAll("[data-category]");
    const projectModal = document.getElementById("projectModal");
    const contactForm = document.querySelector("[data-contact-form]");
    const formStatus = document.querySelector("[data-form-status]");

    const syncNavbar = () => {
        if (!navbar) return;
        navbar.classList.toggle("is-scrolled", window.scrollY > 20);
    };

    syncNavbar();
    window.addEventListener("scroll", syncNavbar, { passive: true });

    yearTargets.forEach((target) => {
        target.textContent = new Date().getFullYear();
    });

    const revealObserver = "IntersectionObserver" in window
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    revealObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15, rootMargin: "0px 0px -6% 0px" })
        : null;

    revealItems.forEach((item, index) => {
        if (!item.style.transitionDelay && item.dataset.stagger === "true") {
            item.style.transitionDelay = `${Math.min(index * 70, 420)}ms`;
        }

        if (revealObserver) {
            revealObserver.observe(item);
        } else {
            item.classList.add("in-view");
        }
    });

    const timelineObserver = "IntersectionObserver" in window
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in-view");
                    timelineObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.25 })
        : null;

    timelines.forEach((timeline) => {
        if (timelineObserver) {
            timelineObserver.observe(timeline);
        } else {
            timeline.classList.add("in-view");
        }
    });

    const progressObserver = "IntersectionObserver" in window
        ? new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const bar = entry.target;
                    bar.style.width = `${bar.dataset.progress}%`;
                    progressObserver.unobserve(bar);
                }
            });
        }, { threshold: 0.35 })
        : null;

    progressBars.forEach((bar) => {
        if (progressObserver) {
            progressObserver.observe(bar);
        } else {
            bar.style.width = `${bar.dataset.progress}%`;
        }
    });

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const selected = button.dataset.filter;

            filterButtons.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");

            portfolioItems.forEach((item) => {
                const isMatch = selected === "all" || item.dataset.category === selected;
                item.classList.toggle("is-hidden", !isMatch);
            });
        });
    });

    if (projectModal) {
        projectModal.addEventListener("show.bs.modal", (event) => {
            const trigger = event.relatedTarget;
            if (!trigger) return;

            const title = trigger.dataset.projectTitle || "Detail Proyek";
            const category = trigger.dataset.projectCategory || "Portfolio";
            const description = trigger.dataset.projectDescription || "Detail dapat diganti sesuai proyek asli.";
            const stack = trigger.dataset.projectStack || "HTML, CSS, JavaScript";
            const image = trigger.dataset.projectImage || "assets/images/project-01.svg";

            projectModal.querySelector(".modal-title").textContent = title;
            projectModal.querySelector("[data-modal-category]").textContent = category;
            projectModal.querySelector("[data-modal-description]").textContent = description;
            projectModal.querySelector("[data-modal-stack]").textContent = stack;
            projectModal.querySelector("[data-modal-image]").setAttribute("src", image);
            projectModal.querySelector("[data-modal-image]").setAttribute("alt", `Ilustrasi ${title}`);
        });
    }

    if (contactForm && formStatus) {
        contactForm.addEventListener("submit", (event) => {
            if (!contactForm.checkValidity()) {
                event.preventDefault();
                contactForm.classList.add("was-validated");
                formStatus.className = "alert alert-warning mt-3";
                formStatus.textContent = "Mohon lengkapi semua field dan gunakan format email yang benar.";
                return;
            }

            contactForm.classList.add("was-validated");
            const submitButton = contactForm.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.innerHTML = '<span class="spinner-border spinner-border-sm me-2" aria-hidden="true"></span>Mengirim...';
        });
    }
});
