"use client";
import Image from "next/image";
import Header from "./components/header";
import Slider from "./components/slider";
import PortfolioList from "./components/portfolioList";
import Script from "next/script";
import { Head } from "next/document";
import VideoSection from "./components/videoSection";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    const handleContextmenu = (e: any) => {
      e.preventDefault();
    };
    document.addEventListener("contextmenu", handleContextmenu);
    return function cleanup() {
      document.removeEventListener("contextmenu", handleContextmenu);
    };
  }, []);
  return (
    <div className="dark:text-white dark:bg-slate-900">
      <Header />
      <Slider />
      <VideoSection />
      <PortfolioList />
    </div>
  );
}
