"use client"
import logo from "@/assets/opsforai-logo.png";
import { headerLinks } from "@/constant/header";
import { Icon } from "@iconify/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Button from "./Button";
export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 bg-white ">
        <div className="container">
            <nav className="flex justify-between py-4 ">
                <div>
                    <Image src={logo} alt="Logo" width={80} height={40} />
                </div>
                <button className="md:hidden cursor-pointer" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    {isMenuOpen ? (
                        <Icon icon="material-symbols-light:close" width="30" height="30" />
                    ) : (
                        <Icon icon="solar:hamburger-menu-outline" width="30" height="30" />
                    )}
                    
                </button>
                <div className={`hidden md:flex items-center gap-8  bg-white `}>
                    {headerLinks.map((link) => {
                      if (link.dropdownList) {
                        return (
                          <div key={link.id} className="relative inline-block group">
                            <div className="flex gap-2 items-center cursor-pointer hover:text-blue transition-colors duration-300">
                              <Link href={link.href}>{link.name}</Link>
                              <Icon icon="ep:arrow-down" width="18" height="18" />
                            </div>
                            
                            <div className="absolute left-0  min-w-32 bg-white shadow-lg rounded-md hidden group-hover:block">
                              {link.dropdownList.map((item) => (
                                <Link key={item.id} href={item.href} className="block px-4 py-2 text-sm hover:bg-gray-100">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                            
                          </div>
                        );
                      }
                      return (
                        <Link className="hover:text-blue transition-colors duration-300" key={link.id} href={link.href}>
                          {link.name}
                        </Link>
                      );
                    })}
                    <Button variant="outline">
                        Audit
                    </Button>
                    <Button>
                        Schedule
                    </Button>
                </div>
                {/* mobile version */}
                <div className={`flex-col h-screen w-full pt-20 items-center gap-8 fixed  top-18.5 bg-white right-0  ${isMenuOpen ? "flex md:hidden" : "hidden"}`}>
                    {headerLinks.map((link) => {
                      if (link.dropdownList) {
                        return (
                          <div key={link.id} className="relative inline-block group">
                            <div className="flex gap-2 items-center justify-center cursor-pointer hover:text-blue">
                              <Link onClick={()=>setIsMenuOpen(prev=>!prev)} href={link.href}>{link.name}</Link>
                              <Icon icon="ep:arrow-down" width="18" height="18" />
                            </div>
                            
                            <div className=" flex-col items-center rounded-md w-full hidden group-hover:flex mt-1">
                              {link.dropdownList.map((item) => (
                                <Link onClick={()=>setIsMenuOpen(prev=>!prev)} key={item.id} href={item.href} className="block px-4 py-2 text-base hover:bg-gray-100">
                                  {item.name}
                                </Link>
                              ))}
                            </div>
                            
                          </div>
                        );
                      }
                      return (
                        <Link onClick={()=>setIsMenuOpen(prev=>!prev)} className="hover:text-blue" key={link.id} href={link.href}>
                          {link.name}
                        </Link>
                      );
                    })}
                    <Button variant="outline">
                        Audit
                    </Button>
                    <Button>
                        Schedule
                    </Button>
                </div>
            </nav>
        </div>
    </header>
  )
}
