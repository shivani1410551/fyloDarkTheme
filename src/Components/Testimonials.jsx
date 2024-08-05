const Testimonials = () => {
  return (
    <section
      className="section-testimonials bg-DarkBlue2 mx-auto xxs:p-4
    xs:p-6 sm:p-8 md:p-10 grid xxs:grid-cols-1 text-slate-200 my-4 
    md:mb-[10rem]
    "
    >
      <img
        src="./images/bg-quotes.png"
        alt="bg-quotes"
        className="absolute xxs:h-6 left-8"
      />
      <div className="card-block relative font-primary md:grid  md:grid-cols-3 md:grid-rows-1">
        <div className="card-1 bg-DarkBlue4 mx-2 my-6 rounded-lg p-4">
          <p className="xxs:p-2 xxs:text-xs md:p-4 md:text-sm">
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="satish flex items-center space-x-3 px-2 py-1">
            <img
              src="./images/profile-1.jpg"
              alt="satish"
              className="h-10 w-10 rounded-full"
            />
            <div className="font-secondary">
              <h3 className="text-sm leading-tight font-bold"> Satish Patel</h3>
              <h4 className="text-xs pt-[0.8 rem]"> Founder & CEO, Huddle</h4>
            </div>
          </div>
        </div>

        <div className="card-2 bg-DarkBlue4 mx-2 my-6 rounded-lg p-4">
          <p className="xxs:p-2 xxs:text-xs md:p-4 md:text-sm">
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="Bruce McKenzie  flex items-center space-x-3 px-2 py-1">
            <img
              src="./images/profile-2.jpg"
              alt=" Bruce McKenzie "
              className="h-10 w-10 rounded-full"
            />
            <div className="font-secondary">
              <h3 className="text-sm leading-tight font-bold">
                {" "}
                Bruce McKenzie{" "}
              </h3>
              <h4 className="text-xs pt-[0.8 rem]"> Founder & CEO, Huddle</h4>
            </div>
          </div>
        </div>

        <div className="card-3 bg-DarkBlue4 mx-2 my-6 rounded-lg p-4">
          <p className="xxs:p-2 xxs:text-xs md:p-4 md:text-sm">
            {" "}
            Fylo has improved our team productivity by an order of magnitude.
            Since making the switch our team has become a well-oiled
            collaboration machine.
          </p>
          <div className="Iva Boyd  flex items-center space-x-3 px-2 py-1">
            <img
              src="./images/profile-3.jpg"
              alt="Iva Boyd "
              className="h-10 w-10 rounded-full"
            />
            <div className="font-secondary">
              <h3 className="text-sm leading-tight font-bold"> Iva Boyd </h3>
              <h4 className="text-xs pt-[0.8 rem]"> Founder & CEO, Huddle</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
