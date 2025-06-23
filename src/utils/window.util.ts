export function getInitialScale(width: number) {
  if (width <= 360) return 3.1;
  if (width <= 390) return 3.05;
  if (width <= 768) return 3.15;
  if (width <= 1366) return 1.2;
  if (width <= 1440) return 1.3;
  if (width <= 1536) return 1.15;
  if (width <= 1600) return 1.105;
  if (width <= 1920) return 1.05;
}

export function getZoomScale(width: number) {
  if (width <= 360) return 6;
  if (width <= 393) return 6.15;
  if (width <= 768) return 5.95;
  if (width <= 1366) return 3;
  if (width <= 1600) return 3.25;
  if (width <= 1920) return 3;
}
