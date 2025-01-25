import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=0 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: false,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-8 mt-16 flex flex-col items-center gap-5">
        {/*
        <p className="font-general text-sm uppercase md:text-[10px]">
          
        </p>
        */}
        <AnimatedTitle
          title="BIENVENIDOS"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p className="text-gray-500">
            ESTAMOS MUY FELICES DE QUE PUEDAS COMPARTIR ESTE DÍA CON NOSOTROS
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="about-image">
          <img
            src="photos/about-1.jpeg"
            alt="Background"
            className=" left-0 top-0 size-full "
          />
        </div>
      </div>

    </div>
  );
};

export default About;
