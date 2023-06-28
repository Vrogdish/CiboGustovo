import About from "@/modules/About";
import Event from "@/modules/Event";
import HeroSection from "@/modules/HeroSection";
import Menu from "@/modules/Menu";
import Team from "@/modules/Team";

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
