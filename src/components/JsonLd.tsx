import { siteDetails } from "@/data/siteDetails";
import { footerDetails } from "@/data/footer";
import { faqs } from "@/data/faq";

export default function JsonLd() {
    const organizationSchema = {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: siteDetails.siteName,
        url: siteDetails.siteUrl,
        logo: `${siteDetails.siteUrl}/logos/logoAj.png`,
        contactPoint: {
            "@type": "ContactPoint",
            telephone: footerDetails.telephone,
            email: footerDetails.email,
            contactType: "customer service",
        },
        sameAs: Object.values(footerDetails.socials).filter(Boolean),
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
                "@type": "Answer",
                text: faq.answer,
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(organizationSchema),
                }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(faqSchema),
                }}
            />
        </>
    );
}
