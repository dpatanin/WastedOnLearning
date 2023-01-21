import { Accept } from 'react-dropzone';
import TEXT from './TEXT';

export const accept: Accept = {
  'text/plain': ['.txt'],
};

const CalType: { [key: string]: (file: File) => Promise<number> } = {
  'text/plain': TEXT,
};

export function controller(file: File) {
  return CalType[file.type](file);
}
