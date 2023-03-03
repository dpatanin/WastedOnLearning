import { Accept } from 'react-dropzone';
import { FileTypeError } from '../lib/errors';
import PDF from './PDF';
import TEXT from './TEXT';

export const accept: Accept = {
  'text/plain': ['.txt'],
  'application/pdf': ['.pdf'],
};

const CalType: {
  [key: keyof Accept]: (file: File) => Promise<FileCalData>;
} = {
  'text/plain': TEXT,
  'application/pdf': PDF,
};

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
