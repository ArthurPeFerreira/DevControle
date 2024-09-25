"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { FiLoader, FiLogIn, FiLogOut, FiUser } from "react-icons/fi";

export function Navbar() {
  const { status, data } = useSession();

  async function handleLogin() {
    await signIn();
  }

  async function handleLogout() {
    await signOut();
  }

  return (
    <header className="w-full flex items-center px-2 py-4 bg-white h-20 shadow-md">
      <div className="w-full flex items-center justify-between max-w-7xl mx-auto">
        <Link href="/">
          <h1 className="font-bold text-2xl hover:tracking-wide duration-300">
            <span className="text-blue-500">DEV</span> CONTROLE
          </h1>
        </Link>

        <div className="flex flex-row gap-4">
          {status === "loading" && (
            <FiLoader size={26} color="#4b5563" className="animate-spin" />
          )}
          {status === "authenticated" && (
            <>
              <Link href="/dashboard">
                <FiUser size={26} color="#4b5563" />
              </Link>
              <button onClick={handleLogout}>
                <FiLogOut size={26} color="#4b5563" />
              </button>
            </>
          )}{" "}
          {status === "unauthenticated" && (
            <>
              <button onClick={handleLogin}>
                <FiLogIn size={26} color="#4b5563" />
              </button>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
