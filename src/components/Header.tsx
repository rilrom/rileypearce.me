'use client';

// Dependencies
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Home", href: "/" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="min-h-full px-4 border-b border-nav">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href="/" className="flex items-center rounded-full">
                  <Image
                    src="/images/logo-light.png"
                    alt="Portfolio logo"
                    width={32}
                    height={32}
                  />
                </Link>
              </div>
              <div className="hidden xs:block">
                <div className="ml-10 flex justify-end items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className={classNames(
                      pathname === item.href
                        ? "bg-zinc-800 text-white"
                        : "text-light hover:bg-zinc-800 hover:text-white",
                      "px-3 py-2 rounded-md font-medium transition-all"
                    )}
                      aria-current={
                        pathname === item.href ? "page" : undefined
                      }>
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex xs:hidden">
                <Disclosure.Button className="bg-zinc-800 inline-flex items-center justify-center p-2 rounded-md text-light hover:text-white hover:bg-zinc-800 transition-all">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel>
              {({ close }) => (
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href} className={classNames(
                      pathname === item.href
                        ? "bg-zinc-800 text-white"
                        : "text-light hover:bg-zinc-800 hover:text-white",
                      "block px-4 py-2 rounded text-base font-medium transition-all"
                    )}
                      aria-current={
                        pathname === item.href ? "page" : undefined
                      }
                      onClick={() => close()}>
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    </div>
  );
}
