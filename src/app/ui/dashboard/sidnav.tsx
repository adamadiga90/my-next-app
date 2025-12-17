import Link from "next/link";
import React from "react";
import AdamLogo from "../adam-logo";
import { PowerIcon } from "@heroicons/react/16/solid";
import NavLinks from "./nav-links";

const SideNav = () => {
  return (
    <div className="flex flex-col h-full py-4 md:px-2 ">
      <Link
        href="/"
        className="mb-2 flex bg-blue-600 rounded-lg h-20 md:h-40 p-4 justify-start items-end"
      >
        <div className="w-32 md:w-40">
          <AdamLogo />
        </div>
      </Link>
      <div>
        <NavLinks />
        <div className="h-20 bg-gray-300 flex justify-start items-center p-4 rounded-2xl">
          <form>
            <button className="flex items-center justify-center">
              <PowerIcon width={35} height={35} />
              <div>Sign out</div>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SideNav;
