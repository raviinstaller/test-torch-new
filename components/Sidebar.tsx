"use client";
import NavItem from "@/components/NavItem";
import {
  PlusIcon,
  HomeIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/solid";

import Image from "next/image";
import { useState } from "react";
import NewTestForm from "./NewTestForm";

export default function Sidebar() {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="fixed top-0 border-e border-slate-200 bg-white h-screen p-4 flex flex-col items-center z-10">
        <div className="mb-10 h-12 w-12">
          <Image src={"/logoIcon.svg"} height={42} width={42} alt="logo" />
        </div>
        <div className="flex gap-4 flex-col w-full grow">
          <button
            onClick={openModal}
            className="flex items-center justify-center aspect-square w-full rounded-full bg-blue-50 hover:bg-blue-100 transition-all"
          >
            <PlusIcon height={24} width={24} className="text-blue-600" />
          </button>
          <NavItem Icon={HomeIcon} active />
          <NavItem Icon={DocumentTextIcon} />
          <div className="flex grow items-end">
            <NavItem Icon={QuestionMarkCircleIcon} />
          </div>
        </div>
      </div>
      <NewTestForm closeModal={closeModal} isOpen={isOpen} />
    </>
  );
}
