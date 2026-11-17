import { useSyncExternalStore } from "react";
import type { Persona } from "@/lib/data";
import Hero from "@/components/Hero";
import Diferencial from "@/components/Diferencial";
import Rota from "@/components/Rota";
import Painel from "@/components/Painel";
import Ciclo from "@/components/Ciclo";
import Faq from "@/components/Faq";
import Caminho from "@/components/Caminho";
import Footer from "@/components/Footer";
import HeroD from "@/components/desktop/HeroD";
import DiferencialD from "@/components/desktop/DiferencialD";
import PainelD from "@/components/desktop/PainelD";
import RotaD from "@/components/desktop/RotaD";
import CicloD from "@/components/desktop/CicloD";
import FaqD from "@/components/desktop/FaqD";
import CaminhoD from "@/components/desktop/CaminhoD";
import FooterD from "@/components/desktop/FooterD";

const QUERY = "(min-width: 900px)";
const subscribe = (cb: () => void) => {
  const mq = window.matchMedia(QUERY);
  mq.addEventListener("change", cb);
  return () => mq.removeEventListener("change", cb);
};
const useIsDesktop = () =>
  useSyncExternalStore(subscribe, () => window.matchMedia(QUERY).matches, () => false);

/** A partir de 900 px mostra a versão desktop; abaixo disso, a versão mobile. */
export default function Landing() {
  const desktop = useIsDesktop();

  if (desktop) {
    return (
      <div className="sans desk" style={{ width: "100%", background: "#050304", color: "#F5F0EB", overflow: "hidden" }}>
        <HeroD />
        <DiferencialD />
        <PainelD />
        <RotaD />
        <CicloD />
        <FaqD />
        <CaminhoD />
        <FooterD />
      </div>
    );
  }

  const persona: Persona = "host";
  return (
    <div className="sans" style={{ width: "100%", maxWidth: 480, margin: "0 auto", background: "#050304", color: "#F5F0EB", overflow: "hidden" }}>
      <Hero persona={persona} />
      <Diferencial />
      <Painel persona={persona} />
      <Rota persona={persona} />
      <Ciclo />
      <Faq />
      <Caminho persona={persona} />
      <Footer />
    </div>
  );
}
