const CheckmarkIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-golden-glow flex-shrink-0 mt-1">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m9 11 3 3L22 4" />
    </svg>
);

const FoundersExperience = () => {
    const experienceFeatures = [
        "Sumérgete en la Comunidad: un círculo privado con guías y contenido diario para tu evolución.", "Recibe tu Oráculo Diario: una carta de poder y un mensaje de guía para iluminar tu camino.",
        "Despierta tu consciencia con una Reflexión Diaria para tu introspección y autoconocimiento.", "Recibe Pausas de Consciencia: impulsos del Mentor para anclarte en el presente y recargar tu energía."
    ];

    return (
        <section id="experience" className="py-20 px-[5%] bg-black/20">
            <div className="relative text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                <h2 className="font-philosopher text-golden-glow text-4xl lg:text-5xl mb-4 relative inline-block px-4">
                    <span className="relative z-10">Tu Experiencia como Fundador</span>
                    <div className="absolute -inset-x-4 -inset-y-2 bg-[radial-gradient(ellipse_at_center,rgba(255,195,113,0.2)_40%,rgba(255,195,113,0)_80%)] blur-xl -z-0"></div>
                </h2>
                <p className="text-lg text-off-white-text/80 mt-6">Estas son las herramientas y espacios que podrás probar y ayudarnos a perfeccionar.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
                <ul className="list-none p-0 flex flex-col gap-4">
                    {experienceFeatures.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <CheckmarkIcon />
                            <span className="text-lg text-off-white-text/90">{feature}</span>
                        </li>
                    ))}
                </ul>
                <div className="flex flex-col items-center">
                    <h3 className="text-2xl font-philosopher text-golden-glow/90 font-bold text-center mb-5">El Oráculo de Trascendit</h3>
                    <div className="flex justify-center items-end w-full gap-2 sm:gap-4 mt-5">
                        <img className="max-w-[100px] sm:max-w-[120px] rounded-lg transition-all duration-300 [filter:drop-shadow(0_0_15px_rgba(255,195,113,0.4))] hover:-translate-y-2 hover:[filter:drop-shadow(0_0_20px_rgba(255,195,113,0.6))]" src="https://imagenes.trascenderbot.com/lasemilla.jpg" alt="Carta del Oráculo La Semilla" />
                        <img className="max-w-[100px] sm:max-w-[120px] rounded-lg transition-all duration-300 [filter:drop-shadow(0_0_15px_rgba(255,195,113,0.4))] hover:-translate-y-2 hover:[filter:drop-shadow(0_0_20px_rgba(255,195,113,0.6))] relative -top-4" src="https://imagenes.trascenderbot.com/elpuente.jpg" alt="Carta del Oráculo El Puente" />
                        <img className="max-w-[100px] sm:max-w-[120px] rounded-lg transition-all duration-300 [filter:drop-shadow(0_0_15px_rgba(255,195,113,0.4))] hover:-translate-y-2 hover:[filter:drop-shadow(0_0_20px_rgba(255,195,113,0.6))]" src="https://imagenes.trascenderbot.com/lamontaña.jpg" alt="Carta del Oráculo La Montaña" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoundersExperience;
