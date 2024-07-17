"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [path, setPath] = useState("");

  const pathname = usePathname();

  useEffect(() => {
    setPath(pathname.split("/")[1]);
  }, [pathname]);
  return (
    <>
      <nav id="topnav" className="defaultscroll bg-[#0000004d] is-sticky">
        <div className="container relative">
          <div id="navigation">
            <ul className="navigation-menu justify-end">
              <li className="has-submenu parent-menu-item">
                <Link
                  className={
                    path == "" ? "sub-menu-item nav-active" : "sub-menu-item"
                  }
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  className={
                    path == "aboutme"
                      ? "sub-menu-item nav-active"
                      : "sub-menu-item"
                  }
                  href="/aboutme"
                >
                  About Me
                </Link>
              </li>

              <li>
                <Link
                  className={
                    path == "shop"
                      ? "sub-menu-item nav-active"
                      : "sub-menu-item"
                  }
                  href="/shop"
                >
                  Shop
                </Link>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link
                  className={
                    path == "portfolio-list"
                      ? "sub-menu-item nav-active"
                      : "sub-menu-item"
                  }
                  href="/portfolio-list"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  className={
                    path == "contactme"
                      ? "sub-menu-item nav-active"
                      : "sub-menu-item"
                  }
                  href="/contactme"
                >
                  Contact Me
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="responsive-nav">
        <nav
          className="absolute
          z-[9999999]
          bg-[#000000eb]
          flex flex-wrap
          items-center
          justify-between
          w-full
          py-4
          md:py-0
          px-4
          text-lg text-gray-700
        "
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="menu-button"
            className="h-6 w-6 z-[999] cursor-pointer md:hidden block text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() => {
              setShowMenu(!showMenu);
            }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
          {showMenu && (
            <div className="w-full md:flex md:items-center md:w-auto" id="menu">
              <ul
                className="
              pt-4
              text-base text-gray-700
              md:flex
              md:justify-between 
              md:pt-0"
              >
                <li className="has-submenu parent-menu-item py-3">
                  <Link
                    className={
                      path == "" ? "sub-menu-item nav-active" : "sub-menu-item"
                    }
                    href="/"
                  >
                    Home
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    className={
                      path == "aboutme"
                        ? "sub-menu-item nav-active"
                        : "sub-menu-item"
                    }
                    href="/aboutme"
                  >
                    About Me
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    className={
                      path == "shop"
                        ? "sub-menu-item nav-active"
                        : "sub-menu-item"
                    }
                    href="/shop"
                  >
                    Shop
                  </Link>
                </li>

                <li className="has-submenu parent-parent-menu-item py-3">
                  <Link
                    className={
                      path == "portfolio-list"
                        ? "sub-menu-item nav-active"
                        : "sub-menu-item"
                    }
                    href="/portfolio-list"
                  >
                    Portfolio
                  </Link>
                </li>

                <li className="py-3">
                  <Link
                    className={
                      path == "contactme"
                        ? "sub-menu-item nav-active"
                        : "sub-menu-item"
                    }
                    href="/contactme"
                  >
                    Contact Me
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </nav>
      </header>
    </>
  );
};

export default Header;
