import { Accept } from 'react-dropzone';
import TEXT from './TEXT';

export const accept: Accept = {
  'text/plain': ['.txt'],
};

const CalType: {
  [key: keyof Accept]: (file: File) => Promise<FileCalData>;
} = {
  'text/plain': TEXT,
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
