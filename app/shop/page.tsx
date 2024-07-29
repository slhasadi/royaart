"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import Link from "next/link";
import { getAllProduct } from "../network";
import { IMAGE_URL } from "../global";

const Shop = () => {
  const [portList, setPortList] = useState([]);
  useEffect(() => {
    getAllProduct().then((res) => {
      setPortList(res.data);
    });
  }, []);
  let USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });
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
              <Link href="/">Main</Link>
            </li>
            <li className="inline-block text-[18px] text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <i className="mdi mdi-chevron-right align-middle breadcrumb-color"></i>
            </li>
            <li className="inline-block capitalize text-[14px] duration-500 ease-in-out text-white breadcrumb-color">
              Shop
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
            {portList.map((item: any) => {
              return (
                <div className="mx-auto mt-11 w-80 transform overflow-hidden rounded-lg bg-white dark:bg-slate-800 shadow-md duration-300 hover:scale-105 hover:shadow-lg">
                  <Link href={`/shop/${item.productId}`}>
                    <img
                      className="h-56 w-full object-cover object-center"
                      src={IMAGE_URL + item.imagePath + item.imageName}
                      alt="Product Image"
                    />
                    <div className="p-4">
                      <h2 className="mb-2 text-lg font-medium dark:text-white text-gray-900">
                        {item?.title}
                      </h2>

                      <div className="flex items-center">
                        <p className="mr-2 text-lg font-semibold text-gray-900 dark:text-white">
                          {item.price}
                        </p>
                      </div>
                    </div>
                  </Link>
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
