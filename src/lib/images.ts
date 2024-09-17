import type { CaptionedImage } from './types';

export function staticImage(path: string): URL {
  return new URL(`../assets/images/${path}`, import.meta.url);
}

export function projectImage(path: string, caption: string): CaptionedImage {
  return {
    imageURL: staticImage(path),
    caption: caption,
  };
}
