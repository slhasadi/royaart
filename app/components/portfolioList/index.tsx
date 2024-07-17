"use client";
import { IMAGE_URL } from "@/app/global";
import { getAllCatalog } from "@/app/network";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const PortfolioList = () => {
  const [portList, setPortList] = useState([1, 2, 3, 4, 5, 6]);
  useEffect(() => {
    getAllCatalog().then((res) => {
      let product: any = [];
      res.data.forEach((element: any) => {
        if (element.specialCatalog) {
          product.push(element);
        }
      });
      setPortList(product);
    });
  }, []);
  return (
    <section className="relative md:py-24 py-16 to-orange-500">
      <div className="container relative my-20">
        <div className="flex justify-center">
          <h5 className="md:text-[42px] md:leading-normal text-3xl leading-normal font-bold mt-3">
            PortFolio
          </h5>
        </div>
      </div>
      <div className="container relative">
        <div
          id="grid"
          className="flex gap-10 flex-wrap md:flex justify-center mx-auto mt-4"
        >
          {portList.map((item: any) => {
            return (
              <div
                key={item}
                className="lg:w-[500px] h-[169px] md:h-[281px] picture-item"
                data-groups='["branding"]'
              >
                <div className="group w-full h-full relative block overflow-hidden rounded-xl duration-500">
                  <Link href={`portfolio-list/${item.catalogId}`}>
                    <img
                      src={IMAGE_URL + item.imagePath + item.imageName}
                      className="group-hover:origin-center w-[500px] h-full group-hover:scale-125 duration-500 product-img"
                      alt=""
                    />
                    <div className="absolute inset-2 group-hover:bg-white/90 dark:group-hover:bg-slate-900/90 duration-500 z-0 rounded-xl"></div>

                    <div className="content duration-500">
                      <div className="absolute z-10 opacity-0 group-hover:opacity-100 bottom-6 start-6 duration-500">
                        <p className="h6 text-[15px] font-medium hover:text-orange-500 duration-500 ease-in-out">
                          {item.title}
                        </p>
                        {/* <p className="text-slate-400 dark:text-white/60 mb-0">
                        Abstract
                        </p> */}
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-7">
          <Link href="/portfolio-list">
            <span className="bg-[#fff] text-[#000] text-[22px] font-medium px-7 py-3 rounded-full cursor-pointer h-5">
              More...
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PortfolioList;
