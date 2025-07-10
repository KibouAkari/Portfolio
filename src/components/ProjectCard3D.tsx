"use client";

import { useRef } from "react";
import Image from "next/image";

export default function ProjectCard3D({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const resetRotation = () => {
    const card = cardRef.current;
    if (card) card.style.transform = "rotateX(0deg) rotateY(0deg)";
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseLeave={resetRotation}
      className="w-full max-w-sm perspective cursor-pointer"
    >
      <div
        ref={cardRef}
        className="bg-gray-800 rounded-xl shadow-xl p-4 transform-style-3d transition-transform duration-300"
      >
        <Image
          src={image}
          alt={title}
          width={400}
          height={250}
          className="rounded-md object-cover w-full h-56"
        />
        <h3 className="text-xl font-bold mt-4">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
      </div>
    </div>
  );
}
