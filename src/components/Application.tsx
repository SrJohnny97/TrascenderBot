const Application = () => {
    return (
        <section id="application" className="py-20 px-[5%] text-center bg-black/50">
            <div className="max-w-4xl mx-auto animate-fade-in-up">
                <h2 className="text-4xl lg:text-5xl font-philosopher text-golden-glow mb-6 relative inline-block px-4 [text-shadow:0_0_15px_#ffc371]">
                    <span className="relative z-10">Tu Momento es Ahora.<br />El Círculo te Espera.</span>
                    <div className="absolute -inset-x-4 -inset-y-2 bg-[radial-gradient(ellipse_at_center,rgba(255,195,113,0.2)_40%,rgba(255,195,113,0)_80%)] blur-xl -z-0"></div>
                </h2>
                <p className="text-lg sm:text-xl text-off-white-text/80 max-w-3xl mx-auto mb-8 mt-6">
                    Has sentido la llamada a ser más, a vivir con un propósito más profundo. Aquí encontrarás las herramientas y la guía para convertir esa aspiración en tu realidad diaria. Es el momento de comprometerte contigo y construir activamente tu mejor versión. El siguiente paso es tuyo.
                </p>
                <div className="text-center">
                    <a 
                        href="https://t.me/TrascenditBot"
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="mt-4 inline-block bg-golden-glow text-deep-black-bg font-bold px-16 py-5 rounded-full text-2xl no-underline transition-all duration-300 shadow-lg shadow-golden-glow/30 hover:scale-105 hover:bg-white animate-pulse-glow"
                    >
                        Comenzar mi Transformación
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Application;
