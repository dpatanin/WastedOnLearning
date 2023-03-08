import JSZip from 'jszip';
import { RGX } from '../lib/helper';
import { FileCalData } from './controller';

export default function SCORM(zip: JSZip): Promise<FileCalData> {
  const assets = /assets\/.*\./;
  const images = zip.file(new RegExp(assets.source + RGX.image.source));
  const videos = zip.file(new RegExp(assets.source + RGX.video.source));
  const audios = zip.file(new RegExp(assets.source + RGX.audio.source));

  return Promise.resolve({
    wordCount: 0,
    imageCount: images.length,
    videoLengthSec: 0,
    audioLengthSec: 0,
  });
}

export async function isSCORM(zip: JSZip): Promise<boolean> {
  try {
    const parser = new DOMParser();
    const manifest = zip.file(/imsmanifest.xml/)[0];
    const xml = parser.parseFromString(
      await manifest.async('text'),
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
