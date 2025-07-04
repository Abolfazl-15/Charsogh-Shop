import React from "react";
import Aboutus from "../Images/about.jpg";
import Footer from "../components/Footer";
import MobileSidebar from "../components/sidebar";
import Nav from "../components/nav";
function AboutUs() {
  return (
    <div>
      <Nav />
      <MobileSidebar />
      <img src={Aboutus} alt="AboutUs" className="mr-auto ml-auto" />
      <p className="text-gray-400 xl:w-96 w-80 text-center relative text-md xl:left-[650px] left-6 xl:-top-40 xl:text-lg">
        <span className="text-orange">فروشگاه چارسوق</span> یکی از بزرگترین
        فروشگاه های حال حاضر داخل ایران است که در ان انواع مدل لباس های زنانه و
        نیز وجود دارد و می توانید در این فروشگاه انواع لباس های زنانه و مردانه
        با مدل های جدید ، کت و شلوار های مردانه نیز وجود دارد و حتی می توانید به
        صورت غیر حضوری از طریق وب سایت ما نیز خرید کنید و یا می توانید از طریق
        حضوری به فروشگاه ما مراجعه کنید و خرید های خود را انجام دهید و پرسنل
        حرفه ای ما از شما استقبال خواهندکرد
      </p>

      <Footer />
    </div>
  );
}

export default AboutUs;
