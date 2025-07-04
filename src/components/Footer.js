import React from "react";
import { Link } from "react-router-dom";
import footer from "../Images/footer.png";
import socialMedia from "../Images/Social media.png";
function Footer() {
  return (
    <div>
      <img
        className="w-full xl:h-32 h-24 relative xl:top-[1000px] top-[1400px]"
        src={footer}
        alt="footer"
      />
      <h2 className="text-center xl:text=lg font-semibold text-white relative xl:top-[900px] top-[1320px]">
        صفحات
      </h2>
      <ul className="flex flex-row gap-6 text-sm xl:gap-24 xl:text-lg justify-center text-white text-center items-center relative top-[1330px] xl:top-[920px]">
        <Link to="/Articles">
          {" "}
          <li>مقالات</li>
        </Link>
        <Link to="/ContactUs">
          {" "}
          <li>تماس با ما</li>
        </Link>
        <Link to="/AboutUs">
          {" "}
          <li>درباره ما</li>
        </Link>
        <Link to="/Shop">
          {" "}
          <li>محصولات</li>
        </Link>
        <Link to="/">
          <li>خانه</li>
        </Link>
        <Link to="https://github.com/Abolfazl-15">
          {" "}
          <img className="hidden md:block" src={socialMedia} />
        </Link>
      </ul>
    </div>
  );
}

export default Footer;
