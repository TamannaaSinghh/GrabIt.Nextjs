import Image from "next/image";
import React from "react";
import Right from "../icons/Right";

export default function Hero() {
  return (
    <section className="hero">
      <div className="py-12">
        <h1 className="text-4xl font-semibold">
          Everything <br />
          is better <br/> with a&nbsp;<span className="text-primary">Pizza</span>
        </h1>
        <p className=" text-gray-500 my-6">
          Pizza is the missing piece that makes everything complete, a simple
          yet delicious joy in life.
        </p>

        <div className="flex gap-4">
          <button className="bg-primary text-white px-4 py-2 rounded-full flex gap-2 uppercase items-center">
            Order Now <Right />
          </button>

          <button className="flex gap-2 py-2 text-gray-600 font-semibold">
            Learn More <Right />
          </button>
        </div>
      </div>
      <div className="relative">
        <Image
          src={"/pizzaa.png"}
          layout={"fill"}
          objectFit={"contain"}
          alt="pizza"
        />
      </div>
    </section>
  );
}
