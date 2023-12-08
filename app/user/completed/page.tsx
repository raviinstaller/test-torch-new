import React from "react";

import Image from "next/image";

const Completed = () => {
  return (
    <>
      <div className="flex min-h-screen bg-white">
        <div className="hidden xl:block grow w-1/2 overflow-hidden">
          <Image
            src={"/completed_bg.png"}
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
                Test Completed
              </h1>
              <p className="text-sm 2xl:text-base text-slate-500 text-center">
                Thankyou for giving test. Your teacher will provide you your
                result.
              </p>
            </div>

            <button className="text-sm 2xl:text-base font-semibold px-5 py-3 rounded-md w-full bg-blue-600 text-white hover:bg-blue-500">
              Logout & close window
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Completed;
