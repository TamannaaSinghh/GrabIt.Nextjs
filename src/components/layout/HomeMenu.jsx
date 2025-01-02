import Image from "next/image";
import React from "react";
import MenuItem from "../menu/MenuItem";
import SectionHeaders from "./SectionHeaders";

export default function HomeMenu() {
  return (
    <section>
      <div className="absolute left-0 right-0 w-full justify-start">
        <div className="absolute left-0 -top-[70px] -z-10 text-left ">
          <Image
            src={"/sallad1.png"}
            alt={"sallad"}
            width={"109"}
            height={"189"}
          />
        </div>
        <div className="absolute -z-10 right-0 -top-[100px]">
          <Image
            src={"/sallad2.png"}
            alt={"sallad"}
            height={"195"}
            width={"107"}
          />
        </div>
      </div>

      <div className="text-center mb-4">
        <SectionHeaders subHeader={"Check Out"} mainHeader={"Menu"} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  );
}
