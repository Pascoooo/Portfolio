import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Overview from "@/components/home/overview";
import Projects from "@/components/home/projects";
import NowPlaying from "@/components/home/now-playing";

export default function Home() {
  return (
    <div className="w-full h-full">
      <Hero />
      <Overview />
      <Projects />
      <About />
      <NowPlaying />
    </div>
  );
}
