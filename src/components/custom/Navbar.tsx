
"use client";
import React, { useState } from "react";
import SocialLogin from "./SocialLogin";

export default function Navbar() {


  return (
    <div className="flex justify-between items-center w-full p-4 bg-white relative">
      <div className="text-2xl font-bold">Omiyt</div>
      <div>
          <SocialLogin />
      </div>
    </div>
  );
}
