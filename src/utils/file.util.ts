export function getLogoImagesPath(filename: string) {
  return new URL(`../assets/logos/${filename}`, import.meta.url).href;
}
