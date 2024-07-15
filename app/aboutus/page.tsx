import React from "react";
import Header from "../components/header";
import Link from "next/link";

const Aboutus = () => {
  return (
    <>
      <Header />
      <section className="relative table w-full pt-24 pb-32  bg-no-repeat bg-top bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black gradient-pink-to-white"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-3 text-3xl leading-normal font-medium text-white">
              About Us
            </h3>

            <p className="text-white/70 text-base max-w-xl mx-auto">
              Showcase of Our Awesome Works in Four Columns
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
              About Us
            </li>
          </ul>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 md:grid-cols-2 gap-10 items-center">
            <div className="lg:col-span-5">
              <div className="relative">
                <img
                  src="/assets/images/about.jpg"
                  className="rounded-lg shadow-lg relative"
                  alt=""
                />
                <div className="absolute bottom-2/4 translate-y-2/4 end-0 start-0 text-center"></div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="lg:ms-7">
                <h3 className="mb-4 md:text-2xl text-xl font-medium">
                  About Us: Muvico
                </h3>

                <p className="text-slate-900  max-w-2xl mx-auto">
                  Start working with Muvico that can provide everything you need
                  to generate awareness, drive traffic, connect. Dummy text is
                  text that is used in the publishing industry or by web
                  designers to occupy the space which will later be filled with
                  'real' content. This is required when, for example, the final
                  text is not yet available. Dummy texts have been in use by
                  typesetters since the 16th century.
                </p>

                <div className="relative mt-8">
                  <a
                    href="aboutus.html"
                    className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"
                  >
                    Read More <i className="mdi mdi-arrow-right ms-2"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
            <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3 text-center">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/color-swatches.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>

              <div className="mt-6">
                <a
                  href="services.html"
                  className="text-lg font-medium duration-500 hover:text-orange-500"
                >
                  Grow Your Business
                </a>
                <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3 text-center">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/decent-work-and-economic-growth.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="services.html"
                  className="text-lg font-medium duration-500 hover:text-orange-500"
                >
                  Drive More Sales
                </a>
                <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3 text-center">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/flip-horizontal-arrow-1.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="services.html"
                  className="text-lg font-medium duration-500 hover:text-orange-500"
                >
                  Handled By Expert
                </a>
                <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3 text-center">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/layers-1.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="services.html"
                  className="text-lg font-medium duration-500 hover:text-orange-500"
                >
                  Discussion For Idea
                </a>
                <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3 text-center">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/pictures-folder-memories.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="services.html"
                  className="text-lg font-medium duration-500 hover:text-orange-500"
                >
                  Increase Conversion
                </a>
                <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
            <div className="group relative lg:px-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center">
              <div className="relative overflow-hidden text-transparent -m-3 text-center">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/production-belt-time.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>
              <div className="mt-6">
                <a
                  href="services.html"
                  className="text-lg font-medium duration-500 hover:text-orange-500"
                >
                  Sales Growth Idea
                </a>
                <p className="text-slate-400 dark:text-white/60 text-[15px] duration-500 mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid grid-cols-1 text-center">
            <span className="text-slate-400 dark:text-white/60 mb-4">
              Available for freelance projects
            </span>
            <h3 className="md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Do you have designing project? <br /> Let's talk.
            </h3>

            <div className="mt-6">
              <a
                href="contactus.html"
                className="py-2 px-5 inline-flex items-center font-medium tracking-wide border align-middle duration-500 text-[15px] text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"
              >
                Contact us
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Aboutus;
