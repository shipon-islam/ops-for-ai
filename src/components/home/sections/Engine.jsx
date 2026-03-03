import growth from "@/assets/home/engine/growth.png";
import model from "@/assets/home/engine/model.png";
import process from "@/assets/home/engine/process.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
const ourProcess = [                       
  {
    id: 1,
    image: model,
    title: "Model",
    heading:"Model ops, the data foundry",
    description:
      "Model readiness with 99.9% confidence and zero guesswork.",
  },
  {
    id: 2,
    image: growth,
    title: "Growth",
    heading:"Growth ops, the GTM lab",
    description:
      "Consistent investor and customer meetings through founder-led branding.",
  },
  {
    id: 3,
    image: process,
    title: "Process",
    heading:"Process ops, the SOP factory",
    description:
      "Operational scale for Series A and beyond through repeatable systems.",
  },
];
export default function Engine() {
  return (
    <section className="bg-black text-white">
      <div className="container py-28">
        <div className="text-center">
          <p className="font-semibold">Engine</p>
          <h2 className="heading-2 pt-10">Three operational engines</h2>
          <p className="body-text mt-6">Managed RLHF, edge-case labeling, and ground truth validation.</p>
        </div>
        <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-12 md:mt-16 xl:mt-20">
            {ourProcess.map((item)=>(
                <div key={item.id} className="relative">
                    <Image src={item.image} alt={item.title} className="w-full h-full max-h-142 md:max-h-157.5 mb-4 relative z-0" width={405} height={630}/>
                    <div className="absolute w-full h-full z-10 top-0 left-0 p-6 flex flex-col justify-end ">
                        <p className="text-base semibold">{item.title}</p>
                        <h2 className="heading-4 mt-2 mb-5">{item.heading}</h2>
                    <p className="body-text">{item.description}</p>
                    <button className="flex items-center gap-2 mt-6  py-2  rounded-md hover:text-blue transition-colors duration-300 w-fit"><span>Explore</span> <Icon icon="weui:arrow-outlined" width="12" height="24" /></button>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
}
