import { useState } from "react";
import type { Persona } from "@/lib/data";
import Hero from "@/components/Hero";
import Rota from "@/components/Rota";
import Painel from "@/components/Painel";
import Ciclo from "@/components/Ciclo";
import Caminho from "@/components/Caminho";
import Footer from "@/components/Footer";

export default function App() {
  const [persona, setPersona] = useState<Persona>("host");
  return (
    <div className="sans" style={{ width: "100%", maxWidth: 480, margin: "0 auto", background: "#050304", color: "#F5F0EB", overflow: "hidden" }}>
      <Hero persona={persona} />
      <Rota persona={persona} onPersona={setPersona} />
      <Painel persona={persona} />
      <Ciclo />
      <Caminho persona={persona} />
      <Footer />
    </div>
  );
}
