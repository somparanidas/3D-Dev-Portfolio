import type { Metadata } from "next";
import { Poppins as FontSans } from "next/font/google";
import "@/app/styles/globals.css";
import SEO from "@/app/components/SEO";

const fontSans = FontSans({
	subsets: ["latin"],
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-sans",
});
export const metadata: Metadata = {
  title: "Sompa Rani Das | Creative 3D Developer Portfolio",
  description: "Award-winning Full-Stack Developer specializing in immersive 3D web experiences. Expert in React, Next.js, Three.js, and WebGL.",
  generator: "Next.js",
  applicationName: "Sompa Rani Das Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: ["3D Developer", "Creative Developer", "WebGL", "Three.js", "React", "Next.js", "Portfolio", "UI/UX Design", "Full Stack Developer"],
  authors: [{ name: "Sompa Rani Das", url: "https://somparani.netlify.app" }],
  colorScheme: "dark light",
  creator: "Sompa Rani Das",
  publisher: "Sompa Rani Das",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://somparani.netlify.app"),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "google-site-verification-code", // You should add your actual Google verification code
  },
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<SEO />
			</head>
			<body className={fontSans.variable}>{children}</body>
		</html>
	);
}
