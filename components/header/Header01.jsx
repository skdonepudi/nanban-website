import Link from "next/link";
import DarkMode from "../mode/DarkMode";
import { useRouter } from "next/router";
import { isChildrenPageActive } from "../../utils/daynamicNavigation";
import { useEffect, useState } from "react";
import Image from "next/image";
import nanban from "../../public/images/nanban.png";
import nanbanWhite from "../../public/images/Nanbanwhite.png";

export default function Header01() {
  const [toggle, setToggle] = useState(false);

  // window resize
  useEffect(() => {
    const resize = () => {
      if (window.innerWidth >= 1024) {
        setToggle(false);
      }
    };
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
    };
  });

  const route = useRouter();

  return (
    <>
      {/* main desktop menu sart*/}
      <header className="js-page-header fixed top-0 z-20 w-full backdrop-blur transition-colors">
        <div className="flex items-center px-6 py-2 xl:px-24 ">
          <Link href="/">
            <div className="flex items-start space-x-3 hover:cursor-pointer">
              <a className="hidden dark:block">
                <Image
                  src={nanbanWhite}
                  height={45}
                  width={45}
                  alt="Selah Earth foundation logo"
                  className="rounded-full"
                />
              </a>
              <a className="dark:hidden">
                <Image
                  src={nanban}
                  height={45}
                  width={45}
                  alt="Selah Earth foundation logo"
                  className="rounded-full"
                />
              </a>
              <div className="text-3xl font-bold">Selah Earth Foundation</div>
            </div>
          </Link>

          <div className="js-mobile-menu dark:bg-jacarta-800 py-4 invisible fixed inset-0 z-10 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:flex lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent">
            <nav className="navbar w-full">
              <ul className="flex flex-col lg:flex-row">
                <li className="group">
                  <Link href="/about">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/about")
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          About Us
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/work")
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          Our Work
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/donate")
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          Donate
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>
                <li className="group">
                  <Link href="#">
                    <a>
                      <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                        <span
                          className={
                            isChildrenPageActive(route.asPath, "/contact")
                              ? "text-accent dark:text-accent"
                              : ""
                          }
                        >
                          Contact
                        </span>
                      </button>
                    </a>
                  </Link>
                </li>
              </ul>
            </nav>

            <div className="ml-8 hidden items-center lg:flex xl:ml-12">
              <DarkMode />
            </div>
          </div>

          <div className="ml-auto flex lg:hidden">
            <DarkMode />
            <button
              className="js-mobile-toggle border-jacarta-100 hover:bg-accent dark:hover:bg-accent focus:bg-accent group ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
              aria-label="open mobile menu"
              onClick={() => setToggle(true)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width={24}
                height={24}
                className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
              >
                <path fill="none" d="M0 0h24v24H0z" />
                <path d="M18 18v2H6v-2h12zm3-7v2H3v-2h18zm-3-7v2H6V4h12z" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`lg:hidden js-mobile-menu dark:bg-jacarta-800 invisible fixed inset-0 z-20 ml-auto items-center bg-white opacity-0 lg:visible lg:relative lg:inset-auto lg:bg-transparent lg:opacity-100 dark:lg:bg-transparent ${
          toggle ? "nav-menu--is-open" : "hidden"
        }`}
      >
        <div className="t-0 dark:bg-jacarta-800 fixed left-0 z-10 flex w-full items-center justify-between bg-white p-6 lg:hidden">
          <div
            className="max-h-7 h-auto text-2xl font-bold"
            onClick={() => setToggle(false)}
          >
            <Link href="/">Selah Earth Foundation</Link>
          </div>

          <button
            className="js-mobile-close border-jacarta-100 hover:bg-accent focus:bg-accent group dark:hover:bg-accent ml-2 flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-colors hover:border-transparent focus:border-transparent dark:border-transparent dark:bg-white/[.15]"
            onClick={() => setToggle(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width={24}
              height={24}
              className="fill-jacarta-700 h-4 w-4 transition-colors group-hover:fill-white group-focus:fill-white dark:fill-white"
            >
              <path fill="none" d="M0 0h24v24H0z" />
              <path d="M12 10.586l4.95-4.95 1.414 1.414-4.95 4.95 4.95 4.95-1.414 1.414-4.95-4.95-4.95 4.95-1.414-1.414 4.95-4.95-4.95-4.95L7.05 5.636z" />
            </svg>
          </button>
        </div>
        {/* mobile menu top header content */}

        <nav className="navbar w-full">
          <ul className="mt-32 flex flex-col lg:flex-row">
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/about">
                <a>
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("/about", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      About Us
                    </span>
                  </button>
                </a>
              </Link>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/work">
                <a>
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("/work", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Our Work
                    </span>
                  </button>
                </a>
              </Link>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/donate">
                <a>
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("/donate", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Donate
                    </span>
                  </button>
                </a>
              </Link>
            </li>
            <li className="group" onClick={() => setToggle(false)}>
              <Link href="/contact">
                <a>
                  <button className="text-jacarta-700 font-display hover:text-accent focus:text-accent dark:hover:text-accent dark:focus:text-accent flex items-center justify-between py-3.5 text-base dark:text-white lg:px-5">
                    <span
                      className={
                        isChildrenPageActive("/contact", route.asPath)
                          ? "text-accent dark:text-accent"
                          : ""
                      }
                    >
                      Contact
                    </span>
                  </button>
                </a>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
