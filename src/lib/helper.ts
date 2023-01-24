import { baseParams } from './../calculator/controller';
import { facImageViewTime, facReadingSpeed } from './factors';
import { AudienceType, ContentType } from './types';

export function countWords(text: string) {
  return text.split(' ').length;
}

export function calReadingSpeed(
  contentType: ContentType,
  audienceType: AudienceType
) {
  return Math.round(
    baseParams.readingSpeed *
      facReadingSpeed[contentType] *
      facReadingSpeed[audienceType]
  );
}

export function calImageViewTime(contentType: ContentType) {
  return facImageViewTime[contentType];
}
