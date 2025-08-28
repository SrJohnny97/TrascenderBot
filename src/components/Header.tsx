const Header = () => {
    return (
        <header className="fixed top-0 w-full z-50 flex justify-between items-center px-[5%] py-4 bg-deep-black-bg/70 backdrop-blur-md border-b border-golden-glow/10">
            <a href="#hero" aria-label="Ir al inicio">
                <img src="https://imagenes.trascenderbot.com/trascendit.png" alt="Logo de Trascendit" className="h-[65px] w-auto rounded-full" />
            </a>
            <a href="#application" className="bg-golden-glow text-deep-black-bg font-bold px-6 py-2 rounded-full text-base no-underline transition-all duration-300 shadow-lg shadow-golden-glow/20 hover:scale-105 hover:bg-white">
                Aplica Ahora
            </a>
        </header>
    );
};

export default Header;
