
"use client";
import { useState } from "react";

const tipos = {
  1: "SECRETÁRIA",
  2: "EXECUTIVA",
  3: "GERENTE",
  4: "DIRETOR",
  5: "PRESIDENTE",
};

const bases = {
  G10: "NYLON",
  G11: "FERRO",
  G12: "C/ RLX",
  G13: "ALUMÍNIO",
  G14: "BACK-SYSTEM",
};

const bracos = {
  B10: "SEM BRAÇO",
  B11: "BRAÇO REGULÁVEL FK",
  B12: "BRAÇO REGULÁVEL TERUSKE",
  B13: "BRAÇO GRAPA",
  B14: "BRAÇO CORSA",
  B15: "BRAÇO CINTA",
  B16: "BRAÇO SETE (OMEGA)",
};

const revestimentos = {
  21: "COURO ECOLÓGICO GRÉCIA PRETO",
  31: "TECIDO J SERRANO PRETO",
  32: "TECIDO J SERRANO VERDE",
  33: "TECIDO J SERRANO VERMELHO",
  34: "TECIDO J SERRANO AZUL",
  35: "TECIDO J SERRANO AZUL-MARINHO",
};

export default function Page() {
  const [linha, setLinha] = useState("LA");
  const [tipo, setTipo] = useState("1");
  const [base, setBase] = useState("G10");
  const [braco, setBraco] = useState("B10");
  const [revest, setRevest] = useState("31");

  const codigo = `${linha}${tipo}${base}${braco}${revest}`;
  const nome = `CADEIRA ACTIVE ${tipos[tipo]} ${bases[base]} / ${revestimentos[revest]}`;
  const descricao = `Cadeira ACTIVE tipo ${tipos[tipo].toLowerCase()} com assento e encosto fabricados em espuma injetada, estrutura de base ${bases[base].toLowerCase()}, braço tipo ${bracos[braco].toLowerCase()}. Revestimento em ${revestimentos[revest].toLowerCase()}`;
  const custo = 167.05;
  const preco = (custo * 1.61).toFixed(2);

  return (
    <div style={{ maxWidth: 800, margin: "0 auto", padding: 20, fontFamily: "Arial" }}>
      <h1>Configurador AM OFFICE</h1>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
        <div>
          <label>LINHA</label>
          <input value={linha} onChange={(e) => setLinha(e.target.value)} style={{ width: "100%" }} />
        </div>
        <div>
          <label>TIPO</label>
          <select value={tipo} onChange={(e) => setTipo(e.target.value)} style={{ width: "100%" }}>
            {Object.entries(tipos).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label>BASE</label>
          <select value={base} onChange={(e) => setBase(e.target.value)} style={{ width: "100%" }}>
            {Object.entries(bases).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label>BRAÇO</label>
          <select value={braco} onChange={(e) => setBraco(e.target.value)} style={{ width: "100%" }}>
            {Object.entries(bracos).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
        <div>
          <label>REVESTIMENTO</label>
          <select value={revest} onChange={(e) => setRevest(e.target.value)} style={{ width: "100%" }}>
            {Object.entries(revestimentos).map(([k, v]) => (
              <option key={k} value={k}>{v}</option>
            ))}
          </select>
        </div>
      </div>
      <hr style={{ margin: "20px 0" }} />
      <p><strong>Código:</strong> {codigo}</p>
      <p><strong>Nome:</strong> {nome}</p>
      <p><strong>Descrição:</strong> {descricao}</p>
      <p><strong>Preço de venda:</strong> R$ {preco}</p>
    </div>
  );
}
