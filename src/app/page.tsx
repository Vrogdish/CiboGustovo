import About from "@/components/section/About";
import Event from "@/components/section/Event";
import HeroSection from "@/components/section/HeroSection";
import Menu from "@/components/section/Menu";
import Team from "@/components/section/Team";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <About />
      <Menu />
      <Team />
      <Event />
    </main>
  );
}
