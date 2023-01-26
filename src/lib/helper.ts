import { baseParams, facImageViewTime, facReadingSpeed } from './factors';
import { AudienceType, ContentType } from './types';

export function countWords(text: string) {
  return text.split(' ').length;
}

// Returns words per minute
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

// Returns seconds per image
export function calImageViewTime(contentType: ContentType) {
  return baseParams.imageViewTime * facImageViewTime[contentType];
}

export function calComplexityFactor(
  contentType: ContentType,
  audienceType: AudienceType
) {
  const defaultCF =
    baseParams.complexityFactor /
    ((facReadingSpeed[baseParams.contentType] /
      facReadingSpeed[baseParams.audienceType]) *
      facImageViewTime[baseParams.contentType]);

  return (
    Math.round(
      defaultCF *
        (facReadingSpeed[contentType] / facReadingSpeed[audienceType]) *
        facImageViewTime[contentType] *
        100
    ) / 100
  );
}
