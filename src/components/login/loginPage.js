import React, { useState } from "react";
import { supabase } from "./supabaseClient";
import { Link, useNavigate } from "react-router-dom";
import Image from "../login/logo.png";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!email || !password) {
      setError("ایمیل یا رمز عبور خالی است.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email.trim(),
      password,
    });

    if (error) {
      setError(error.message);
    } else {
      navigate("/dashboard");
      alert("✅حساب شما با موقعیت ثبت شد");
    }

    setLoading(false);
  };

  return (
    <form
      className="flex flex-col justify-center mt-28 text-center w-80 h-96 items-center gap-4 ml-auto mr-auto rounded-xl  shadow-2xl "
      onSubmit={handleLogin}
    >
      <img
        className="w-24 h-24 ml-auto mr-auto relative top-[-20px] "
        src={Image}
      />
      <h2 className="text-primary relative top-[-48px]">
        ثبت نام در <span className="text-orange">چارسوق</span>
      </h2>
      {error && <p className="text-red-600">{error}</p>}

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
        disabled={loading}
      >
        {loading ? "درحال ورود" : " ورود"}
      </button>
      <div className="flex flex-row gap-3">
        <Link className="w-24 cursor-pointer hover:text-orange " to="/signup">
          افزودن حساب
        </Link>
        <Link className="w-24 cursor-pointer hover:text-orange " to="/">
          صفحه اصلی
        </Link>
      </div>
    </form>
  );
}
