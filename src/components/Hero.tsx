import React from "react";

const Hero: React.FC = () => {
    return (
        <section
            id="hero"
            className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 min-h-[500px] md:min-h-[700px]"
        >
            {/* Fondo con imagen */}
            <div className="absolute inset-0 -z-10">
                {/* Imagen de fondo con altura mínima */}
                <div
                    className="absolute inset-0 bg-cover bg-center min-h-[400px]"
                    style={{
                        backgroundImage: "url('/images/fondoPlataforma.png')",
                        backgroundPosition: "center center",
                        backgroundAttachment: "fixed", // Opcional para efecto parallax
                    }}
                ></div>

                {/* Opacidad personalizada si necesitas */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-white/40 to-transparent"></div>
            </div>

            {/* Contenido */}
            <div className="text-center w-full">
                {/* Tu contenido actual aquí */}
            </div>
        </section>
    );
};

export default Hero;
