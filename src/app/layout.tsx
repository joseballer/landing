import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Source_Sans_3, Manrope } from "next/font/google";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import { siteDetails } from "@/data/siteDetails";

import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: siteDetails.metadata.title,
    description: siteDetails.metadata.description,
    metadataBase: new URL(siteDetails.siteUrl),
    alternates: {
        canonical: siteDetails.siteUrl,
    },
    icons: {
        icon: "/favicon.ico",
    },
    manifest: "/manifest.json",
    openGraph: {
        title: siteDetails.metadata.title,
        description: siteDetails.metadata.description,
        url: siteDetails.siteUrl,
        type: "website",
        images: [
            {
                url: "/images/og-image.png",
                width: 1200,
                height: 675,
                alt: siteDetails.siteName,
            },
        ],
    },
    twitter: {
        card: "summary_large_image",
        title: siteDetails.metadata.title,
        description: siteDetails.metadata.description,
        images: ["/images/twitter-image.png"],
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="es">
            <body
                className={`${manrope.className} ${sourceSans.className} antialiased`}
            >
                {process.env.GOOGLE_ANALYTICS_ID && (
                    <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID} />
                )}
                <JsonLd />
                <Header />
                <main>{children}</main>
                <Footer />
            </body>
        </html>
    );
}
