import pdfjs from 'pdfjs-dist';
import { countWords } from '../lib/helper';
import { FileCalData } from './controller';

export default async function PDF(file: File): Promise<FileCalData> {
  const arrayBuffer = await file.arrayBuffer();
  return pdfjs.getDocument(arrayBuffer).promise.then(async (pdf) => {
    const texts: string[] = [];
    const images = [];

    const pagesPromises: Promise<any>[] = [];

    for (let i = 1; i <= pdf.numPages; i++) {
      pagesPromises.push(
        pdf.getPage(i).then((proxy) => {
          proxy.getTextContent().then((content) => {
            content.items.forEach((item) => {
              if ('str' in item) texts.push(item.str);
            });
          });

          proxy.getOperatorList().then((opList) => {
            opList.fnArray.forEach((element) => {
              if (
                [
                  pdfjs.OPS.paintImageXObject, // 85
                  pdfjs.OPS.paintImageXObjectRepeat, // 88
                ].includes(element)
              )
                images.push(element);
            });
          });
        })
      );
    }

    return Promise.all(pagesPromises).then(() => {
      return {
        wordCount: countWords(texts.join('')),
        imageCount: images.length,
        videoLengthSec: 0,
        audioLengthSec: 0,
      };
    });
  });
}
