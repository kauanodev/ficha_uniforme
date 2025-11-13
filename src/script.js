import { gerarFichaUniforme } from "./gerarPDF.js";
import { converterImagemParaBase64 } from "./converteBase64.js";
import { getDataHTML } from "./getDataHTML.js";
import { logo } from "./logo_infinity.js";

const logoInfinity = logo;

document.getElementById("gerarPDF").addEventListener("click", async () => {
  console.log("Gerando PDF...");
  try {
    const data = await getDataHTML();
    const fotoAtual = await converterImagemParaBase64(
      document.getElementById("fotoUniforme")
    );
    const pdf = gerarFichaUniforme(data, logoInfinity, fotoAtual);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
  }
});
