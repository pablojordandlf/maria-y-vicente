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
    <div id="about" className="w-screen">
      <div className="container mx-auto">
        <AnimatedTitle
          title="BIENVENIDOS"
          containerClass="!text-black text-center pt-16 pb-12 lg:pt-24 lg:pb-16"
        />

        <div className="w-full overflow-hidden px-4 md:px-8 lg:px-32" id="clip">
          <div className="relative w-full h-[70vh] md:h-[80vh] lg:h-[90vh] rounded-lg md:rounded-xl lg:rounded-2xl overflow-hidden max-w-[1800px] mx-auto">
            <img
              src="photos/about-1.jpeg"
              alt="Background"
              className="block w-full h-full object-cover object-center"
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 py-12 lg:py-16 xl:max-w-4xl">
          <p className="text-gray-500 text-center text-lg md:text-xl lg:text-2xl leading-relaxed">
            ESTAMOS MUY FELICES DE QUE PUEDAS COMPARTIR ESTE DÍA CON NOSOTROS
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;