import Hero from "@/components/Hero";
import CompanyStats from "@/components/CompanyStats";
import Benefits from "@/components/Benefits";
import SolutionsShowcase from "@/components/SolutionsShowcase";
import DiamondProcess from "@/components/DiamondProcess";
import RoughIdeaToDiamond from "@/components/RoughIdeaToDiamond";
import Ecosystem from "@/components/Ecosystem";
import Portfolio from "@/components/Portfolio";
import Testimonials from "@/components/Testimonials";
import Partners from "@/components/Partners";
import News from "@/components/News";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <CompanyStats />
      <Benefits />
      <SolutionsShowcase />
      <DiamondProcess />
      <RoughIdeaToDiamond />
      <Ecosystem />
      <Portfolio />
      <Testimonials />
      <Partners />
      <News />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
