const Navbar = () => {
  return (
    <header
      className="mx-auto xxs:p-4
    xs:p-6 sm:p-8 md:p-10
    text-slate-200
    flex items-center justify-between
    bg-DarkBlue1
    "
    >
      <a href="#">
        {" "}
        <img
          src={"./images/logo.svg"}
          alt="nav logo"
          className="xxs:h-6  
        sm:h-8 md:h-10"
        />
      </a>
      <ul
        className="flex xxs:space-x-4 xxs:text-xs md:text-base md:space-x-10
       sm:text-sm sm:space-x-8"
      >
        <li className="hover:text-white hover:underline">
          {" "}
          <a href="#">Features</a>
        </li>
        <li className="hover:text-white hover:underline">
          {" "}
          <a href="#">Team </a>
        </li>
        <li className="hover:text-white hover:underline">
          {" "}
          <a href="#">Sign In</a>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;
