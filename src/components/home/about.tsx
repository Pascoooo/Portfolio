"use client";

import {
  Code,
  Link,
  MapPin,
  TerminalIcon,
  Wrench,
} from "lucide-react";
import Section from "../section";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import Globe from "./about/globe";
import { socialMedia, technologies, currentlyLearningModules } from "@/lib/data";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { IntellijOriginal } from "devicons-react";

import { FollowerPointerCard } from "../ui/following-pointer";

export default function About() {
  return (
    <Section className="flex items-center" title="Bits & Pieces of Me">
      <BentoGrid className="w-full mx-auto md:grid-cols-8 grid-cols-2 md:grid-rows-10 md:h-[420px]">
        <BentoGridItem
          className="col-span-2 md:col-span-4 md:row-span-4 select-none"
          hoverText="I live in Bari!"
          header="Italy"
          HeaderIcon={MapPin}
        >
          <Location />
        </BentoGridItem>
        <BentoGridItem
          hideCursor
          className="min-h-0 col-span-2 md:col-span-4 md:row-span-6"
          header="Connect"
          HeaderIcon={Link}
        >
          <Connect />
        </BentoGridItem>
        <BentoGridItem
          className="min-h-0 col-span-2 md:col-span-4 md:row-span-6"
          header="Technologies"
          HeaderIcon={Wrench}
        >
          <Technologies />
        </BentoGridItem>
        <BentoGridItem
          className="min-h-0 col-span-1 md:col-span-2 md:row-span-4"
          header="Fav Tool"
          HeaderIcon={TerminalIcon}
          hoverText="IntelliJ IDEA"
        >
          <FavoriteTool />
        </BentoGridItem>
        <BentoGridItem
          className="min-h-0 md:col-span-2 md:row-span-4"
          header="Now Learning"
          HeaderIcon={Code}
        >
          <FavoriteLanguage />
        </BentoGridItem>
      </BentoGrid>
    </Section>
  );
}

const Location = () => {
  return (
    <div className="absolute left-[20%] bottom-[-80%] md:bottom-[-120%] cursor-none">
      <Globe width={400} height={400} />
    </div>
  );
};

const Connect = ({ }) => (
  <div className="h-full flex flex-col gap-2 text-body md:text-body-desktop text-foreground/50">
    {socialMedia.map((social, index) => (
      <FollowerPointerCard
        hideCursor
        key={"social.platform-" + index}
        title={`@${social.username}`}
      >
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-2 items-center hover:text-foreground transition-colors"
        >
          <social.icon size={20} />
          {social.platform}
        </a>
      </FollowerPointerCard>
    ))}
  </div>
);

const Technologies = () => {
  const learningKeys = ["react", "nextjs", "nodejs", "javascript", "typescript", "tailwindcss"];
  const allTechnologies = Object.values(technologies).flatMap((category) =>
    Object.entries(category)
      .filter(([key]) => !learningKeys.includes(key))
      .map(([, value]) => value)
  );

  const blackIcons = ["Markdown", "LaTeX", "Next.js", "GitHub", "C"];

  return (
    <div className="grid grid-cols-4 md:grid-cols-5 place-items-center justify-center h-full gap-4 md:gap-2">
      {allTechnologies.map((tech, index) => (
        <FollowerPointerCard title={tech.name} key={"tech-" + index}>
          <motion.div className="transition-colors duration-200">
            <tech.icon
              size={32}
              className={`transition-all duration-200 md:grayscale hover:grayscale-0 ${blackIcons.includes(tech.name) ? "dark:invert" : ""
                }`}
            />
          </motion.div>
        </FollowerPointerCard>
      ))}
    </div>
  );
};

const FavoriteTool = () => {
  return (
    <div className="flex items-center justify-center h-full -mt-2">
      <IntellijOriginal
        size={50}
      />
    </div>
  );
};

const FavoriteLanguage = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % currentlyLearningModules.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const Tech = currentlyLearningModules[index];

  return (
    <div className="flex gap-2 items-center justify-center h-full">
      <motion.div
        key={Tech.name}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        className="flex items-center gap-2"
      >
        <Tech.icon size={28} className={Tech.name === "Next.js" ? "dark:invert" : ""} />
        <span className="font-bold text-foreground/70">{Tech.name}</span>
      </motion.div>
    </div>
  );
};
