import AiMentor from "./components/AiMentor";
import Application from "./components/Application";
import CosmicCanvas from "./components/CosmicCanvas";
import Footer from "./components/Footer";
import FoundersBenefits from "./components/FoundersBenefits";
import FoundersExperience from "./components/FoundersExperience";
import GrowthEcosystem from "./components/GrowthEcosystem";
import Header from "./components/Header";
import Hero from "./components/Hero";

function App() {
  return (
    <>
      <CosmicCanvas />
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <AiMentor />
          <FoundersExperience />
          <GrowthEcosystem />
          <FoundersBenefits />
          <Application />
        </main>
        <Footer />
      </div>
    </>
  )
}

export default App