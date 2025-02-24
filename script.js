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
        .from(".hero-content > .cta-button", {
            y: 30,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: "back.out(1.7)"
        }, "-=0.4")
        .from(".hero-content > .cta-button i", {
            y: 15,
            opacity: 0,
            duration: 0.4,
            stagger: 0.1,
            ease: "back.out(2)",
            scale: 0.5
        }, "-=0.2");


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

    // Initialize Lenis
    const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        smoothTouch: false,
        touchMultiplier: 2
    });

    // Create a function to handle the RAF
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }

    // Start the animation loop
    requestAnimationFrame(raf);

    // Connect Lenis to ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Tell GSAP to use Lenis's scroll position
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    // Optional: Prevent GSAP's ticker from affecting Lenis
    gsap.ticker.lagSmoothing(0);
});
