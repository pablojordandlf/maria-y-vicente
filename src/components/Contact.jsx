import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/photos/maria peque.jpeg"
            clipClass="contact-clip-path-1"
          />
          
        </div>

        

        <div className="flex flex-col items-center text-center">

          <AnimatedTitle
            title="esto no se paga solo"
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />
          <p className="mb-10 font-general text-[10px] uppercase">
            ES00 0000 0000 0000 0000
          </p>

          
        </div>
      </div>
    </div>
  );
};

export default Contact;
