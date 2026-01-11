import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of web development projects and applications.",
  openGraph: {
    title: "Projects | Nicolò Pacucci",
    description:
      "Explore my portfolio of web development projects and applications.",
  },
};

export default function ProjectsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
