const Footer = () => {
  return (
    <footer
      className="bg-DarkBlue3 text-slate-100 mx-auto xxs:p-4
    xs:p-6 sm:p-8 md:p-10  
    relative
    md:pt-[10rem]
    xxs:mt-[10rem]
    xs:py-[20rem]
  "
    >
      <section className="section-footer pb-10   md:grid md:grid-cols-6 items-center gap-x-2 ">
        <a
          href="#"
          className="text-white xxs:p-4 inline-block xxs:pl-0 md:w-[100%]  "
        >
          <img src="./images/logo.svg" alt="footer logo" />
        </a>
        <div
          className="location 
          xxs:space-y-4
        md:col-start-1
        md:col-end-3

        "
        >
          <div className=" flex items-start xxs:pb-3 ">
            <img
              src="./images/icon-location.svg"
              alt="location"
              className="inline-block xxs:mr-2  h-full xxs:mt-2"
            />
            <p className="md:w-[300px] md:text-sm ">
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua{" "}
            </p>
          </div>
        </div>
        <div
          className="contact xxs:my-6
        md:items-center md:flex md:flex-col
        md:-mt-4
        md:space-y-2
        "
        >
          <div>
            <span className="xxs:mb-4">
              <img
                src="./images/icon-phone.svg"
                alt="phone"
                className="inline-block mr-4"
              />
              +1-543-123-4567
            </span>
          </div>
          <div>
            <span>
              <img
                src="./images/icon-email.svg"
                alt="=email"
                className="inline-block mr-2"
              />
              example@fylo.com
            </span>
          </div>
        </div>
        <div className="info flex flex-col xxs:space-y-4 md:items-center md:space-y-4 md:mt-6">
          <a href="" className="      hover:font-bold">
            About Us
          </a>
          <a href="" className="      hover:font-bold">
            Jobs
          </a>
          <a href="" className="      hover:font-bold">
            Press
          </a>
          <a href="" className="      hover:font-bold">
            Blog
          </a>
        </div>
        <div
          className="info xxs:flex xxs:flex-col xxs:space-y-4 xxs:my-4
       md:items-center
 
        "
        >
          <a href="" className="      hover:font-bold">
            Contact Us
          </a>
          <a href="" className="      hover:font-bold">
            Terms
          </a>
          <a href="" className="      hover:font-bold">
            Privacy
          </a>
        </div>

        <div className="social flex justify-center xxs:space-x-4 md:-mt-20">
          <a href="">
            <i className="fa-brands fa-facebook  hover:text-Cyan"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-twitter hover:text-Cyan"></i>
          </a>
          <a href="">
            <i className="fa-brands fa-instagram hover:text-Cyan"></i>
          </a>
        </div>
      </section>

      <section className="attribution">
        <p
          className="attribution  text-[11px]
        text-center text-White py-2
        "
        >
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by{" "}
          <a href="#" className="font-semibold underline">
            SHIVANI CHARAN
          </a>
          .
        </p>
      </section>
    </footer>
  );
};

export default Footer;
