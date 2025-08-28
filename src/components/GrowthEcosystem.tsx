import { Library, Sun, Users, Sprout } from 'lucide-react';

const GrowthEcosystem = () => {
    const features = [
        { icon: Library, title: "Biblioteca Esotérica", description: "Acceso a una base de conocimiento curada sobre alquimia, tarot, sueños y más, en constante expansión." },
        { icon: Sun, title: "Guía Diaria", description: "Cada día recibirás contenido de alto valor, guías y reflexiones sobre diferentes temas para impulsar tu evolución." },
        { icon: Users, title: "Círculo de Apoyo Privado", description: "Conecta con otros miembros de la comunidad en un espacio seguro para compartir, aprender y evolucionar juntos." },
        { icon: Sprout, title: "Tu Evolución Espiritual", description: "Un espacio dedicado para que compartas tus avances, descubrimientos y la transformación que vives en tu camino." }
    ];

    return (
        <section id="growth-ecosystem" className="py-20 px-[5%] bg-black/30">
            <div className="relative text-center max-w-4xl mx-auto mb-12 animate-fade-in-up">
                <h2 className="font-philosopher text-golden-glow text-4xl lg:text-5xl mb-4 relative inline-block px-4">
                    <span className="relative z-10">Un Ecosistema para tu Transformación</span>
                    <div className="absolute -inset-x-4 -inset-y-2 bg-[radial-gradient(ellipse_at_center,rgba(255,195,113,0.2)_40%,rgba(255,195,113,0)_80%)] blur-xl -z-0"></div>
                </h2>
                <p className="text-lg text-off-white-text/80 mt-6">Al unirte, no solo accedes a un mentor. Entras a un universo de herramientas y apoyo diseñados para la evolución integral: Mente, Cuerpo y Espíritu.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                {features.map((feature, index) => (
                    <div key={feature.title} className="flex flex-col items-center text-center gap-4 bg-night-blue-bg/50 p-6 rounded-lg border border-golden-glow/20 transition-all duration-300 hover:bg-night-blue-bg/80 hover:border-golden-glow/40 hover:-translate-y-2" style={{ animationDelay: `${index * 150}ms` }}>
                        <feature.icon className="w-10 h-10 text-golden-glow opacity-90" strokeWidth={1.5} />
                        <h3 className="text-xl font-bold text-off-white-text mt-2 font-philosopher">{feature.title}</h3>
                        <p className="text-off-white-text/70 text-sm">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GrowthEcosystem;
