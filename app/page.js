import Image from "next/image";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PropertyTypeSection from "./components/PropertyTypeSection";
import TopProjectSection from "./components/TopProjectSection";
import CitySection from "./components/CitySection";
import TrustedSection from "./components/TrustedSection";
import MiddleBannerSection from "./components/MiddleBannerSection";
import Footer from "./components/Footer";
import DeveloperList from "./components/DeveloperList";
import BlogList from "./components/BlogList";
import BlogCard from "./components/BlogCard";
import BottomBanner from "./components/BottomBanner";

export default function Home() {
  return (
    <div>
      {/* <h1 className=" text-[var(--primary)]">SMP</h1> */}
      {/* <Header/> */}
      <HeroSection/>
      <PropertyTypeSection/>
      <CitySection/>
      <TrustedSection/>
      <TopProjectSection/>
      <MiddleBannerSection/>
      <BlogList/>
      <BottomBanner/>
      <DeveloperList/>
      {/* <Footer/> */}
    </div>
  );
}
