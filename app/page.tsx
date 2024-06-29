import About from "@/components/templates/about";
import Projects from "@/components/templates/projects";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BB Jamaat",
  description: "",
};

export default function Home() {
  return (
    <>
      <About />
      <Projects />
    </>
  );
}
