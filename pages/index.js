import { NextSeo } from "next-seo";
import { StructuredData } from "../components/seo";
import { Hero } from "../components/hero";
import { About } from "../components/about";
import { Arsenal } from "../components/arsenal";
import { Experience } from "../components/experience";
import { Work } from "../components/work";
import { Contact } from "../components/contact";

export default function Home() {
  return (
    <>
      <NextSeo
        title="Damilola Akinlade | Software Engineer"
        description="Welcome to my portfolio. I'm a Software Engineer specializing in React, Next.js, and creating exceptional digital experiences."
        openGraph={{
          title: "Damilola Akinlade | Software Engineer",
          description:
            "Welcome to my portfolio. I'm a Software Engineer specializing in React, Next.js, and creating exceptional digital experiences.",
          url: "https://damak.dev",
          type: "website",
        }}
      />
      <StructuredData />
      <Hero />
      <main>
        <About />
        <Arsenal />
        <Experience />
        <Work />
        <Contact />
      </main>
    </>
  );
}
