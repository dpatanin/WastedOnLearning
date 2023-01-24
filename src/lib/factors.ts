import { AudienceType, ContentType } from './types';

export const facReadingSpeed = {
  [ContentType.INFORMATIVE]: 1,
  [ContentType.EDUCATIONAL]: 0.95,
  [ContentType.MARKETING]: 1.06,
  [ContentType.SCIENTIFIC]: 0.73,
  [AudienceType.ADULTS]: 1.04,
  [AudienceType.STUDENTS]: 1.07,
  [AudienceType.ELDERLY]: 0.86,
  [AudienceType.NON_NATIVE]: 0.8,
};

export const facImageViewTime = {
  [ContentType.INFORMATIVE]: 1.2,
  [ContentType.EDUCATIONAL]: 1.8,
  [ContentType.MARKETING]: 0.75,
  [ContentType.SCIENTIFIC]: 4,
};
