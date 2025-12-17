import { GlobeAltIcon } from "@heroicons/react/16/solid";
import { lusitana } from "../layout";

export default function AdamLogo() {
  return (
    <div className="flex items-center text-white ">
      <GlobeAltIcon className="w-12 h-12 rotate-[16deg] " />
      <p className={`font-bold text-2xl ${lusitana.className}`}>Adam</p>
    </div>
  );
}
