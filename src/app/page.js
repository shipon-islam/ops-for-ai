import background from "@/assets/home/hero-banner.webp";
import Contact from "@/components/home/sections/Contact";
import Engine from "@/components/home/sections/Engine";
import Foundation from "@/components/home/sections/Foundation";
import Hero from "@/components/home/sections/Hero";
import Offload from "@/components/home/sections/Offload";
import OurProcess from "@/components/home/sections/OurProcess";
import OurSteps from "@/components/home/sections/OurSteps";
import Problems from "@/components/home/sections/Problems";
import Process from "@/components/home/sections/Process";
import Image from "next/image";
export default function Home() {
  return (
   <main className="">
    <Hero/>
    <section className="mt-16 md:mt-28">
       <Image src={background} alt="Background" width={2040} height={810} className="w-full  h-full  max-h-202.5 object-cover "/>
    </section>
    <Foundation/>
    <Problems/> 
    <Engine/>
    <OurSteps/>
    <OurProcess/>
    <Process/>
    <Offload/>
    <Contact/> 
   </main>
  );
}
