"use client";
import React, { useEffect, useState } from "react";
import Header from "../components/header";
import { registerContactUs } from "../network";
import Link from "next/link";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [comment, setComment] = useState("");
  const onChanageName = (e: any) => {
    setName(e.target.value);
  };
  const onChanageEmail = (e: any) => {
    setEmail(e.target.value);
  };
  const onChanageSubject = (e: any) => {
    setSubject(e.target.value);
  };
  const onChanageComment = (e: any) => {
    setComment(e.target.value);
  };
  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  const handleSubmit = () => {
    const data = {
      CustomerName: name,
      Email: email,
      Subject: subject,
      Comment: comment,
    };
    registerContactUs(data).then(() => {
      setName("");
      setComment("");
      setSubject("");
      setEmail("");
      toast.success("Yor comment has been sended", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    });
  };

  return (
    <>
      <Header />
      <section className="relative table w-full pt-24 pb-32  bg-no-repeat bg-top bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/80 to-black gradient-pink-to-white"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="mb-3 text-3xl leading-normal font-medium text-white">
              Contact Me
            </h3>

            <p className="text-white/70 text-base max-w-xl mx-auto">
              Roya Moradkhani
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
              Contact Me
            </li>
          </ul>
        </div>
      </section>
      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src="/assets/images/contact.svg" alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-[#490753]  rounded-xl shadow dark:shadow-gray-200 p-6">
                  <h3 className="mb-6 text-2xl text-white leading-normal font-medium">
                    Get in touch !
                  </h3>

                  <p className="mb-0" id="error-msg"></p>
                  <div id="simple-msg"></div>
                  <div className="grid lg:grid-cols-12 lg:gap-6">
                    <div className="lg:col-span-6 mb-5">
                      <label
                        htmlFor="name"
                        className="form-label font-medium text-white"
                      >
                        Your Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        value={name}
                        type="text"
                        className="form-input text-white w-full py-2 px-3 h-10 bg-transparent border border-[#601c7c] rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2"
                        placeholder="Name :"
                        onChange={(e: any) => onChanageName(e)}
                      />
                    </div>

                    <div className="lg:col-span-6 mb-5">
                      <label
                        htmlFor="email"
                        className="form-label font-medium text-white"
                      >
                        Your Email:
                      </label>
                      <input
                        name="email"
                        id="email"
                        value={email}
                        type="email"
                        className="form-input text-white w-full py-2 px-3 h-10 bg-transparent border border-[#601c7c] rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2"
                        placeholder="Email :"
                        onChange={(e: any) => onChanageEmail(e)}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1">
                    <div className="mb-5">
                      <label
                        htmlFor="subject"
                        className="form-label font-medium text-white"
                      >
                        Your Question:
                      </label>
                      <input
                        name="subject"
                        id="subject"
                        value={subject}
                        className="form-input w-full text-white py-2 px-3 h-10 bg-transparent border border-[#601c7c] rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2"
                        placeholder="Subject :"
                        onChange={(e: any) => onChanageSubject(e)}
                      />
                    </div>

                    <div className="mb-5">
                      <label
                        htmlFor="comments"
                        className="form-label font-medium text-white"
                      >
                        Your Comment:
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        value={comment}
                        className="form-input w-full py-2 px-3 text-white bg-transparent border border-[#601c7c] rounded-xl outline-none focus:border-orange-500/50 dark:focus:border-orange-500/50 focus:ring-0 mt-2 textarea h-28"
                        placeholder="Message :"
                        onChange={(e: any) => onChanageComment(e)}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    onClick={handleSubmit}
                    className="py-2 px-5 inline-block font-normal tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-[#fff] hover:bg-orange-600 border-orange-500 hover:border-orange-600 text-[#490753] rounded-xl"
                  >
                    Send Message
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="container relative lg:mt-24 mt-16">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/call-center-support-service.svg"
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
                    contact@royaartport.com
                  </a>
                </div>
              </div>
            </div>

            <div className="text-center px-6">
              <div className="relative overflow-hidden text-transparent -m-3">
                <div className="relative w-full flex items-center justify-center">
                  <img
                    src="/assets/images/icons/location-pin-3.svg"
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
   
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </section>
      <ToastContainer />
    </>
  );
};

export default ContactMe;
