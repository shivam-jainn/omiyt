"use client";
import React, {useState} from "react";
import { Button } from "../ui/button";
import { useSession, signIn, signOut } from "@/lib/auth/client";

export default function SocialLogin() {
  const { data: session } = useSession();
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    setDropdownOpen(false);
  };

  if (session?.user) {
    return (
      <div className="relative">
        <button
          className="rounded-full border-2 border-gray-200 w-10 h-10 overflow-hidden focus:outline-none"
          onClick={() => setDropdownOpen((open) => !open)}
        >
          <img
            src={session.user.image || "/default-pfp.png"}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white border rounded shadow-lg z-10">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <Button
      className="rounded-full"
      onClick={() => signIn.social({ provider: "google" })}
    >
      Login with Google
    </Button>
  );
}
