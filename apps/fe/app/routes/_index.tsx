import type { MetaFunction } from "@remix-run/node";
import { Header } from "~/components/header";
import { HeroSection } from "~/components/hero-section";
import { Footer } from "~/components/footer";

export const meta: MetaFunction = () => {
  return [
    { title: "Crop Studio - AI-Powered Image Editing" },
    { name: "description", content: "Transform your images with AI-powered editing tools" },
  ];
};

export default function Index() {
  return (
    <main className="bg-black">
      <Header />
      <HeroSection />
      <Footer />
    </main>
  );
}