import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import SectionContainer from "@/components/SectionContainer";
import { ThemeProvider } from "@/components/theme/ThemeContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Frontend Scratch",
  description: "Awesome site for Frontend Developers!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={`${inter.className} bg-white pl-[calc(100vw-100%)] text-black dark:bg-gray-950 dark:text-white`}>
        <ThemeProvider>
          <SectionContainer>
            <div className="h-screen flex flex-col justify-between font-sans">
              <Header />
              {children}
              <Footer />
            </div>
          </SectionContainer>
        </ThemeProvider>
      </body>
    </html>
  );
}
