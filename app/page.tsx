import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Howitworks from "@/components/Howitworks";
import CTA from "@/components/CTA";

export default function Home() {
  return (
   <div className="flex flex-col">
    <Hero />
    <Features />
    <Howitworks />
    <CTA />
   </div>
  );
}
