import JSZip from 'jszip';
import { FileCalData } from './controller';

export default function SCORM(zip: JSZip): Promise<FileCalData> {
  const f = new FileReader();

  return new Promise((resolve) => {
    return {
      wordCount: 0,
      imageCount: 0,
      videoLengthSec: 0,
      audioLengthSec: 0,
    };
  });
}

export async function isSCORM(zip: JSZip): Promise<boolean> {
  try {
    const parser = new DOMParser();
    const manifest = zip.file(/imsmanifest.xml/);
    const xml = parser.parseFromString(
      await manifest[0].async('text'),
      'text/xml'
    );
    return (
      xml.getElementsByTagName('schema')[0].textContent === 'ADL SCORM' &&
      xml.getElementsByTagName('schemaversion')[0].textContent ===
        '2004 3rd Edition'
    );
  } catch {
    return false;
  }
}
