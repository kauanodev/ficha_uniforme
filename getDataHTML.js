import { converterImagemParaBase64 } from "./converteBase64.js";

export async function getDataHTML(){
    //DATA
const inputData = document.getElementById('data');
const hoje = new Date().toISOString().split('T')[0];
inputData.value = hoje;
const [ano, mes, dia] = inputData.value.split("-");
const dataFormatada = `${dia}/${mes}/${ano}`;

//FOTO
// const inputFoto = document.getElementById('fotoUniforme');
//     inputFoto.addEventListener("change", async (event) => {
//         console.log(inputFoto);
//     }
// );
//DADOS

const nome = document.getElementById("nome").value

const data = {
    nome: nome,
    data: dataFormatada,
 
    atual: {
        camisetas: document.getElementById("camisetasAtual").value,
        blusasUV: document.getElementById("blusasUVAtual").value,   
        calcas: document.getElementById("calcasAtual").value,
        bota: document.getElementById("botaAtual").value,
        cinto: document.getElementById("cintoAtual").value
    },
    requisicao: {
        camisetas: document.getElementById("camisetasReq").value,
        blusasUV: document.getElementById("blusasUVReq").value,   
        calcas: document.getElementById("calcasReq").value,
        bota: document.getElementById("botaReq").value,
    cinto: document.getElementById("cintoReq").value
    },
    medidas:{
        camisa: document.getElementById("camisetasMedidas").value,
        calca: document.getElementById("calcaMedidas").value,   
        cinto: document.getElementById("cintoMedidas").value,
        bota: document.getElementById("botaMedidas").value
    }
    
};  
return data;
}
