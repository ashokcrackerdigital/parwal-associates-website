/**
 * Shared page hero layout — same min-height and centered copy on all photo heroes.
 * Mobile: fill initial viewport below header.
 * Desktop/tablet: keep existing balanced hero height.
 */
export const PA_HERO_MIN_HEIGHT =
  "min-h-[calc(100svh-5rem)] sm:min-h-[min(72vh,35rem)]";

export const PA_PHOTO_HERO_SECTION =
  `relative flex ${PA_HERO_MIN_HEIGHT} items-center justify-center overflow-hidden`;

/** Use on next/image with fill — Next handles positioning */
export const PA_PHOTO_HERO_IMAGE_CLASS = "object-cover";

export const PA_PHOTO_HERO_OVERLAY = "absolute inset-0 bg-primary/68";

export const PA_PHOTO_HERO_INNER =
  "relative z-10 mx-auto w-full max-w-4xl px-4 py-20 text-center sm:px-6";

/** Solid / gradient heroes — same height; wrap inner content with your shell (e.g. max-w-7xl px-4) */
export const PA_SOLID_HERO_SECTION = `flex ${PA_HERO_MIN_HEIGHT} flex-col items-center justify-center border-b border-primary/10 py-14 text-center`;
