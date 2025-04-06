import Header from "@/components/header/header";
import Hero from "@/components/home/home";
import Content from "@/components/content/content";
import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Hero />
        <Content />
      </main>
      <footer></footer>
      <Script src="/script.js" strategy="beforeInteractive" />
    </div>
  );
}
