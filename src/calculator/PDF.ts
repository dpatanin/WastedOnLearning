import { countWords } from '../lib/helper';
import { FileCalData } from './controller';

export default function PDF(file: File): Promise<FileCalData> {
  return file.text().then((text) => {
    return {
      wordCount: countWords(text),
      imageCount: 0,
      videoLengthSec: 0,
      audioLengthSec: 0,
    };
  });
}
