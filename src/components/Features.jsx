import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src, title, description, isComingSoon, isDarkText, alignRight }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [hoverOpacity, setHoverOpacity] = useState(0);
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  return (
    <div className="relative size-full">
      <img
        src={src}
        alt={title}
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className={`relative z-10 flex size-full flex-col justify-between p-5 ${
        isDarkText ? "text-gray-800" : "text-blue-50"
      } ${alignRight ? "items-end text-right" : ""}`}>
        <div className={`${alignRight ? "w-full" : ""}`}>
          <h1 className={`bento-title special-font ${alignRight ? "ml-auto" : ""}`}>{title}</h1>
          {description && (
            <p className={`mt-3 max-w-64 text-xs font-bold md:text-base ${alignRight ? "ml-auto" : ""}`}>
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

const Features = () => (
  <section className="bg-white pb-50">
    <div className="container mt-0 mx-auto px-3 md:px-10">
      <div className="grid h-[135vh] w-full grid-cols-2 grid-rows-3 gap-7 px-5 py-12">
        {[1, 2, 3].map((index) => (
          <BentoTilt key={index} className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src={`/photos/image-feature-${index}.jpeg`}
              title={
                <>
                  {index === 1
                    ? "PRE-BODA"
                    : index === 2
                    ? "CEREMONIA"
                    : "CELEBRACIÓN"}
                </>
              }
              description={
                index === 1
                  ? "STAY TUNED"
                  : index === 2
                  ? "Iglesia del Salvador 12:30h 6 de septiembre"
                  : "Esguevillas de Esgueva. Hay buses de ida y vuelta"
              }
              isDarkText={index !== 1}
              alignRight={index === 3}
            />
          </BentoTilt>
        ))}
      </div>
    </div>
  </section>
);

export default Features;