import gsap from "gsap";
import { useRef } from "react";
import Button from "./Button";
import AnimatedTitle from "./AnimatedTitle";

const FloatingImage = () => {
  const frameRef = useRef(null);
  const animation = useRef(null);

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const element = frameRef.current;

    if (!element) return;

    const rect = element.getBoundingClientRect();
    const xPos = clientX - rect.left;
    const yPos = clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Reduced rotation intensity for desktop
    const rotateX = ((yPos - centerY) / centerY) * -5;
    const rotateY = ((xPos - centerX) / centerX) * 5;

    // Smooth interpolation for desktop movement
    if (animation.current) animation.current.kill();
    
    animation.current = gsap.to(element, {
      duration: 0.4,
      rotateX,
      rotateY,
      transformPerspective: 800, // Increased perspective for depth
      ease: "power2.out",
      overwrite: true
    });
  };

  const handleMouseLeave = () => {
    if (animation.current) animation.current.kill();
    
    gsap.to(frameRef.current, {
      duration: 0.6,
      rotateX: 0,
      rotateY: 0,
      ease: "elastic.out(1, 0.5)"
    });
  };

  return (
    <div id="story" className="min-h-dvh w-screen bg-black text-blue-50">
      <div className="flex size-full flex-col items-center py-10 pb-24 md:pb-32">
        <p className="font-general text-sm uppercase md:text-[10px]">
          alojamientos recomendados
        </p>

        <div className="relative size-full">
          <AnimatedTitle
            title="hoteles"
            containerClass="mt-5 pointer-events-none mix-blend-difference relative z-10"
          />

          <div className="story-img-container">
            <div className="story-img-mask">
              <div className="story-img-content md:max-w-4xl lg:max-w-6xl mx-auto">
                <img
                  ref={frameRef}
                  onMouseMove={handleMouseMove}
                  onMouseLeave={handleMouseLeave}
                  src="/photos/hotel.jpg"
                  alt="entrance.webp"
                  className="object-cover w-full h-[60vh] md:h-[80vh] rounded-lg shadow-xl"
                  style={{
                    transformStyle: 'preserve-3d',
                    backfaceVisibility: 'hidden'
                  }}
                />
              </div>
            </div>

            <svg className="invisible absolute size-0" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <filter id="flt_tag">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feColorMatrix
                    in="blur"
                    mode="matrix"
                    values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9"
                    result="flt_tag"
                  />
                  <feComposite in="SourceGraphic" in2="flt_tag" operator="atop" />
                </filter>
              </defs>
            </svg>
          </div>
        </div>

        <div className="-mt-80 flex w-full justify-center md:-mt-96 lg:-mt-80 md:me-44 md:justify-end">
          <div className="flex h-full w-fit flex-col items-center md:items-start max-w-2xl">
            <p className="mt-3 max-w-sm text-center font-circular-web text-violet-50 md:text-start md:max-w-md lg:max-w-lg">
              En el siguiente enlace encontrarás el listado de alojamientos recomendados en Valladolid, 
              algunos con precios especiales para la boda.
            </p>

            <Button
              id="realm-btn"
              title="alojamientos"
              containerClass="mt-5 md:mt-8"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FloatingImage;