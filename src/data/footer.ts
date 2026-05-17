import { IMenuItem, ISocials } from "@/types";


export const footerDetails: {
    subheading: string;
    quickLinks: IMenuItem[];
    email: string;
    telephone: string;
    socials: ISocials;
} = {
    subheading: "La corrosion no duerme, nosotros tampoco.",
    quickLinks: [
        {
            text: "Marcas",
            url: "#logos"
            
        },
        {
            text: "Pinturas",
            url: "#features"
            
        },
        {
            text: "Faqs",
            url: "#faq"
            
        }
    ],
    email: 'ventas@ajsindustrial.com',
    telephone: '+58 (424) 839-9057',
    socials: {
        // github: 'https://github.com',
        // x: 'https://twitter.com/x',
        //twitter: 'https://twitter.com/Twitter',
        //facebook: 'https://facebook.com',
        // youtube: 'https://youtube.com',
        linkedin: 'https://www.linkedin.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/ajsupplyindustrial',
        whatsapp : 'https://wa.me/584248399057',
    }
}