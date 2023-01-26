import { countWords } from '../lib/helper';

export default function TEXT(file: File): Promise<[string, number]> {
  return file.text().then((text) => [file.name, countWords(text)]);
}
