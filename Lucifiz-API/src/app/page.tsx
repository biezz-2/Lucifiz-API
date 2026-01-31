import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Pricing } from "@/components/sections/pricing";
import { Playground } from "@/components/sections/playground";
import { CodeExamples } from "@/components/sections/code-examples";
import { Testimonials } from "@/components/sections/testimonials";
import { GithubCTA } from "@/components/sections/github-cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-lucifiz-bg flex flex-col">
      <Navbar />
      <Hero />
      <Features />
      <Playground />
      <CodeExamples />
      <Pricing />
      <Testimonials />
      <GithubCTA />
      <Footer />
    </main>
  );
}
