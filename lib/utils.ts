import mammoth from 'mammoth';


let extractTextFromPDF: (file: File) => Promise<string>;

if (typeof window !== 'undefined') {
    const { getDocument , GlobalWorkerOptions } = require('pdfjs-dist');
  
    GlobalWorkerOptions.workerSrc = '/pdf.worker.mjs'; 
  
    extractTextFromPDF = async (file: File) => {
        const reader = new FileReader();

        return new Promise<string>((resolve, reject) => {
            reader.onload = async function () {
                const typedArray = new Uint8Array(reader.result as ArrayBuffer);
                const pdf = await getDocument(typedArray).promise;
                let text = "";

                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const content = await page.getTextContent();
                    text += content.items.map((item: any) => item.str).join(" ") + "\n";
                }

                resolve(text);
            };

            reader.onerror = reject;
            reader.readAsArrayBuffer(file);
        });
    };
}

export { extractTextFromPDF };


export async function extractTextFromDocx(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value; // Here you get the plain text
}
