import React from "react";
import Link from "next/link";

interface CardProps {
  id: number;
  name: string;
  description: string;
  image: string;
  link?: string;
}
function Card({ id, name, description, image}: CardProps) {
  return (
    <>
      <Link
        href={`/projects/${id}`}
      >
        <div className="max-w-lg p-6 rounded-md shadow-md border-2 border-black text-gray-900">
          <img
            src={image}
            alt=""
            className="object-contain object-center bg-black  w-full rounded-md h-72 border-black border-2"
          />
          <div className="mt-6 mb-2">
            <h2 className="text-xl font-semibold tracking-wide">{name}</h2>
          </div>
          <p className="text-gray-800">{description.slice(0, 400) + "..."}</p>
        </div>
      </Link>
    </>
  );
}
export default Card;
