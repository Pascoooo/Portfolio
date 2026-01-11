import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pasco's Resume",
  description:
    "Explore my resume, including my skills, experience, and education.",
  openGraph: {
    title: "Resume | Nicolò Pacucci",
    description:
      "Explore my resume, including my skills, experience, and education.",
  },
};

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
