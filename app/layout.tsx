
import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import { Link } from "@nextui-org/link";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { SparklesCore } from "@/components/sparkles";
import {Footer} from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import Chat from "@/components/chat";
import { AOSInit } from './aos'


export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/me.png",
  },
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <link rel="stylesheet" href="bower_components/aos/dist/aos.css" />
      <AOSInit />


      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
        <Navbar />

        <section className="flex flex-col items-center justify-center gap-4 ">

      <div className="inline-block justify-center md:ml-10 sm:ml-10">
      <SpeedInsights/>
      <Analytics/>
        {children}
            </div>
    </section>   
    <Footer/>
    </Providers>

    <script src="bower_components/aos/dist/aos.js"></script>

      </body>

    </html>
  );
}