import React from "react";

interface CardProps {
  name: string;
  description: string;
  image: string;
}
function Card({ name, description, image }: CardProps) {
  return (
    <div className="max-w-xs p-6 rounded-md shadow-md border-2 border-black text-gray-900">
      <img
        src={image}
        alt=""
        className="object-cover object-center w-full rounded-md h-72 border-black border-2"
      />
      <div className="mt-6 mb-2">
        <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
      </div>
      <p className="text-gray-800">{description}</p>
    </div>
  );
}
export default Card;
