"use client";
import Link from "next/link";
import React, { useState } from "react";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
      <nav id="topnav" className="defaultscroll bg-[#0000004d] is-sticky">
        <div className="container relative">
          <div id="navigation">
            <ul className="navigation-menu justify-end">
              <li className="has-submenu parent-menu-item">
                <Link className="sub-menu-item" href="/">
                  Home
                </Link>
              </li>

              <li>
                <Link className="sub-menu-item" href="/aboutus">
                  About Us
                </Link>
              </li>

              <li>
                <Link className="sub-menu-item" href="/shop">
                  Shop
                </Link>
              </li>

              <li className="has-submenu parent-parent-menu-item">
                <Link className="sub-menu-item" href="/portfolio-list">
                  Portfolio
                </Link>
              </li>

              <li>
                <Link className="sub-menu-item" href="/contactus">
                  Contact Us
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
              console.log("showwwwww");
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
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
                  <Link className="sub-menu-item" href="/">
                    Home
                  </Link>
                </li>

                <li className="py-3">
                  <Link className="sub-menu-item" href="/aboutus">
                    About Us
                  </Link>
                </li>

                <li className="py-3">
                  <Link className="sub-menu-item" href="/shop">
                    Shop
                  </Link>
                </li>

                <li className="has-submenu parent-parent-menu-item py-3">
                  <Link className="sub-menu-item" href="/portfolio-list">
                    Portfolio
                  </Link>
                </li>

                <li className="py-3">
                  <Link className="sub-menu-item" href="/contactus">
                    Contact Us
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
