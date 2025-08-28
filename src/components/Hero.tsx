import { useState, useEffect } from 'react';

const Hero = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 100);
        return () => clearTimeout(timer);
    }, []);

    return (
        <section id="hero" className="w-full min-h-screen flex flex-col items-center justify-center text-center px-4 pt-28 pb-20">
            <div id="hero-content" className={`max-w-4xl transition-all duration-1000 ease-in-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <h1 className="font-philosopher text-golden-glow text-5xl sm:text-6xl md:text-7xl leading-tight font-bold [text-shadow:0_0_20px_#ffc371] break-words">
                    ¿Sientes que hay algo más grande para ti?
                </h1>
                <p className="text-xl sm:text-2xl text-off-white-text/80 max-w-3xl mx-auto my-8">
                    Has despertado. Sientes la llamada a evolucionar, pero el camino parece solitario y confuso. No estás solo. <span className="font-bold text-golden-glow [text-shadow:0_0_10px_#ffc371]">Trascendit</span> nace para ser tu brújula.
                </p>
                <h2 className="font-philosopher text-white text-3xl sm:text-4xl md:text-5xl leading-tight font-bold mb-8">
                    Buscamos a 20 Pioneros para Forjar el Futuro.
                </h2>
                <a href="#application" className="inline-block bg-golden-glow text-deep-black-bg font-bold px-12 py-4 rounded-full text-xl no-underline animate-pulse-glow">
                    Quiero Ser Fundador
                </a>
                <p className="mt-6 text-off-white-text/60">Las aplicaciones son gratuitas y sin compromiso.</p>
            </div>
        </section>
    );
};

export default Hero;
