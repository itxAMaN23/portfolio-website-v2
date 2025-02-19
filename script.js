document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger)

    gsap.from(".navbar", {
        y: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });

    gsap.from(".nav-links li", {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
    });

    gsap.from(".social-links a", {
        opacity: 0,
        y: -20,
        duration: 1,
        ease: "power2.out",
        stagger: 0.3,
    });

    gsap.from(".hero-content .tag", {
        x: -100,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        delay: 0.5,
    });

    gsap.from(".hero-content h1", {
        x: -100,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        delay: 0.75,
    });

    gsap.from(".hero-content p", {
        x: -100,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        delay: 1,
    });

    gsap.from(".cta-button", {
        x: -100,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        delay: 1.25,
    });

    gsap.from(".cta-button i", {
        y: 25,
        duration: 1,
        opacity: 0,
        ease: "power2.out",
        delay: 1.35,
    });

    gsap.from(".about .section-title", {
        scrollTrigger: {
            trigger: ".about .section-title",
            scroller: "body",
            start: "top 40%",
            end: "top 60%",
            ease: "power2.out",
            scrub: 2
        },
        x: -100,
        duration: 1,
        opacity: 0,
    });

    gsap.from(".bio p", {
        scrollTrigger: {
            trigger: ".bio p",
            start: "top 50%",
            end: "top 30%",
            ease: "power2.out",
            scrub: 2
        },
        x: -50,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: ".stat-item",
            start: "top 80%",
            end: "top 70%",
            ease: "power2.out",
            scrub: 2,
        },
        duration: 1.5,
        opacity: 0,
        stagger: 0.2,
        delay: 0.5
    });

    gsap.from(".about-container .tech-stack", {
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        delay: 0.5,
        scrollTrigger: {
            trigger: ".about-container .tech-stack",
            start: "top 50%",
            end: "top 30%",
            ease: "power2.out",
            scrub: 2,
        }
    });

    gsap.utils.toArray(".tech-item i").forEach((icon) => {
        gsap.fromTo(icon,
            { opacity: 0, x: 50, stagger: 0.3 },
            {
                opacity: 1, x: 0, duration: 1, ease: "power2.out",
                scrollTrigger: {
                    trigger: icon,
                    start: "top 70%",
                    end: "top 60%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    });

    gsap.from(".skills .section-title", {
        scrollTrigger: {
            trigger: ".skills .section-title",
            start: "top 40%",
            end: "top 60%",
            ease: "power2.out",
            scrub: 2,
        },
        x: -100,
        duration: 1,
        opacity: 0,
    });

    gsap.from(".skills-text p", {
        scrollTrigger: {
            trigger: ".skills-text p",
            start: "top 50%",
            end: "top 30%",
            ease: "power2.out",
            scrub: 2,
        },
        x: -50,
        duration: 1,
        opacity: 0,
        stagger: 0.3
    });

    gsap.from(".projects .section-title", {
        scrollTrigger: {
            trigger: ".projects .section-title",
            start: "top 80%",
            end: "top 60%",
            ease: "power2.out",
            scrub: 2,
        },
        x: -100,
        duration: 3,
        opacity: 0,
    });
    
    
})

