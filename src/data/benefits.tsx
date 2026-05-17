import {
    FiBarChart2,
    FiBriefcase,
    FiDollarSign,
    FiLock,
    FiPieChart,
    FiShield,
    FiTarget,
    FiTrendingUp,
    FiUser,
} from "react-icons/fi";

import { IBenefit } from "@/types";

export const benefits: IBenefit[] = [
    {
        title: "Proteccion Marina",
        description:
            "Recubrimientos de alto rendimiento para buques mercantes, tanqueros y embarcaciones industriales. Protección integral desde la quilla hasta la superestructura.",
        bullets: [
            {
                title: "Obra Viva",
                description:
                    "Sistemas de pintura antifouling y anticorrosivos (1-10 años de protección), certificados IMO/ASTM para máxima eficiencia y cumplimiento normativo.",
                icon: <FiBarChart2 size={26} />,
            },
            {
                title: "Obra Muerta y Superestructura",
                description:
                    "Recubrimientos epoxi y poliuretanos de alta resistencia: máxima protección anticorrosiva con acabado duradero y estético.",

                icon: <FiTarget size={26} />,
            },
            {
                title: "Sala de Máquinas y Tanques de Lastre",
                description:
                    "Pinturas epoxi y alquídicas especializadas para espacios confinados, con resistencia química y tratamiento anti-corrosivo en ambientes húmedos.",
                icon: <FiTrendingUp size={26} />,
            },
        ],
        imageSrc: "/images/barco.webp",
    },
    {
        title: "Oil & Gas",
        description:
            "Soluciones avanzadas de recubrimiento para infraestructuras críticas en la industria petrolera y gasífera. Protección especializada contra corrosión, químicos agresivos y temperaturas extremas, cumpliendo con normas PDVSA, ISO y estándares internacionales.",
        bullets: [
            {
                title: "Tanques de Almacenamiento",
                description:
                    "Sistemas de recubrimiento epoxi y poliuretano de alta resistencia para interior y exterior, diseñados para resistir hidrocarburos, derivados y condiciones ambientales severas con protección a largo plazo.",
                icon: <FiDollarSign size={26} />,
            },
            {
                title: "Altas Temperaturas",
                description:
                    "Recubrimientos cerámicos y silicatos especializados para equipos expuestos a temperaturas extremas (hasta 1000°C), con o sin aislamiento térmico, manteniendo integridad estructural.",
                icon: <FiBriefcase size={26} />,
            },
            {
                title: "Offshore y Onshore",
                description:
                    "Protección integral para plataformas marinas y instalaciones terrestres, incluyendo colores RAL específicos para identificación y resistencia a ambientes salinos, UV y erosión.",
                icon: <FiPieChart size={26} />,
            },
        ],
        imageSrc: "/images/refineria.webp",
    },
    {
        title: "Fábricas y Plantas Industriales",
        description:
            "Protección integral para entornos industriales: desde estructuras metálicas hasta pisos y maquinaria. Soluciones técnicas que combinan resistencia química, durabilidad y seguridad operativa.",
        bullets: [
            {
                title: "Pisos Industriales",
                description:
                    "Sistemas de poliuretano y epoxi autonivelantes para pisos de alto tráfico, con aditivos anti-deslizantes, resistencia a impactos químicos y capacidad de soportar cargas pesadas.",
                icon: <FiLock size={26} />,
            },
            {
                title: "Estructuras Metálicas",
                description:
                    "Recubrimientos anticorrosivos de última generación para naves industriales, soportes y equipos estructurales, con protección contra humedad, fuego y degradación ambiental.",
                icon: <FiUser size={26} />,
            },
            {
                title: "Equipos y Maquinarias",
                description:
                    "Pinturas industriales especializadas para protección y identificación de maquinaria, con acabados resistentes a aceites, grasas y abrasión mecánica en entornos de producción.",
                icon: <FiShield size={26} />,
            },
        ],
        imageSrc: "/images/fabrica.webp",
    },
];
