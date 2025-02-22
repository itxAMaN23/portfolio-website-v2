document.addEventListener("DOMContentLoaded", function () {

    gsap.registerPlugin(ScrollTrigger);

    const navTimeline = gsap.timeline();
    navTimeline
        .from(".navbar", {
            y: -100,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out"
        })
        .from(".nav-links li", {
            opacity: 0,
            y: -20,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.4")
        .from(".social-links a", {
            opacity: 0,
            y: -20,
            duration: 0.6,
            stagger: 0.2,
            ease: "power2.out"
        }, "-=0.4");


    const heroTimeline = gsap.timeline({ delay: 0.3 });
    heroTimeline
        .from(".hero-content .tag", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        })
        .from(".hero-content h1", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        .from(".hero-content p", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        .from(".cta-button", {
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.4")
        .from(".cta-button i", {
            y: 25,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }, "-=0.4");


    const sectionAnimations = [
        {
            element: ".about .section-title",
            start: "top 80%"
        },
        {
            element: ".bio p",
            start: "top 75%",
            stagger: true
        },
        {
            element: ".about-container .tech-stack",
            start: "top 75%"
        },
        {
            element: ".skills .section-title",
            start: "top 80%"
        },
        {
            element: ".skills-text p",
            start: "top 75%",
            stagger: true
        },
        {
            element: ".projects .section-title",
            start: "top 80%"
        }
    ];

    sectionAnimations.forEach(animation => {
        gsap.from(animation.element, {
            scrollTrigger: {
                trigger: animation.element,
                start: animation.start,
                end: "top 40%",
                scrub: 1,
                toggleActions: "play none none reverse"
            },
            x: -50,
            opacity: 0,
            duration: 1,
            ease: "power2.out",
            ...(animation.stagger && { stagger: 0.2 })
        });
    });

    gsap.from(".stat-item", {
        scrollTrigger: {
            trigger: ".stat-item",
            start: "top 85%",
            end: "top 40%",
            scrub: 1
        },
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: {
            each: 0.2,
            from: "start"
        },
        ease: "power2.out"
    });

    const techItems = gsap.utils.toArray(".tech-item i");
    techItems.forEach((icon, index) => {
        gsap.fromTo(icon,
            {
                opacity: 0,
                x: 30
            },
            {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: icon,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                delay: index * 0.1
            }
        );
    });
});
