import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "../components/login/supabaseClient";
import Image from "../Images/logo.png";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const { data } = await supabase.auth.getUser();
      if (!data?.user) {
        navigate("/login");
      } else {
        setUser(data.user);
      }
    };
    checkUser();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/login");
  };

  return (
    <div className="flex flex-col text-start gap-6 justify-center shadow-2xl w-80 h-[550px] md:w-[600px] items-center rounded-md ml-auto mr-auto mt-10">
      <img src={Image} className="w-24 h-24 relative top-[-30px]" />
      <h2 className="relative top-[-70px]">به صفحه داشبورد خوش آمدید</h2>
      <div className="w-14 h-14 border-[1px] border-black rounded-full relative top-[-80px]">
        <FontAwesomeIcon
          icon={faUser}
          className="w-11 h-11 relative left-[5px] top-1"
        />
      </div>

      {user && (
        <h2 className="relative top-[-85px]">
          {" "}
          نام: {user.user_metadata.name}
        </h2>
      )}
      {user && (
        <h2 className="relative top-[-85px]">
          نام خانوادگی: {user.user_metadata.lastName}
        </h2>
      )}
      {user && (
        <h2 className="relative top-[-85px]">
          {user.user_metadata.email} :ایمیل
        </h2>
      )}

      <div className="flex flex-row gap-10 relative top-10">
        <Link to="/cart">
          <FontAwesomeIcon className="w-8 h-8" icon={faShoppingCart} />
        </Link>
        <Link to="/">
          <FontAwesomeIcon className="w-8 h-8" icon={faHome} />
        </Link>
        <Link to="/books">
          <FontAwesomeIcon className="w-8 h-8" icon={faBook} />
        </Link>
      </div>
      <button
        className="bg-orange w-52 h-10 text-white text-center rounded-md shadow-orange shadow-md relative top-[-100px] "
        onClick={handleLogout}
      >
        خروج
      </button>
    </div>
  );
}
