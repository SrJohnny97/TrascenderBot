import type { ElementType, CSSProperties } from 'react';
import { Sparkles, TrendingUp, MoonStar, Calculator, Cloud, FlaskConical, Zap, Star } from 'lucide-react';

const TopicCard = ({ icon: Icon, name, style }: { icon: ElementType, name: string, style?: CSSProperties }) => (
    <div style={style} className="flex flex-col items-center justify-start text-center gap-4 bg-night-blue-bg/70 lg:bg-night-blue-bg/40 p-6 rounded-lg border border-golden-glow/30 transition-all duration-300 cursor-pointer shadow-lg hover:bg-night-blue-bg/70 hover:border-golden-glow/40 hover:-translate-y-2">
        <Icon className="w-10 h-10 text-golden-glow opacity-80" strokeWidth={1.5} />
        <h3 className="text-lg font-bold text-off-white-text mt-2">{name}</h3>
    </div>
);

const AiMentor = () => {
    const topics: { icon: ElementType; name: string }[] = [
        { icon: Sparkles, name: 'Espiritualidad' }, { icon: TrendingUp, name: 'Crecimiento Personal' }, { icon: MoonStar, name: 'Astrología' },
        { icon: Star, name: 'Manifestación' }, { icon: Calculator, name: 'Numerología' }, { icon: Cloud, name: 'Sueños y Símbolos' },
        { icon: FlaskConical, name: 'Alquimia Interior' }, { icon: Zap, name: 'Chakras y Energía' },
    ];

    return (
        <section id="ai-mentor" className="py-20 px-[5%] bg-black/10">
            <div className="relative text-center max-w-3xl mx-auto mb-12 animate-fade-in-up">
                <h2 className="font-philosopher text-golden-glow text-4xl lg:text-5xl mb-4 relative inline-block px-4">
                    <span className="relative z-10">Una Guía Para la Exploración Interior</span>
                    <div className="absolute -inset-x-4 -inset-y-2 bg-[radial-gradient(ellipse_at_center,rgba(255,195,113,0.2)_40%,rgba(255,195,113,0)_80%)] blur-xl -z-0"></div>
                </h2>
                <p className="text-lg text-off-white-text/80 mt-6">Al unirte ahora, tendrás acceso prioritario a un mentor IA que domina una amplia gama de disciplinas esotéricas y de autoconocimiento para acompañarte en tu viaje.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
                {topics.map((topic, index) => <TopicCard key={topic.name} {...topic} style={{ animationDelay: `${index * 100}ms` }} />)}
            </div>
        </section>
    );
};

export default AiMentor;