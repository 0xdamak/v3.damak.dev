import Head from "next/head";

export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Damilola Akinlade",
    jobTitle: "Software Engineer",
    description:
      "Software Engineer specializing in React, Next.js, and modern web technologies",
    url: "https://damak.dev",
    sameAs: [
      "https://github.com/0xdamak",
      "https://linkedin.com/in/0xdamak",
      "https://twitter.com/0xdamak",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Frontend Development",
      "Web Development",
      "Software Engineering",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
    </Head>
  );
}
