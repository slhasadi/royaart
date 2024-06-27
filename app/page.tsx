"use client";
import Image from "next/image";
import Header from "./components/header";
import Slider from "./components/slider";
import PortfolioList from "./components/portfolioList";
import Script from "next/script";
import { Head } from "next/document";
import VideoSection from "./components/videoSection";

export default function Home() {
  return (
    <div className="dark:text-white dark:bg-slate-900">
      <Header />
      <Slider />
      <VideoSection />
      <PortfolioList />
    </div>
  );
}