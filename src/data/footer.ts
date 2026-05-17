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
        // youtube: 'https://youtube.com',
        // threads: 'https://www.threads.net',
        instagram: 'https://www.instagram.com/ajsupplyindustrial',
        whatsapp : 'https://wa.me/584248399057',
    }
}