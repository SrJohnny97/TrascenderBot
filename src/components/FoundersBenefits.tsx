import { Gift, HeartHandshake, MessageSquare, Award } from 'lucide-react';

const FoundersBenefits = () => {
    const benefits = [
        { icon: Gift, title: "Acceso Fundador (De Por Vida)", description: "Disfruta de 1 mes de acceso premium total y GRATUITO. Después, mantendrás beneficios y un precio especial para siempre." },
        { icon: HeartHandshake, title: "Consejero de Confianza", description: "Tu feedback y experiencia serán nuestra guía más valiosa para perfeccionar las herramientas y el contenido que darán vida a Trascendit." },
        { icon: MessageSquare, title: "Línea Directa con el Creador", description: "Tendrás un canal prioritario para compartir ideas, feedback y resolver dudas. Tu opinión es nuestro activo más valioso." },
        { icon: Award, title: "Reconocimiento Eterno", description: "Serás honrado como uno de los pioneros fundadores, con un lugar de honor en la historia de nuestra comunidad." }
    ];

    return (
        <section id="benefits" className="py-20 px-[5%] bg-black/40">
            <div className="relative text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                <h2 className="font-philosopher text-golden-glow text-4xl lg:text-5xl mb-4 relative inline-block px-4">
                    <span className="relative z-10">¿Por Qué Deberías Ser Fundador?</span>
                    <div className="absolute -inset-x-4 -inset-y-2 bg-[radial-gradient(ellipse_at_center,rgba(255,195,113,0.2)_40%,rgba(255,195,113,0)_80%)] blur-xl -z-0"></div>
                </h2>
                <p className="text-lg text-off-white-text/80 mt-6">Esta no es una simple membresía. Es una invitación a ser parte de algo desde su concepción. Una oportunidad única que no se repetirá.</p>
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
