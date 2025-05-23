import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser } from "react-icons/fi";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Proteccion Marina",
        description: "Recubrimientos de alto rendimiento para buques mercantes, tanqueros y embarcaciones industriales. Protección integral desde la quilla hasta la superestructura.",
        bullets: [
            {
                title: "Obra Viva",
                description: "Sistemas de pintura antifouling y anticorrosivos (1-10 años de protección), certificados IMO/ASTM para máxima eficiencia y cumplimiento normativo.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Obra Muerta y Superestructura",
                description: "Recubrimientos epoxi y poliuretanos de alta resistencia: máxima protección anticorrosiva con acabado duradero y estético.",
            
                icon: <FiTarget size={26} />
            },
            {
                title: "Sala de Máquinas y Tanques de Lastre",
                description: "Pinturas epoxi y alquídicas especializadas para espacios confinados, con resistencia química y tratamiento anti-corrosivo en ambientes húmedos.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/barcos.png"
    },
    {
        title: "Seamless Investing",
        description: "Start building wealth today, no financial degree required. Finwise makes investing accessible and straightforward.",
        bullets: [
            {
                title: "Micro-Investing",
                description: "Begin with as little as $1 and watch your money grow.",
                icon: <FiDollarSign size={26} />
            },
            {
                title: "Expert Portfolios",
                description: "Choose from investment strategies tailored to your risk tolerance.",
                icon: <FiBriefcase size={26} />
            },
            {
                title: "Real-Time Performance",
                description: "Track your investments with easy-to-understand metrics and visuals.",
                icon: <FiPieChart size={26} />
            }
        ],
        imageSrc: "/images/refineria.png"
    },
    {
        title: "Bank-Grade Security",
        description: "Your financial data deserves the best protection. Rest easy knowing Finwise employs cutting-edge security measures.",
        bullets: [
            {
                title: "Military-Grade Encryption",
                description: "Your information is safeguarded with the highest level of encryption.",
                icon: <FiLock size={26} />
            },
            {
                title: "Biometric Authentication",
                description: "Access your account securely with fingerprint or facial recognition.",
                icon: <FiUser size={26} />
            },
            {
                title: "Real-Time Fraud Detection",
                description: "Our system constantly monitors for suspicious activity to keep your money safe.",
                icon: <FiShield size={26} />
            }
        ],
        imageSrc: "/images/fabrica.png"
    },
]