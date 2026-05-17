import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `¿${siteDetails.siteName} cumple con normas industriales en sus productos?`,
        answer: 'Todos nuestros recubrimientos cumplen con las normas ISO, ASTM, PDVSA y otras regulaciones aplicables. Proporcionamos certificados de calidad y fichas técnicas con cada compra.',
    },
    {
        question: `¿Qué métodos de pago aceptan en ${siteDetails.siteName}?`,
        answer: 'Aceptamos transferencias bancarias, pago móvil, efectivo en tienda (Barcelona, Anzoátegui) y pagos en divisa. Contáctanos vía WhatsApp o correo.',
    },
    {
        question: '¿Hacen envíos a otras ciudades de Venezuela?',
        answer: 'Sí, coordinamos envíos nacionales vía transporte seguro. El costo varía según cantidad y destino (cotizamos sin compromiso por WhatsApp).',
    },
    {
        question: '¿Pueden asesorarme técnicamente para elegir el recubrimiento ideal?',
        answer: `¡Claro! Nuestros expertos analizarán tu proyecto (ambiente, sustrato, normativas) para recomendarte el producto óptimo. Contáctanos vía WhatsApp o correo (ventas@ajsindustrial.com) con tus requerimientos.`,
    },
    {
        question: '¿Qué garantías ofrecen en sus productos?',
        answer: 'Garantizamos la calidad original del fabricante. Si hay inconvenientes, contamos con el respaldo de las marcas para resolver cualquier situación según los protocolos establecidos.'
    }
];