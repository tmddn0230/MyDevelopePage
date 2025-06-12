import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import HeaderBanner from "@/Components/HeaderBanner";
import SideProfileCard from "@/Components/SideProfileCard";
import IntroSection from "@/Components/IntroSection";
import AlgorithmPost from "@/Components/AlgorithmPost";
import PortFolioCardSection from "@/Components/PortfolioCardSection"


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div
      className={`${geistSans.className} ${geistMono.className} grid grid-rows-[auto_1fr_auto] min-h-screen gap-12 px-6 py-12 sm:px-12 font-[family-name:var(--font-geist-sans)]`}
    >
      <HeaderBanner />

      <main className="max-w-screen-xl mx-auto grid grid-cols-[280px_1fr] gap-8 w-full">
        {/* 좌측: 프로필 카드 */}
        <SideProfileCard />

        {/* 우측: 전체 콘텐츠 */}
        <div className="flex flex-col gap-12">
          <IntroSection />
          <PortFolioCardSection />
          <AlgorithmPost />

          <ol className="list-decimal list-inside text-sm leading-relaxed space-y-2">
            <li>
              Get started by editing{" "}
              <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono font-semibold">
                src/pages/index.tsx
              </code>
              .
            </li>
            <li>Save and see your changes instantly.</li>
          </ol>

          <div className="flex gap-4 items-center flex-col sm:flex-row">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
              href="https://vercel.com/new"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                className="dark:invert"
                src="/MyDevelopePage/vercel.svg"
                alt="Vercel logomark"
                width={20}
                height={20}
              />
              Deploy now
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read our docs
            </a>
          </div>
        </div>
      </main>

      <footer className="flex flex-wrap gap-6 justify-center text-sm text-gray-500">
        <a href="https://nextjs.org/learn" className="hover:underline flex items-center gap-2">
          <Image src="/MyDevelopePage/file.svg" alt="file" width={16} height={16} />
          Learn
        </a>
        <a href="https://vercel.com/templates" className="hover:underline flex items-center gap-2">
          <Image src="/MyDevelopePage/window.svg" alt="window" width={16} height={16} />
          Examples
        </a>
        <a href="https://nextjs.org" className="hover:underline flex items-center gap-2">
          <Image src="/MyDevelopePage/globe.svg" alt="globe" width={16} height={16} />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}