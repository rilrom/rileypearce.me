// Dependencies
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Projects", href: "/projects" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Header() {
  const router = useRouter();

  return (
    <div className="min-h-full px-4 border-b border-nav">
      <Disclosure as="nav">
        {({ open }) => (
          <>
            <div className="flex items-center justify-between h-16">
              <div className="flex-shrink-0">
                <Link href="/">
                  <a className="flex items-center rounded-full">
                    <Image
                      src="/images/logo-light.png"
                      alt="Portfolio logo"
                      width={32}
                      height={32}
                    />
                  </a>
                </Link>
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex justify-end items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          router.asPath === item.href
                            ? "bg-zinc-800 text-white"
                            : "text-light hover:bg-zinc-800 hover:text-white",
                          "px-3 py-2 rounded-md font-medium transition-all"
                        )}
                        aria-current={
                          router.asPath === item.href ? "page" : undefined
                        }
                      >
                        {item.name}
                      </a>
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex md:hidden">
                <Disclosure.Button className="bg-zinc-800 inline-flex items-center justify-center p-2 rounded-md text-light hover:text-white hover:bg-zinc-800 transition-all">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
            </div>

            <Disclosure.Panel>
              {({ close }) => (
                <div className="pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Link key={item.name} href={item.href}>
                      <a
                        className={classNames(
                          router.asPath === item.href
                            ? "bg-zinc-800 text-white"
                            : "text-light hover:bg-zinc-800 hover:text-white",
                          "block px-4 py-2 rounded text-base font-medium transition-all"
                        )}
                        aria-current={
                          router.asPath === item.href ? "page" : undefined
                        }
                        onClick={() => close()}
                      >
                        {item.name}
                      </a>
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
