import React from "react";

import { EquipmentsData } from "@/app/mockData/data";
import { JSX } from "react/jsx-runtime";

interface typeEquipments {
  id: number;
  icon: JSX.Element;
  title: string;
  description: string;
  link: string;
  delay: number;
}
function Equipments() {
  return (
    <div>
      <div className="container py-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 font-playfair">
          <div className=" space-y-4 p-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
              What we offer for you
            </h1>
            <p className="text-gray-500">
              It is a long established fact that a reader readable.
            </p>
          </div>
          {EquipmentsData.map((item: typeEquipments) => {
            return (
              <div
                key={item.id}
                className="bg-gray-100 space-y-4 p-6 hover:bg-white rounded-xl hover:shadow-[0_0_22px_0]"
              >
                <div className="text-4xl items-center">{item.icon}</div>
                <p className="text-2xl font-semibold">{item.title}</p>
                <p>
                  {item.description.length > 100
                    ? item.description.slice(0, 80) + "..."
                    : item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Equipments;
