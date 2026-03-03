import banner from "@/assets/home/footer-banner.webp";
import logo from "@/assets/opsforai-logo.png";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
const productLinks = [
  { id: 1, name: "Model Ops", href: "#" },
  { id: 2, name: "Growth Ops", href: "#" },
  { id: 3, name: "Process Ops", href: "#" },
  { id: 4, name: "The Integration", href: "#" },
  { id: 5, name: "Security", href: "#" },
];
const companyLinks = [
  { id: 1, name: "About us", href: "#" },
  { id: 2, name: "Blog", href: "#" },
  { id: 3, name: "Careers", href: "#" },
  { id: 4, name: "Contact", href: "#" },
  { id: 5, name: "Press", href: "#" },
];
const followUsLinks = [
  { id: 1, icon: "ic:baseline-facebook", name: "facebook", href: "#" },
  { id: 2, icon: "lets-icons:insta", name: "instagram", href: "#" },
  { id: 3, icon: "ri:twitter-x-line", name: "x", href: "#" },
  { id: 4, icon: "mdi:linkedin", name: "linkedin", href: "#" },
  { id: 5, icon: "mingcute:youtube-fill", name: "youtube", href: "#" },
];

export default function Footer() {
  return (
    <footer className="container">
      <div className="grid  lg:grid-cols-[1fr_1.2fr]  lg:gap-x-28">
        <div>
          <div>
            <Image src={logo} alt="Logo" width={80} height={40} />
          </div>
          <p  className="py-8 text-lg">
            Get weekly updates on operational insights and product launches.
          </p>
          <div>
            <div className="flex flex-col sm:flex-row gap-5 items-center w-full sm:w-[85%] md:w-[70%] lg:w-full">
              <input
                type="email"
                placeholder="Your email"
                className="text-lg border-b border-gray-300  py-2 w-full focus:outline-none"
              />
              <Button variant="outline" className="w-full sm:w-fit flex justify-center">Subscribe</Button>
            </div>
            <p className="mt-3 text-xs">
              By subscribing you agree to our Privacy Policy and consent to
              receive updates from OpsForAI.
            </p>{" "}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-x-5 lg:gap-x-10 gap-y-10 md:grid-cols-3 mt-12 lg:mt-0">
          <div>
            <p className="text-lg font-semibold">Product</p>
            <ul className="mt-4 space-y-3.5">
              {productLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className=" text-light hover:underline hover:text-blue-500"
                    href={link.href}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold">Company</p>
            <ul className="mt-4 space-y-3.5">
              {companyLinks.map((link) => (
                <li key={link.id}>
                  <Link
                    className=" text-light hover:underline hover:text-blue-500"
                    href={link.href}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg font-semibold">Follow us</p>
            <ul className="mt-4 space-y-3.5">
              {followUsLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className="flex items-center gap-3 capitalize text-light hover:underline hover:text-blue-500"
                    href={link.href}
                  >
                    <Icon icon={link.icon} width="24" height="24" />
                    <span>{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="pt-12 pb-8 md:pt-12 md:pb-12">
        <Image
          src={banner}
          alt="Logo"
          width={1280}
          height={148}
          className="w-full h-12 sm:h-28 md:h-37 object-cover"
        />
      </div>
      <hr  className="text-gray-300"/>
      <div className="flex flex-col-reverse md:flex-row gap-y-6 justify-between md:items-center py-8">
        <p className="text-center text-light">
          © 2025 OpsForAI. All rights reserved.
        </p>
        <div className="flex flex-col md:flex-row gap-4">
          <Link
            href="#"
            className="text-light underline hover:text-blue-500"
          >
            Privacy Policy
          </Link>

          <Link
            href="#"
            className="text-light underline hover:text-blue-500"
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-light underline hover:text-blue-500"
          >
            Cookies settings
          </Link>
        </div>
      </div>
    </footer>
  );
}
