import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `¿${siteDetails.siteName} cumple con normas industriales en sus productos?`,
        answer: 'Todos nuestros recubrimientos cumplen con las normas ISO, ASTM, PDVSA y otras regulaciones aplicables. Proporcionamos certificados de calidad y fichas técnicas con cada compra.',
    },
    {
        question: `¿Qué métodos de pago aceptan en ${siteDetails.siteName}?`,
        answer: 'Aceptamos transferencias bancarias, efectivo en tienda (Barcelona, Anzoátegui), y pagos móviles. Para pedidos por WhatsApp/correo enviamos detalles de pago con factura electrónica.',
    },
    {
        question: '¿Hacen envíos a otras ciudades de Venezuela?',
        answer: 'Sí, coordinamos envíos nacionales vía transporte seguro. El costo varía según cantidad y destino (cotizamos sin compromiso por WhatsApp).',
    },
    {
        question: '¿Pueden asesorarme técnicamente para elegir el recubrimiento ideal?',
        answer: `¡Claro! Nuestros expertos analizarán tu proyecto (ambiente, sustrato, normativas) para recomendarte el producto óptimo. Contáctanos vía WhatsApp/correo con tus requerimientos.`,
    },
    {
        question: '¿Qué garantías ofrecen en sus productos?',
        answer: 'Garantizamos la calidad original del fabricante. Si hay inconvenientes (lote defectuoso, daño en transporte), nuestro equipo resolverá según protocolos industriales establecidos.'
    }
];