
"use client";
import { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "../ui/navbar-menu"; 
// if you want to use the full component of the product, add "ProductItem" to the bracket above
import { cn } from "../../utils/cn";
// import { LiaDrumSolid } from "react-icons/lia";

export function NavbarDemo() {
  return (
    <div className="relative w-7xl flex flex-col items-center justify-center">
      <Navbar className="h-10" />
      
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <>
    
    <div
      className={cn("fixed mt-0 inset-x-0 w-full mx-auto", className)}
    >
      <Menu setActive={setActive}>
      <div>
        <h1 className="text-2xl sm:text-1xl font-bold   underline-offset-8  text-white">
          Musicians Arena
        </h1>
      </div>

        <div className="flex gap-6">
          {/* edit  */}
        {/* <MenuItem setActive={setActive} active={active} item="Lessons">
          <div className="  text-sm grid grid-cols-2 gap-10 p-4">
            <ProductItem
              title="Drum Lessons"
              href="#"
              src="https://pin.it/2mzylnVae"
              description="Prepare for tech interviews like never before." />
            <ProductItem
              title="Bass Lessons"
              href="#"
              src="https://pin.it/7sLbasYsY"
              description="Production ready Tailwind css components for your next project" />
            <ProductItem
              title="Keyboard Lessons"
              href="https://gomoonbeam.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
              description="Never write from scratch again. Go from idea to blog in minutes." />
            <ProductItem
              title="Lead Guitar Lessons"
              href="https://userogue.com"
              src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
              description="Respond to government RFPs, RFIs and RFQs 10x faster using AI" />
          </div>
        </MenuItem> */}
        <MenuItem setActive={setActive} active={active} item="Instrumentalist">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Drummers</HoveredLink>
            <HoveredLink href="/interface-design">Bassists</HoveredLink>
            <HoveredLink href="/seo">Keyboard Players</HoveredLink>
            <HoveredLink href="/branding">Lead Guitarists</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Lessons">
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/web-dev">Drum Lessons</HoveredLink>
            <HoveredLink href="/interface-design">Bass Lessons</HoveredLink>
            <HoveredLink href="/seo">Keyboard Lessons</HoveredLink>
            <HoveredLink href="/branding">Lead Guitar Lessons</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Digital Products ">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
        <MenuItem setActive={setActive} active={active} item="Register as a member ">
          {/* <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/individual">Individual</HoveredLink>
            <HoveredLink href="/team">Team</HoveredLink>
            <HoveredLink href="/enterprise">Enterprise</HoveredLink>
          </div> */}
        </MenuItem>
        </div>
      </Menu>
    </div></>
  );
}
