import React from "react";
import contact from "../Images/contact.jpg";
import whatsapp from "../Images/whats.png";
import insta from "../Images/insta.png";
import tel from "../Images/tel.png";
import Nav from "../components/nav";
import MobileSidebar from "../components/sidebar";
import Footer from "../components/Footer";
function ContactUs() {
  return (
    <div>
      <Nav />
      <MobileSidebar />
      <img src={contact} alt="ContactUs" className="ml-auto mr-auto" />
      <div className="bg-gray-200 xl:w-80 w-64 h-56 relative xl:-top-[690px] xl:left-52 left-[50px] rounded-md flex flex-col gap-3 text-center justify-center">
        <h3 className="text-gray-400 font-bold relative -top-4 left-8">
          تماس با پشتیبانی ها
        </h3>
        <p className="text-gray-400 font-bold">پشتیبانی اول 021 111 432 11</p>
        <p className="text-gray-400 font-bold">پشتیبانی دوم 021 111 433 11</p>
        <p className="text-gray-400 font-bold">پشتیبانی سوم 021 111 434 11</p>
      </div>
      <div className="bg-gray-200 xl:w-80 w-64 h-56 relative xl:-top-[620px] top-32 xl:left-[665px] left-[50px] rounded-md flex flex-col gap-3 text-center justify-center">
        <h3 className="text-gray-400 font-bold relative top-2 text-center">
          راه های ارتباطی ما
        </h3>
        <div className="flex flex col gap-2 ml-4">
          <img src={insta} />
          <p className=" text-gray-400 font-bold relative top-[12px]">
            Charsogh
          </p>
        </div>
        <div className="flex flex col gap-2 ml-2">
          <img src={tel} />
          <p className=" text-gray-400 font-bold relative top-[12px]">
            @Dark-2050
          </p>
        </div>{" "}
        <div className="flex flex col gap-2 ml-4">
          <img src={whatsapp} />
          <p className=" text-gray-400 font-bold relative top-[12px]">
            0921 477 4568
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ContactUs;
