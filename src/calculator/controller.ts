import { Accept } from 'react-dropzone';
import TEXT from './TEXT';

export const accept: Accept = {
  'text/plain': ['.txt'],
};

const CalType: { [key: string]: (file: File) => Promise<number> } = {
  'text/plain': TEXT,
};

/**
 * @param {number} readingSpeed Words per minute
 * @param {number} imageViewTime Seconds per image
 * @param {number} complexityFactor Overall complexity | e.g. 1 means adequate content level for the audience
 */
export type CalParams = {
  readingSpeed: number,
  imageViewTime: number,
  complexityFactor: number
} 

export function controller(file: File, params: CalParams) {
  return CalType[file.type](file);
}
