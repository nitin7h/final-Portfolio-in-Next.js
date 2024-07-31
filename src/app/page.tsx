import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Hero2 from "@/components/Hero2";
import Skills from "@/components/Skills";
export default function Home() {
  return (
    <main>
      {/* <Hero></Hero> */}
      <Hero2></Hero2>
      <Skills></Skills>
      <Projects></Projects>
      <Services></Services>
      <Contact></Contact>
      <About></About>
    </main>
  );
}
