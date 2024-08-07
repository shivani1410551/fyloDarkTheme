import Features from "./Features";
import StayProductive from "./StayProductive";
const Hero = () => {
  return (
    <>
      <section className="text-White mx-auto xxs:p-6 sm:p-8 md:p-10 section-intro  xxs:grid xxs:grid-cols-1  xs:grid xs:grid-cols-1 bg-DarkBlue1  md:pb-0 ">
        <div className="image-block ">
          <img
            src="./images/illustration-intro.png"
            alt="intro illustration"
            className="mx-auto hover:hue-rotate-180 "
          />
        </div>
        <div className="text-block px-2 md:w-[30rem] mx-auto z-20">
          <h1 className="font-bold py-5 text-center xxs:text-xl  md:text-2xl font-secondary">
            {" "}
            All your files in one secure location, accessible anywhere.
          </h1>
          <p className="text-center text-slate-300 py-2 xxs:text-sm">
            {" "}
            Fylo stores all your most important files in one secure location.
            Access them wherever you need, share and collaborate with friends
            family, and co-workers.
          </p>
          <div>
            {" "}
            <button
              className="my-4 font-bold rounded-3xl bg-gradient-to-r from-Cyan to-Blue
         xxs:py-2 w-[60%] block
          mx-auto text-center text-sm 
          hover:opacity-70
          "
            >
              {" "}
              Get Started
            </button>
          </div>
        </div>
      </section>

      <Features />
      <StayProductive />
    </>
  );
};

export default Hero;
