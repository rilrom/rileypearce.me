import React, { ElementType } from "react";
import Image, { StaticImageData } from "next/image";

interface CardProps {
  image: StaticImageData;
  alt: string;
  link: string;
  heading: string;
  headingLevel?: ElementType;
  description: string;
}

export default function Card(props: CardProps) {
  const { image, alt, link, heading, headingLevel = "h2", description } = props;

  const Heading = headingLevel;

  return (
    <div className="flex flex-col items-center relative transition-all bg-neutral-800 border border-neutral-700 rounded-lg shadow md:flex-row hover:bg-neutral-700">
      <Image
        src={image}
        alt={alt}
        className="object-cover w-full h-auto rounded-t-lg md:rounded-none md:rounded-s-lg"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <Heading className="mb-2 text-2xl font-bold tracking-tight text-neutral-100">
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            title="Opens in a new window"
            className="stretched-link"
          >
            {heading}
          </a>
        </Heading>
        <p className="mb-3 font-normal text-neutral-400">{description}</p>
      </div>
    </div>
  );
}
