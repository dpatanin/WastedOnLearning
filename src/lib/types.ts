export enum ContentType {
  INFORMATIVE = 'INFORMATIVE',
  MARKETING = 'MARKETING',
  EDUCATIONAL = 'EDUCATIONAL',
  SCIENTIFIC = 'SCIENTIFIC',
}

export enum AudienceType {
  ADULTS = 'ADULTS',
  STUDENTS = 'STUDENTS',
  ELDERLY = 'ELDERLY',
  NON_NATIVE = 'NON_NATIVE',
}

export type CalParams = {
  readingSpeed: number;
  imageViewTime: number;
  complexityFactor: number;
  advanced: boolean;
  contentType: ContentType;
  audienceType: AudienceType;
};
