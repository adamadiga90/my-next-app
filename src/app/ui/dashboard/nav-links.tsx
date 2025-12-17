"use client";
import React from "react";
import {
  UserGroupIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from "@heroicons/react/24/outline";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/dashboard", icon: HomeIcon },
  {
    name: "Invoices",
    href: "/dashboard/invoices",
    icon: DocumentDuplicateIcon,
  },
  { name: "Customers", href: "/dashboard/customers", icon: UserGroupIcon },
];

const NavLinks = () => {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;

        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "h-[48px] gap-2 rounded-md flex justify-centre items-center  grow p-3 ",
              "text-sm font-medium hover:bg-sky-100 hover:text-blue-600 ",
              pathname === link.href
                ? "bg-sky-100 text-blue-600 border"
                : "bg-gray-50 "
            )}
          >
            <LinkIcon className="h-6" />
            <p>{link.name}</p>
          </Link>
        );
      })}
    </>
  );
};

export default NavLinks;
