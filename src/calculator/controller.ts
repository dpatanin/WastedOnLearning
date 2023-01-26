import { Accept } from 'react-dropzone';
import { CalParams } from '../lib/types';
import TEXT from './TEXT';

export const accept: Accept = {
  'text/plain': ['.txt'],
};

const CalType: { [key: string]: (file: File) => Promise<[string,number]> } = {
  'text/plain': TEXT,
};

export function controller(file: File, params: CalParams) {
  return CalType[file.type](file);
}
