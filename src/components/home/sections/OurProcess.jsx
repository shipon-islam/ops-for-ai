import placeHolder from "@/assets/home/placeholder.jpg";
import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";
const ourProcess = [
  {
    id: 1,
    image: placeHolder,
    title: "Security",
    heading: "Built on a foundation of trust",
    description:
      "Strict NDAs before discovery, complete data siloing, and 100% IP ownership to you. We've managed 30+ global AI projects with zero compromises on confidentiality.",
    button1: { name: "details", link: "#" },
    button2: { name: "learn", link: "#" },
  },
  {
    id: 2,
    image: placeHolder,

    title: "Integration",
    heading: "We don't just work for you, we work with you",
    description:
      "We plug directly into your existing stack through Slack, Notion, Linear, and Google Workspace to ensure zero friction and seamless collaboration.",
    button1: { name: "contact", link: "#" },
    button2: { name: "learn", link: "#" },
  },

  {
    id: 3,
    image: placeHolder,

    title: "Timeline",
    heading: "72 hour onramp to operational excellence",
    description:
      "A 30-minute audit identifies bottlenecks, then we deploy dedicated teams and map SOPs in under 72 hours with weekly KPI dashboards.",
    button1: { name: "Schedule", link: "#" },
    button2: { name: "learn", link: "#" },
  },
  {
    id: 4,
    image: placeHolder,

    title: "Results",
    heading: "Engineering time recovered and manual debt eliminated",
    description:
      "Your team gets back to building product while we handle the operational infrastructure that scales with your growth.",
    button1: { name: "Discuss", link: "#" },
    button2: { name: "learn", link: "#" },
  },
];

export default function OurProcess() {
  return (
    <section className="bg-black text-white">
      <div className="container">
        <div>
          {ourProcess.map((item) => (
            <div key={item.id} className="py-16 md:py-28">
              <div className="grid md:grid-cols-2 gap-y-12 gap-x-20 ">
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <h2 className="heading-2 mb-5 md:mb-6 mt-4">
                    {item.heading}
                  </h2>
                  <p>{item.description}</p>
                  <div className="flex items-center gap-4 mt-6 md:mt-8">
                    <Button variant="outline" color="white" className=" capitalize">
                      {item.button1.name}
                    </Button>
                    <button className="flex items-center gap-2  px-4 py-2  rounded-md capitalize hover:text-blue transition-colors duration-300">
                      <span>{item.button2.name}</span>{" "}
                      <Icon icon="weui:arrow-outlined" width="12" height="24" />
                    </button>
                  </div>
                </div>
                <div>
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={600}
                    height={900}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
