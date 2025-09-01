import { Gift, HeartHandshake, MessageSquare, Award } from 'lucide-react';

const FoundersBenefits = () => {
    const benefits = [
        { icon: Gift, title: "Estatus 'Pionero' (Para Siempre)", description: "Acceso premium total y gratuito por 1 mes. Al terminar, conservarás tu estatus especial y un precio reducido para siempre, como agradecimiento por ser de los primeros en unirte." },
        { icon: HeartHandshake, title: "Co-creador de tu Universo", description: "Tendrás el poder de influir directamente en la evolución de las herramientas. Tu visión y necesidades darán forma al universo Trascendit, asegurando que se convierta en la guía que siempre has buscado." },
        { icon: MessageSquare, title: "Línea Directa con el Creador", description: "Tus dudas serán resueltas y tus ideas escuchadas directamente por el creador. Un canal abierto para asegurar que tu viaje y tu evolución sean fluidos y sin bloqueos." },
        { icon: Award, title: "Legado de Pionero", description: "Tu nombre quedará inscrito como 'Pionero' de Trascendit. Un estatus de honor que te dará un lugar privilegiado y reconocimiento eterno dentro de la comunidad." }
    ];

    return (
        <section id="benefits" className="py-20 px-[5%] bg-black/40">
            <div className="relative text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                <h2 className="font-philosopher text-golden-glow text-4xl lg:text-5xl mb-4 relative inline-block px-4">
                    <span className="relative z-10">Una Oportunidad Única de Lanzamiento</span>
                    <div className="absolute -inset-x-4 -inset-y-2 bg-[radial-gradient(ellipse_at_center,rgba(255,195,113,0.2)_40%,rgba(255,195,113,0)_80%)] blur-xl -z-0"></div>
                </h2>
                <p className="text-lg text-off-white-text/80 mt-6">Al unirte durante nuestro lanzamiento en Septiembre, obtienes el estatus de 'Pionero'. Un reconocimiento con privilegios y beneficios únicos que no volverán a ofrecerse.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex items-start gap-5 p-4 rounded-lg transition-colors duration-300 hover:bg-deep-black-bg/20" style={{ animationDelay: `${index * 150}ms` }}>
                        <benefit.icon className="w-10 h-10 text-golden-glow flex-shrink-0 mt-1" strokeWidth={1.5} />
                        <div>
                            <h3 className="text-xl font-bold text-off-white-text">{benefit.title}</h3>
                            <p className="text-off-white-text/70">{benefit.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FoundersBenefits;
