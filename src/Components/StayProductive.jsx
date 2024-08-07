import React from "react";

const StayProductive = () => {
  return (
    <section
      className="section-stayProductive mx-auto xxs:p-4
    xs:p-6 sm:p-8 md:p-10 grid xxs:grid-cols-1 text-slate-200 my-4  
      md:grid-cols-2 
    md:items-center
"
    >
      <div className="img-block">
        {" "}
        <img
          src="./images/illustration-stay-productive.png"
          alt="stay productive"
          className="xxs:w-[90%] mx-[auto] xxs:my-4 hover:hue-rotate-180"
        />
      </div>
      <div className="text-block md:pr-24 md:pl-4">
        <h1 className="font-bold xxs:text-xl xxs:pt-2  md:text-3xl md:pr-24 ">
          {" "}
          Stay productive, wherever you are{" "}
        </h1>
        <p className=" py-2 text-sm my-2">
          Never let location be an issue when accessing your files. Fylo has you
          covered for all of your file storage needs.
        </p>
        <p className="py-2 text-sm my-2">
          Securely share files and folders with friends, family and colleagues
          for live collaboration. No email attachments required.
        </p>
        <a
          href="#"
          className="block  text-center  underline border-Cyan w-fit xxs:text-[0.85em] text-Cyan pb-[0.5rem] hover:text-white 
          underline-offset-8 hover:decoration-white"
        >
          {" "}
          See how Fylo works
          <img
            src="./images/icon-arrow.svg"
            alt="arrow"
            className="inline-block ml-[0.5rem] h-4 hover:text-white hover:opacity-50"
          />
        </a>
      </div>
    </section>
  );
};

export default StayProductive;
