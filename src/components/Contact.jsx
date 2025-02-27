import AnimatedTitle from "./AnimatedTitle";

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-blue-400 py-24 text-blue-50 sm:overflow-hidden">

        <div className="flex flex-col items-center text-center">
          <AnimatedTitle
            title="El mayor regalo es vuestra acompañia, pero os dejamos nuestra cuenta por si queréis ayudarnos con nuestros comienzos"
            className="special-font !text-3xl !leading-[1.2] md:!text-5xl md:!leading-[1]"
          />
          <p className="mt-2 mb-0 font-general text-[14px] uppercase">
            ES12 2100 3078 9422 0032 9341
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
