import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import VanillaTilt from "vanilla-tilt";

gsap.registerPlugin(ScrollTrigger);

const useGsapEffects = () => {
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".section").forEach((section) => {
        gsap.fromTo(
          section,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      gsap.utils.toArray(".card-3d").forEach((card, i) => {
        gsap.fromTo(
          card,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: i * 0.1,
            ease: "back.out(1.2)",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
            },
          }
        );
      });

      VanillaTilt.init(document.querySelectorAll(".card-3d"), {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
      });
    });

    return () => {
      ctx.revert();
    };
  }, []);
};

export default useGsapEffects;
