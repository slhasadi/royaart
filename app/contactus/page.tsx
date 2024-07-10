import React from "react";
import Header from "../components/header";

const Contactus = () => {
  return (
    <>
      <Header />
      <section className="relative table w-full pt-24 pb-32  bg-no-repeat bg-top bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black gradient-pink-to-white"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-3 text-3xl leading-normal font-medium text-white">
              Contact Us
            </h3>

            <p className="text-white/70 text-base max-w-xl mx-auto">
              Showcase of Our Awesome Works in Four Columns
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
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src="assets/images/contact.svg" alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-100 rounded-xl shadow dark:shadow-gray-200 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>

                  <form method="post" name="myForm" id="myForm">
                    <p className="mb-0" id="error-msg"></p>
                    <div id="simple-msg"></div>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <label
                          htmlFor="name"
                          className="form-label font-medium"
                        >
                          Your Name:
                        </label>
                        <input
                          name="name"
                          id="name"
                          type="text"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-200 dark:bg-slate-100 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2"
                          placeholder="Name :"
                        />
                      </div>

                      <div className="lg:col-span-6 mb-5">
                        <label
                          htmlFor="email"
                          className="form-label font-medium"
                        >
                          Your Email:
                        </label>
                        <input
                          name="email"
                          id="email"
                          type="email"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-200 dark:bg-slate-100 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2"
                          placeholder="Email :"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <label
                          htmlFor="subject"
                          className="form-label font-medium"
                        >
                          Your Question:
                        </label>
                        <input
                          name="subject"
                          id="subject"
                          className="form-input w-full py-2 px-3 h-10 bg-transparent border border-inherit dark:border-gray-200 dark:bg-slate-100 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2"
                          placeholder="Subject :"
                        />
                      </div>

                      <div className="mb-5">
                        <label
                          htmlFor="comments"
                          className="form-label font-medium"
                        >
                          Your Comment:
                        </label>
                        <textarea
                          name="comments"
                          id="comments"
                          className="form-input w-full py-2 px-3 bg-transparent border border-inherit dark:border-gray-200 dark:bg-slate-100 dark:text-slate-200 rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2 textarea h-28"
                          placeholder="Message :"
                        ></textarea>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-orange-500 hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-white rounded-xl"
                    >
                      Send Message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container relative lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="assets/images/icons/call-center-support-service.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>

              <div className="content mt-7">
                <h5 className="title text-lg font-medium">Phone</h5>
                <p className="text-slate-400 dark:text-white/60 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>

                <div className="mt-5">
                  <a
                    href="tel:+152534-468-854"
                    className="text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500"
                  >
                    +152 534-468-854
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/mail-send-envelope.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title text-lg font-medium">Email</h5>
                <p className="text-slate-400 dark:text-white/60 mt-3">
                  The phrasal sequence of the is now so that many campaign and
                  benefit
                </p>

                <div className="mt-5">
                  <a
                    href="mailto:contact@example.com"
                    className="text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500"
                  >
                    contact@example.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="assets/images/icons/location-pin-3.svg"
                    className="w-20 h-32"
                    alt=""
                  />
                </div>
              </div>
              <div className="content mt-7">
                <h5 className="title text-lg font-medium">Location</h5>
                <p className="text-slate-400 dark:text-white/60 mt-3">
                  C/54 Northwest Freeway, Suite 558, <br /> Houston, USA 485
                </p>

                <div className="mt-5">
                  <a
                    href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                    data-type="iframe"
                    className="video-play-icon read-more lightbox text-orange-500 hover:text-orange-500 after:bg-orange-500 transition duration-500"
                  >
                    View on Google map
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contactus;
