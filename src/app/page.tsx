import React from "react";
import AdamLogo from "./ui/adam-logo";
import Image from "next/image";

const page = () => {
  return (
    <main className="flex min-h-screen flex-col gap-6">
      <div className=" flex h-20 shrink-0 items-end rounded-lg p-4 md:h-52 bg-blue-500 ">
        <AdamLogo />
      </div>
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
          <div className="relative w-0 h-0 border-l-[15px] border-r-[15px] border-b-[25px] border-l-transparent border-r-transparent" />
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal `}>
            welcome to ADAM network, your website, my website,{" "}
            <strong className="uppercase text-blue-500 bg-gray-300 p-2 rounded-[5px]">
              Our website
            </strong>
          </p>
        </div>
        <div className="flex items-center justify-center p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
            src="/public/hero-desktop.png"
            width={1000}
            height={760}
            className="hidden md:block"
            alt="screen shot of desktop version"
          />
          <Image
            src="/public/hero-mobile.png"
            width={560}
            height={620}
            className="md:hidden block"
            alt="screen shot of mobile version"
          />
        </div>
      </div>
    </main>
  );
};

export default page;
