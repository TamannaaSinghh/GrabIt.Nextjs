import React from "react";

export default function MenuItem() {
  return (
    <div>
      <div className="bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-lg hover:shadow-black/25">
        <div className="text-center">
          <img
            src="/pizzaa.png"
            className="max-h-auto max-h-24 block mx-auto"
            alt="pizza"
          />
        </div>

        <h4 className="font-semibold my-3 text-xl">Pepperoni Pizza</h4>
        <p className="text-gray-500 text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora odio
          itaque iusto placeat omnis esse!
        </p>
        <button className="mt-4 text-white rounded-full px-8 py-2 bg-primary">
          Add to cart $12
        </button>
      </div>
    </div>
  );
}
