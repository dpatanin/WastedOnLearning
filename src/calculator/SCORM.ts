import JSZip from 'jszip';
import { getDuration, RGX, settleAndSumDurations } from '../lib/helper';
import { FileCalData } from './controller';

export default async function SCORM(zip: JSZip): Promise<FileCalData> {
  const assets = /assets\/.*\./;
  const images = zip.file(new RegExp(assets.source + RGX.image.source));
  const videos = zip.file(new RegExp(assets.source + RGX.video.source));
  const audios = zip.file(new RegExp(assets.source + RGX.audio.source));

  const videoPromises: Promise<number>[] = [];
  const audioPromises: Promise<number>[] = [];

  for (const video of videos) {
    const file = new File([await video.async('blob')], video.name);
    videoPromises.push(getDuration(file, 'video'));
  }

  for (const audio of audios) {
    const file = new File([await audio.async('blob')], audio.name);
    audioPromises.push(getDuration(file, 'audio'));
  }

  return {
    wordCount: 0,
    imageCount: images.length,
    videoLengthSec: await settleAndSumDurations(videoPromises),
    audioLengthSec: await settleAndSumDurations(audioPromises),
  };
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
