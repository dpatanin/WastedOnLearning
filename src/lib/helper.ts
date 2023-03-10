import { baseParams, facImageViewTime, facReadingSpeed } from './factors';
import { AudienceType, ContentType } from './types';

export function getDuration(file: File, type: 'video' | 'audio') {
  const url = (URL || webkitURL).createObjectURL(file);
  const doc = document.createElement(type);

  doc.preload = 'metadata';
  doc.src = url;

  return new Promise<number>((resolve, reject) => {
    doc.addEventListener('loadedmetadata', function () {
      if (doc.duration) {
        resolve(Number(doc.duration.toFixed(2)));
      } else reject(`Duration could not be read. File: ${file.name}`);

      (URL || webkitURL).revokeObjectURL(url);
    });
  });
}

export function settleAndSumDurations(promises: Promise<number>[]) {
  return Promise.allSettled(promises).then((results) => {
    const durations: number[] = [];

    for (const result of results) {
      if (result.status === 'fulfilled') {
        durations.push(result.value);
      } else {
        console.log(result.reason);
      }
    }

    switch (durations.length) {
      case 0:
        return 0;

      case 1:
        return durations[0];

      default:
        return durations.reduce((a, b) => a + b);
    }
  });
}

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

export function formatTime(seconds: number) {
  const d = Math.floor(seconds / 86400);
  const h = Math.floor((seconds % 86400) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.round(seconds % 60);

  const time = [
    h < 10 ? '0' + h : h,
    m < 10 ? '0' + m : m,
    s < 10 ? '0' + s : s,
  ].join(':');

  return d ? `${d} Days, ${time}` : time;
}

export const RGX = {
  image: /(png|jpeg|jpg|gif|webp|svg)/,
  video: /(mp4|mov|avi|wmv|avchd|flv|f4v|swf|mkv|webm)/,
  audio: /(mp3|wav|aiff|flac|m4a|ogg|aac|wma|ape)/,
};
