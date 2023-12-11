"use client";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/solid";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { UserAuth } from "@/context/AuthContext";
import Loader from "./Loader";
import MenuDropdown from "./MenuDropdown";

export default function TopBar() {
  const { status, googleSignOut, user } = UserAuth();

  const menuItems = [
    [
      { title: "My Account", link: "", disabled: true },
      { title: "Notifications", link: "", disabled: true },
    ],
    [
      { title: "Subscriptions", link: "", disabled: true },
      { title: "Settings", link: "", disabled: true },
    ],
    [{ title: "Log out", link: "/logout", disabled: false }],
  ];

  return (
    <>
      {status === "loading" && <Loader />}
      <div className="sticky top-0 h-16 border-b border-slate-200 py-4 px-5 flex justify-end sm:justify-between bg-slate-100 z-[1]">
        <label htmlFor="search" className="sm:flex items-center gap-2 hidden">
          <MagnifyingGlassIcon
            height={24}
            width={24}
            className="text-slate-400"
          />
          <input
            id="search"
            type="text"
            placeholder="Search for anything here"
            className="text-sm 2xl:text-base bg-transparent focus:outline-0 placeholder:text-slate-400 text-slate-800 outline-0 border-0 focus:ring-0          "
          />
        </label>
        <div className="flex gap-6">
          <button className="flex items-center justify-center aspect-square rounded-full hover:bg-white transition-all">
            <BellIcon height={24} width={24} className="text-slate-400" />
          </button>
          <MenuDropdown list={menuItems}>
            <div className="flex items-center">
              <Image
                src={user?.photoURL ? user.photoURL : "/profile.png"}
                height={32}
                width={32}
                alt="user profile"
                className="rounded-full"
              />
              <span className="text-sm 2xl:text-base font-medium text-slate-500 ps-2 pe-4">
                {user?.displayName}
              </span>
              <ChevronDownIcon
                height={24}
                width={24}
                className="text-slate-400"
              />
            </div>
          </MenuDropdown>
        </div>
      </div>
    </>
  );
}
