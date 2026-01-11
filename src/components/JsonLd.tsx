import { about, socialMedia } from "@/lib/data";

export default function JsonLd() {
  const { name, realName, descriptions, work, location } = about();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: realName,
    alternateName: name,
    description: descriptions[0],
    jobTitle: work[0],
    address: {
      "@type": "PostalAddress",
      addressCountry: location,
    },
    url: "https://pasco.dev",
    sameAs: socialMedia.map((social) => social.url),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
