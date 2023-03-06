import JSZip from 'jszip';
import { Accept } from 'react-dropzone';
import { FileTypeError } from '../lib/errors';
import { PackageTypeError } from './../lib/errors';
import SCORM from './SCORM';
import TEXT from './TEXT';

export const accept: Accept = {
  'text/plain': ['.txt'],
  'application/zip': ['.zip'],
};

const CalType: {
  [key: keyof Accept]: (file: File) => Promise<FileCalData>;
} = {
  'text/plain': TEXT,
  'application/zip': ZIP,
  'application/x-zip-compressed': ZIP,
};

enum pkgType {
  SCORM = 'SCORM',
}

export type FileCalData = {
  wordCount: number;
  imageCount: number;
  videoLengthSec: number;
  audioLengthSec: number;
};

export function controller(
  file: File,
  wordsPerMinute: number,
  secondsPerImage: number,
  complexityFactor: number
): Promise<[string, number]> {
  if (!(file.type in CalType)) {
    throw new FileTypeError(
      'File type was accepted but no function to process was found.',
      Object.keys(CalType),
      file.type
    );
  }

  return CalType[file.type](file).then((result) => {
    // Calculate all times in seconds
    const readingTime = (result.wordCount / wordsPerMinute) * 60;
    const imageViewTime = result.imageCount * secondsPerImage;
    const audioLength = result.audioLengthSec;
    const videoLength = result.videoLengthSec;

    const totalTime =
      (readingTime + imageViewTime + audioLength + videoLength) *
      complexityFactor;

    return [file.name, totalTime];
  });
}

function ZIP(file: File): Promise<FileCalData> {
  const zip = new JSZip();

  return zip.loadAsync(file).then((zFile) => {
    zFile.forEach((e) => {
      // Identify package type
      console.log(e);
      if (false) {
      } else {
        throw new PackageTypeError(
          `Type of package: ${file.name} not supported.`
        );
      }
    });

    return SCORM(file);
  });
}
