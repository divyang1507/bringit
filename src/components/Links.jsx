'use client';
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Links = () => {
    const pathname = usePathname();
  const links = [
    {
      title: "Home",
      path: "/",
    },
    {
      title: "Products",
      path: "/products",
    },
    {
      title: "About",
      path: "/about",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ];
  return (
    <div>
      {links.map((e =>(
        <Link  className={`${pathname === e.path? "bg-red-400" : "bg-yellow-400" }`} href={e.path} key={e.title}> {e.title}</Link>
      )))}
    </div>
  );
};

export default Links;
