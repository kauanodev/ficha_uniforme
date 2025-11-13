
export function gerarFichaUniforme(tecnico,logo, fotoAtual) {
  // Importa jsPDF
 const { jsPDF } = window.jspdf;
 const pdf = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  const margemEsq = 20;
  let y = 30;

  // === LOGO ===
  if (logo) {
    pdf.addImage(logo, "JPEG", margemEsq, 10, 40, 30,30);
  }

  // === TÍTULO ===
  pdf.setFont("helvetica", "bold");
  pdf.setFontSize(18);
  pdf.text("Ficha de Uniforme", 105, 25, { align: "center" });

  // === DADOS PRINCIPAIS ===
  pdf.setFontSize(12);
  pdf.setFont("helvetica", "normal");
  pdf.text(`Técnico: ${tecnico.nome}`, margemEsq, y + 10);
  pdf.text(`Data: ${tecnico.data}`, 150, y + 10);
  y += 20;

  // === FARDAMENTO ATUAL ===
  pdf.setFont("helvetica", "bold");
  pdf.text("Quantidade de Fardamento Atual:", margemEsq, y);
  pdf.setFont("helvetica", "normal");
  y += 8;


//TODO tornar obrigatório o preenchimento desses campos
  const atual = tecnico.atual;
  console.log(tecnico);
  pdf.text(`Camisetas: ${atual.camisetas || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Blusas UV: ${atual.blusasUV || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Calças: ${atual.calcas || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Bota ou Sapato: ${atual.bota || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Cinto: ${atual.cinto || "—"}`, margemEsq, y);


  console.log("aqui");
  // === FOTO DO UNIFORME ===
  if (fotoAtual) {
   
    pdf.addImage(fotoAtual, "JPEG", 130, 55, 60, 90);
  }

  y += 25;

  // === LISTA DE REQUISIÇÕES ===
  pdf.setFont("helvetica", "bold");
  pdf.text("Lista de Requisições:", margemEsq, y);
  pdf.setFont("helvetica", "normal");
  y += 8;

  const req = tecnico.requisicao;
  pdf.text(`Camisetas: ${req.camisetas || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Blusas UV: ${req.blusasUV || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Calças: ${req.calcas || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Bota ou Sapato: ${req.bota || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Cinto: ${req.cinto || "—"}`, margemEsq, y);
  y += 15;

  // === MEDIDAS ATUAIS DO TÉCNICO ===
  pdf.setFont("helvetica", "bold");
  pdf.text("Medidas Atuais do Técnico:", margemEsq, y);
  pdf.setFont("helvetica", "normal");
  y += 8;

  const medidas = tecnico.medidas;
  pdf.text(`Camisa: ${medidas.camisa || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Calça: ${medidas.calca || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Cinto: ${medidas.cinto || "—"}`, margemEsq, y); y += 7;
  pdf.text(`Bota: ${medidas.bota || "—"}`, margemEsq, y);

  // === SALVAR PDF ===
  const nomeArquivo = `Ficha_Uniforme_${tecnico.nome.replace(/\s+/g, "_")}.pdf`;
  pdf.save(nomeArquivo);

  const blob = pdf.output("blob");

  // Cria uma URL temporária para o PDF
  const fileUrl = URL.createObjectURL(blob);

  // Texto da mensagem
  const mensagem = encodeURIComponent(`Ficha de Uniforme ${tecnico.nome}: `);
  
  // Abre o WhatsApp Web (você precisa colar o link do arquivo manualmente)
  window.open(`https://wa.me/?text=${mensagem} \n ${fileUrl}`, "_blank")
}

// ======= EXEMPLO DE USO =======

// Executa
// gerarFichaUniforme(tecnico);
