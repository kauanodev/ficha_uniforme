import { gerarFichaUniforme } from "./gerarPDF.js";
import { converterImagemParaBase64 } from "./converteBase64.js";
import { getDataHTML } from "./getDataHTML.js";
import { logo } from "./logo_infinity.js";

const logoInfinity = logo;
const inputData = document.getElementById('data');
const hoje = new Date().toISOString().split('T')[0];
inputData.value = hoje;
const [ano, mes, dia] = inputData.value.split("-");
const dataFormatada = `${dia}/${mes}/${ano}`;

document.getElementById("gerarPDF").addEventListener("click", async () => {
  console.log("Gerando PDF...");
  try {
    const data = await getDataHTML();
    const fotoAtual = await converterImagemParaBase64(
      document.getElementById("fotoUniforme")
    );
    data.data = dataFormatada;
    gerarFichaUniforme(data, logoInfinity, fotoAtual);
  } catch (error) {
    console.error("Erro ao gerar PDF:", error);
  }
});
