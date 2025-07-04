import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

export default function MobileSidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="md:hidden">
      {" "}
      {/* فقط در موبایل نمایش داده می‌شود */}
      {/* دکمه باز/بستن */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-2 bg-orange text-white rounded-lg shadow-lg hover:shadow-lg hover:shadow-orange "
      >
        {isOpen ? <X /> : <Menu />}
      </button>
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-md z-40 text-center transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="p-4 text-lg font-bold border-b text-white">منو</div>
        <ul className="p-4 space-y-4 flex flex-col">
          <Link to="/">
            <li className="text-primary hover:text-orange">خانه</li>
          </Link>
          <Link to="AboutUs">
            {" "}
            <li className="text-primary hover:text-orange">درباره ما</li>
          </Link>
          <Link to="/Articles">
            {" "}
            <li className="text-primary hover:text-orange">مقالات</li>
          </Link>
          <Link to="/ContactUs">
            <li className="text-primary hover:text-orange">تماس با ما</li>
          </Link>
        </ul>
        <button className="rounded-md text-center bg-orange cursor-pointer w-[152px] h-[52px] relative top-0 left-0 text-white  md:top-[45px] md:left-[1120px]">
          <Link to="/login">ورورد</Link>
        </button>
      </div>
      {/* بک‌گراند تیره زمانی که سایدبار باز است */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30"
          onClick={toggleSidebar}
        />
      )}
    </div>
  );
}
