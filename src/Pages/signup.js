// src/pages/SignUp.jsx
import { useState } from "react";
import { supabase } from "../components/login/supabaseClient";
import { useNavigate } from "react-router-dom";
import Image from "../components/login/logo.png";
import { Link } from "react-router-dom";
export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,

      options: {
        data: {
          name: name,
          lastName: lastName,
        },
      },
    });

    if (error) {
      setError(error.message);
    } else {
      setMessage("ثبت‌نام انجام شد. لطفاً ایمیل خود را برای تأیید بررسی کنید.");

      navigate("/login");
    }
  };

  return (
    <form
      className="flex flex-col justify-center mt-20 text-center w-80 h-[480px] items-center gap-4 ml-auto mr-auto rounded-xl  shadow-2xl "
      onSubmit={handleSignUp}
    >
      <img
        className="w-20 h-20 ml-auto mr-auto relative top-[-20px] "
        src={Image}
      />
      <h2 className="text-primary relative top-[-48px]">
        ساخت حساب در <span className="text-orange">چارسوق</span>
      </h2>

      {error && <p style={{ color: "red" }}>{error}</p>}
      {message && <p style={{ color: "green" }}>{message}</p>}

      <input
        className="rounded-md border-[2px] border-black text-center w-60 h-10 relative top-[-40px] bg-white"
        type="text"
        placeholder="نام"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        className="rounded-md border-[2px] border-black text-center w-60 h-10 relative top-[-40px] bg-white"
        type="text"
        placeholder="نام خانوادگی"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />

      <input
        className="rounded-md border-[2px] border-black text-center w-60 h-10 relative top-[-40px] bg-white"
        type="email"
        placeholder="ایمیل خود را وارد کنید"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        className=" relative top-[-35px] rounded-md border-[2px] border-black text-center w-60 h-10 bg-white"
        type="password"
        placeholder="رمز خود را وراد کنید"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button
        className="bg-orange w-52 h-10 text-white text-center rounded-md shadow-orange shadow-md relative top-[-20px] "
        type="submit"
      >
        ثبت‌نام
      </button>
      <div className="flex flex-row gap-3">
        <Link className="w-24 cursor-pointer hover:text-orange " to="/login">
          صفحه ورود
        </Link>
        <Link className="w-24 cursor-pointer hover:text-orange " to="/">
          صفحه اصلی
        </Link>
      </div>
    </form>
  );
}
