"use client";

import Section from "@/components/section";
import { LinkPreview } from "@/components/ui/link-preview";

export default function Heading() {
  return (
    <Section contentClassName="mt-12 md:mt-24 items-start flex flex-col gap-8">
      <h1 className="text-h2 font-bold sm:text-h1 md:text-h1-desktop">
        Welcome to My Creative Corner! 👋
      </h1>
      <div className="text-h2 font-bold sm:text-h1 md:text-h1-desktop text-foreground/75 dark:text-foreground/60">
        You&apos;ll find most of my code adventures on{" "}
        <LinkPreview
          url="https://github.com/Pascoooo"
          className="text-terminal-ronin-yellow"
        >
          GitHub
        </LinkPreview>
        . I&apos;ll be sharing updates on{" "}
        <LinkPreview
          url="https://instagram.com/nico.pacucci"
          className="text-terminal-sakura-pink"
        >
          Instagram
        </LinkPreview>
        ,{" "}
        <LinkPreview
          url="https://www.tiktok.com/@nico.pacucci"
          className="text-terminal-spring-green"
        >
          TikTok
        </LinkPreview>
        , and{" "}
        <LinkPreview
          url="https://youtube.com/@Pascooooo"
          className="text-terminal-peach-red"
        >
          YouTube
        </LinkPreview>
        .
      </div>
      <p className="text-h2 font-bold sm:text-h1 md:text-h1-desktop text-foreground/75 dark:text-foreground/60">
        Feel free to scroll down and check out what I&apos;ve been working on!
      </p>
    </Section >
  );
}
