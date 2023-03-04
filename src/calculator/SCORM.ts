import { countWords } from '../lib/helper';
import { FileCalData } from './controller';

export default function SCORM(file: File): Promise<FileCalData> {
  const f = new FileReader()
  f.readAsText(file)

  f.onload = (e) => {
    console.log(e.target?.result)
  }

  return new Promise((resolve) => {
    return {
      wordCount: 0,
      imageCount: 0,
      videoLengthSec: 0,
      audioLengthSec: 0,
    };
  });
}
