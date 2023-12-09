"use client";

import Loader from "@/components/Loader";
import Checkbox from "@/components/form/Checkbox";
import TextField from "@/components/form/TextField";
import { UserAuth } from "@/context/AuthContext";
import Image from "next/image";
import Link from "next/link";

export default function Login() {
  const { googleSignIn, status, googleSignOut } = UserAuth();

  return (
    <>
      {status === "loading" && <Loader />}
      <div className="flex min-h-screen bg-white">
        <div className="hidden xl:block grow w-1/2 overflow-hidden">
          <Image
            src={"/login_bg.png"}
            height={810}
            width={1200}
            alt="person using laptop"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="grow xl:w-1/2 flex items-center justify-center p-10 xl:p-32">
          <div className="flex flex-col gap-12 w-full max-w-md">
            <div className="flex flex-col gap-2">
              <h1 className="text-2xl 2xl:text-3xl font-bold text-slate-950 text-center">
                Login to your account
              </h1>
              <p className="text-sm 2xl:text-base text-slate-500 text-center">
                Welcome back! Please enter your details.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <TextField
                label="Username"
                placeholder="Enter your username"
                type="text"
                disabled
              />
              <TextField
                label="Password"
                placeholder="Enter your password"
                type="password"
                disabled
              />
              <div className="flex justify-between">
                <Checkbox label="Remember me" />
                <Link
                  href={"#"}
                  className="text-sm 2xl:text-base text-slate-500 hover:text-blue-600"
                >
                  Forgot password?
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-4 w-full items-center">
              <button
                className="text-sm 2xl:text-base font-semibold px-5 py-3 rounded-md w-full bg-blue-600 text-white hover:bg-blue-500 cursor-not-allowed"
                disabled
              >
                Login
              </button>
              <span className="text-sm 2xl:text-base text-slate-500">OR</span>
              <button
                onClick={googleSignIn}
                className="flex justify-center gap-2 text-sm 2xl:text-base px-5 py-3 rounded-md w-full text-slate-500 hover:bg-slate-100 border border-slate-200"
              >
                <Image
                  src={"/google.svg"}
                  height={24}
                  width={24}
                  alt="google icon"
                />
                Login with Google
              </button>
              <p className="text-sm 2xl:text-base text-slate-500">
                Don't have an account?{" "}
                <button
                  onClick={googleSignIn}
                  className="text-blue-600 underline hover:no-underline"
                >
                  Sign up
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
