import countWords from '../lib/wordCount';

export default function TEXT(file: File): Promise<number> {
  return file.text().then((text) => countWords(text));
}
