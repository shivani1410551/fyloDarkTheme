const Features = () => {
  return (
    <>
      {" "}
      <section className="curves bg-DarkBlue1 flex justify-center md:-mt-[15rem] -z-10 ">
        <img
          src="./images/bg-curvy-mobile.svg"
          alt="mobile -bg"
          className="xs:hidden w-full"
        />
        <img
          src="./images/bg-curvy-desktop.svg"
          alt="desktop -bg"
          className="xs:block w-full"
        />
      </section>
      <section
        className="section-features mx-auto xxs:p-4
    xs:p-6 sm:p-8 md:p-10 xxs:grid xxs:grid-cols-1 text-slate-200 my-4  bg-DarkBlue2 xxs:grid-rows-4 xs:gap-y-4
    md:grid-cols-2 md:grid-rows-2  items-center
    "
      >
        <div className="feature-block-1 feature-block">
          <img
            src="./images/icon-access-anywhere.svg"
            alt="icon access anywhere"
            className="img"
          />
          <h2 className="heading ">Access your files, anywhere </h2>
          <p className="para ">
            The ability to use a smartphone, tablet, or computer to access your
            account means your files follow you everywhere.
          </p>
        </div>
        <div className="feature-block-2 feature-block">
          <img
            src="./images/icon-security.svg"
            alt="icon security"
            className="img"
          />
          <p className="heading"> Security you can trust</p>
          <p className="para">
            2-factor authentication and user-controlled encryption are just a
            couple of the security features we allow to help secure your files.
          </p>
        </div>
        <div className="feature-block-3 feature-block">
          <img
            src="./images/icon-collaboration.svg"
            alt="icon-collaboration"
            className="img "
          />
          <p className="heading">Real-time collaboration </p>
          <p className="para">
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.{" "}
          </p>
        </div>
        <div className="feature-block-4 feature-block">
          <img
            src="./images/icon-any-file.svg"
            alt="icon files"
            className="img"
          />
          <p className="heading">Store any type of file </p>
          <p className="para">
            Whether you're sharing holidays photos or work documents, Fylo has
            you covered allowing for all file types to be securely stored and
            shared.
          </p>
        </div>
      </section>
    </>
  );
};

export default Features;
