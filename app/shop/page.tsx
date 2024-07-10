"use client";
import React, { useState } from "react";
import Header from "../components/header";
import Link from "next/link";

const Shop = () => {
  const [mapItem, setMapItem] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);
  return (
    <div>
      <Header />
      <section className="relative table w-full pt-24 pb-32  bg-no-repeat bg-top bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black gradient-pink-to-white"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-3 text-3xl leading-normal font-medium text-white">
              Portfolio & Works
            </h3>

            <p className="text-white/70 text-base max-w-xl mx-auto">
              Showcase of Our Awesome Works in Four Columns SLH
            </p>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-block">
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white breadcrumb-color">
              <a href="index.html">Muvico</a>
            </li>
            <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right align-middle breadcrumb-color"></i>
            </li>
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white/50 hover:text-white breadcrumb-color">
              <a href="">Portfolio</a>
            </li>
            <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right align-middle breadcrumb-color"></i>
            </li>
            <li
              className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white breadcrumb-color"
              aria-current="page"
            >
              Creative
            </li>
          </ul>
        </div>
      </section>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div
            id="grid"
            className="md:flex flex-wrap w-full justify-center mx-auto mt-4"
          >
            {mapItem.map((item: any) => {
              return (
                <div
                  key={item}
                  className="lg:w-1/4 md:w-1/3 p-3 picture-item"
                  data-groups='["branding"]'
                >
                  <div className="group relative block rounded-xl duration-700 ease-in-out">
                    <div className="relative overflow-hidden rounded-xl">
                      <img
                        src="/assets/images/portfolio/1.jpg"
                        className="rounded-xl"
                        alt=""
                      />
                    </div>
                    <div className="content duration-700 ease-in-out">
                      <div className="bg-white dark:bg-slate-900 p-4 rounded-xl absolute z-10 bottom-3 start-3 duration-700 ease-in-out scale-0 group-hover:scale-100">
                        <Link
                          href="/shop/1"
                          className="h6 text-[15px] font-medium text-white hover:text-orange-500 duration-500 ease-in-out"
                        >
                          Mockup Collection
                        </Link>

                        <p className="text-slate-400 dark:text-white/60 mb-0">
                          Abstract
                        </p>
                      </div>
                    </div>

                    <div className="absolute inset-0 bg-orange-500 rounded-xl group-hover:-mt-[10px] group-hover:-ms-[10px] h-[98%] w-[98%] duration-700 -z-1"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
