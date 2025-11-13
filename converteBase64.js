export async function converterImagemParaBase64(inputFile) {
  return new Promise((resolve, reject) => {
    const file = inputFile.files[0];
    if (!file) {
      reject("Nenhum arquivo selecionado.");
      return;
    }

    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);  // Retorna o Base64 aqui
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(file);
  });
}