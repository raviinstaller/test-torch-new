"use client";

import Loader from "@/components/Loader";
import { UserAuth } from "@/context/AuthContext";
import { useLayoutEffect } from "react";

export default function Logout() {
  const { googleSignOut } = UserAuth();

  useLayoutEffect(() => {
    const timer = setTimeout(() => {
      googleSignOut();
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Loader title="Securly logging out" />
    </>
  );
}
