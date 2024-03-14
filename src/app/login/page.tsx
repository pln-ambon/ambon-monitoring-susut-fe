"use client";
import Image from "next/image";

import LoginForm from "@/components/pages/login/login_form"
import Logo from "@/components/icon/pln.png"

export default function Login() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center text-sm">
        <div
          className="flex flex-1 mx-auto max-w-md bg-white p-6 h-screen items-center overflow-auto"
        >
          <div className="w-full">
            <div className="flex flex-col justify-center items-center font-bold text-xl text-main">
              <Image className="h-44 w-32" src={Logo} alt="PLN Logo" />

              MONITORING SISTEM KELISTRIKAN
              <span className="text-center text-base">
              PT PLN (Persero) UIW Maluku & Maluku Utara
              </span>
            </div>
            <LoginForm /> 
            <div className="mt-16 text-gray-400 text-xs text-center">
              Copyright PT PLN(Persero) UP3B Maluku
            </div>
          </div>
        </div>
      </div>
  );
}
