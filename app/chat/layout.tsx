import Chat from "@/components/chat";
import { Metadata } from 'next';
import Head from 'next/head';
const SHARE_PREVIEW_IMAGE = 'https://i.ibb.co/7gLTWqc/Twitter-post-7.png';

const SHARE_METADATA = {
  title: "Check out this conversation",
  description: "Try it out by visiting mohnishgopi.com/chat",
  image: SHARE_PREVIEW_IMAGE,
  domain: "mohnishgopi.com",
};

export const metadata: Metadata = {
  title: 'Check out this conversation',
  description: 'Try it out by visiting mohnishgopi.com/chat',
  openGraph: {
    title: 'Check out this conversation',
    description: 'Try it out by visiting mohnishgopi.com/chat',
    images: [SHARE_PREVIEW_IMAGE],
    type: 'website',
    url: 'https://mohnishgopi.com/chat',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Check out this conversation',
    description: 'Try it out by visiting mohnishgopi.com/chat',
    images: [SHARE_PREVIEW_IMAGE],
    creator: '@yourtwitterhandle', // Optional: Add your Twitter handle
  },
};

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <Head>
        {/* Basic Meta Tags */}
        <meta name="title" content="Chat with Djungelskog" />
        <meta name="description" content="Check out my conversation with Djungelskog at mohnishgopi.com" />
        
        {/* Open Graph Meta Tags (Facebook, LinkedIn) */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://mohnishgopi.com/chat" />
        <meta property="og:title" content="Chat with Djungelskog" />
        <meta property="og:description" content="Check out my conversation with Djungelskog at mohnishgopi.com" />
        <meta property="og:image" content={SHARE_PREVIEW_IMAGE} />
        
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={SHARE_PREVIEW_IMAGE} />
      </Head>
      <div className="inline-block justify-center">
        {children}
      </div>
    </section>
  );
}