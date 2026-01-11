"use client";

import Heading from "./components/heading";
import Repos from "./components/repos";

export default function ProjectPage() {
  return (
    <div className="min-h-screen relative pb-24">
      <div className="fixed inset-0 w-full h-full bg-dot-black/40 dark:bg-dot-white/30 -z-10" />
      <Heading />
      <Repos />
    </div>
  );
}
