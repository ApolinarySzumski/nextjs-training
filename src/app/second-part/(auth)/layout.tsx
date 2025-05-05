"use client";

import { nanoid } from "nanoid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

const navLinks = [
  { name: "Register", href: "/second-part/register" },
  { name: "Login", href: "/second-part/login" },
  { name: "Forgot Password", href: "/second-part/forgot-password" },
];

export default function AuthLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <>
      <div>
        {navLinks.map((link) => {
          const isActive =
            pathname === link.href ||
            (pathname.startsWith(link.href) && link.href !== "/");
          return (
            <div key={nanoid()}>
              <Link
                href={link.href}
                style={isActive ? { color: "green" } : { color: "blue" }}
              >
                {link.name}
              </Link>
            </div>
          );
        })}
      </div>
      <div>{children}</div>
    </>
  );
}
