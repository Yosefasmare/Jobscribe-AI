
import mammoth from 'mammoth';

let extractTextFromPDF: (file: File) => Promise<string>;

if (typeof window !== 'undefined') {
  import('pdfjs-dist').then(({ getDocument, GlobalWorkerOptions }) => {
    GlobalWorkerOptions.workerSrc = '/pdf.worker.min.js'; 

    extractTextFromPDF = async (file: File) => {
      const arrayBuffer = await file.arrayBuffer();
      const pdf = await getDocument(new Uint8Array(arrayBuffer)).promise;
      let text = '';

      // Iterate over all pages of the PDF
      for (let i = 1; i <= pdf.numPages; i++) {
        const page = await pdf.getPage(i);
        const content = await page.getTextContent();
        text += content.items
          .map((item: any) => ('str' in item ? item.str : ''))
          .join(' ') + '\n';
      }

      return text;
    };
  }).catch(err => {
    console.error('Error loading pdfjs-dist:', err);
  });
}

// Function to extract text from DOCX
export async function extractTextFromDocx(file: File) {
  const arrayBuffer = await file.arrayBuffer();
  const result = await mammoth.extractRawText({ arrayBuffer });
  return result.value; // Return plain text extracted from DOCX
}

export { extractTextFromPDF };
