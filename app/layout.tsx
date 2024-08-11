import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import {Footer} from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import { AOSInit } from './aos'

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: "I'm a third-year Computer Science student at the University of California, Davis. With a passion for solving problems one Product at a time. Starting from my dorm room projects, I've cultivated a versatile skill set through diverse client engagements and hands-on Experience",
  icons: {
    icon: "/me.png",
  },
};


export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "blue",  },
    

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