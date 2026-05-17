import React from "react";

const Hero: React.FC = () => {
    return (
       <section
    id="hero"
    className="relative flex items-center justify-center pb-0 pt-32 md:pt-40 px-5 min-h-[500px] md:min-h-[700px]"
>
    {/* Fondo con imagen */}
    <div className="absolute inset-0 -z-10">
        {/* Imagen de fondo */}
        <div
            className="absolute inset-0 bg-cover bg-center min-h-[400px]"
            style={{
                backgroundImage: "url('/images/fondoPlataforma.webp')",
                backgroundPosition: "center center",
            }}
        ></div>

        {/* Mejoré el gradiente para mejor contraste con texto */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-blue-900/50 to-transparent"></div>
    </div>

    {/* Contenido optimizado */}
    <div className="container mx-auto text-left w-full px-4">
        <div className="max-w-2xl lg:max-w-3xl">
            {/* Título principal con jerarquía visual */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-6">
                <span className="block">La corrosion no descansa,</span>
                <span className="text-yellow-400">nosotros tampoco!</span>
            </h1>
            
            {/* Subtítulo con valor agregado */}
            <p className="text-xl md:text-2xl text-white/90 mb-8">
                Soluciones en pinturas industriales y marinas con asesoría técnica especializada para protección duradera.
            </p>
            
            {/* Botones de acción */}
            
            
            {/* Elemento de confianza (opcional) */}
            <div className="mt-10 flex items-center">
                <svg className="w-5 h-5 text-yellow-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <span className="text-white/80 font-medium">+100 proyectos protegidos desde 2024</span>
            </div>
        </div>
    </div>
</section>
    );
};

export default Hero;
