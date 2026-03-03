"use client";
import audit from "@/assets/home/process/audit.webp";
import deploy from "@/assets/home/process/deploy.webp";
import scale from "@/assets/home/process/scale.webp";
import Button from "@/components/Button";
import { Icon } from "@iconify/react";
import Image from "next/image";
import { useRef } from "react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const ourProcess = [
  {
    id: 1,
    image: audit,
    title: "Audit",
    description:
      "30-minute deep dive into your manual bottlenecks and operational gaps.",
  },
  {
    id: 2,
    image: deploy,
    title: "Growth",

    description:
      "Map SOPs and deploy dedicated team in under 72 hours with full integration.",
  },
  {
    id: 3,
    image: scale,
    title: "Process",

    description:
      "Weekly KPI dashboards and engineering time recovered for product development.",
  },
  {
    id: 4,
    image: audit,
    title: "Audit",
    description:
      "30-minute deep dive into your manual bottlenecks and operational gaps.",
  },
  {
    id: 5,
    image: deploy,
    title: "Growth",

    description:
      "Map SOPs and deploy dedicated team in under 72 hours with full integration.",
  },
  {
    id: 6,
    image: scale,
    title: "Process",

    description:
      "Weekly KPI dashboards and engineering time recovered for product development.",
  },
  {
    id: 7,
    image: audit,
    title: "Audit",
    description:
      "30-minute deep dive into your manual bottlenecks and operational gaps.",
  },
  {
    id: 8,
    image: deploy,
    title: "Growth",

    description:
      "Map SOPs and deploy dedicated team in under 72 hours with full integration.",
  },
  {
    id: 9,
    image: scale,
    title: "Process",

    description:
      "Weekly KPI dashboards and engineering time recovered for product development.",
  },
];
export default function Process() {
  const swiperRef = useRef(null);
  return (
    <section className="bg-black text-white">
      <div className="container py-16 md:py-28">
        <div className="max-w-3xl flex flex-col items-center text-center mx-auto">
          <p className="font-semibold">Process</p>
          <h2 className="heading-2 mt-3 md:mt-4">
            From chaos to systems in 72 hours
          </h2>
          <p className="mt-5 md:mt-6 mb-6 md:mb-8 body-text">
            We move fast because your time matters. Every hour counts when
            you're building the future.
          </p>
          <div className="flex items-center gap-2">
            <Button color="white" variant="outline">
              Start
            </Button>
            <button className="flex items-center gap-2  px-4 py-2  rounded-md capitalize hover:text-blue transition-colors duration-300">
              <span>Learn</span>{" "}
              <Icon icon="weui:arrow-outlined" width="12" height="24" />
            </button>
          </div>
        </div>
        <div>
          <div className=" relative mt-20">
            <hr className="absolute w-full bottom-29 md:bottom-40.5 lg:bottom-41" />
            <Swiper
              modules={[Navigation]}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              spaceBetween={20}
              loop={true}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  slidesPerGroup: 1, // Mobile → move 1
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3, // Desktop → move 3
                },
              }}
            >
              {ourProcess.map((item) => (
                <SwiperSlide key={item.id}>
                  <div key={item.id}>
                    <div>
                      <Image
                        width={256}
                        height={256}
                        src={item.image}
                        alt={item.title}
                        className="mx-auto md:max-w-48.75 lg:max-w-[256px]  rounded-xl"
                      />
                      <div className="mt-14 max-w-80 mx-auto">
                        <div className="text-center pt-4  relative">
                          <div className="absolute -top-7.5 left-1/2 -translate-x-1/2 rounded-full bg-black p-2">
                            <span className="size-3.5 rounded-full bg-white block "></span>
                          </div>
                          <h5 className="heading-5">{item.title}</h5>
                          <p className="md:text-lg mt-2">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            <div className="flex justify-between absolute w-full left-0 bottom-56 z-10">
              <button
                className="hover:text-blue"
                onClick={() => swiperRef.current?.slidePrev()}
              >
                <Icon icon="solar:arrow-left-linear" width="26" height="26" />
              </button>
              <button
                className="hover:text-blue"
                onClick={() => swiperRef.current?.slideNext()}
              >
                <Icon icon="solar:arrow-right-linear" width="26" height="26" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
