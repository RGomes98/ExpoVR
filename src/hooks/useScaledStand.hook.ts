import type { Dispatch, RefObject, SetStateAction } from 'react';
import { useEffect, useRef, useState } from 'react';

import type { Stand } from '@/constants/stands.const';
import { originalImageSize } from '@/constants/image.const';

type ImageSize = {
  width: number;
  height: number;
};

type ComputeStandLayoutParams = {
  stand: Stand;
  imageSize: ImageSize;
};

type UpdateImageSizeParams = {
  imageRef: RefObject<HTMLImageElement | null>;
  setImageSize: Dispatch<SetStateAction<ImageSize>>;
};

function computeStandLayout({ stand, imageSize }: ComputeStandLayoutParams) {
  const widthScale = imageSize.width / originalImageSize.width;
  const heightScale = imageSize.height / originalImageSize.height;

  return {
    position: 'absolute' as const,
    top: parseFloat(stand.position.topPx) * heightScale,
    left: parseFloat(stand.position.leftPx) * widthScale,
    width: parseFloat(stand.position.widthPx) * widthScale,
    height: parseFloat(stand.position.heightPx) * heightScale,
  };
}

function updateImageSize({ imageRef, setImageSize }: UpdateImageSizeParams) {
  const imageElement = imageRef.current;
  if (!imageElement) return;

  setImageSize({
    width: imageElement.clientWidth,
    height: imageElement.clientHeight,
  });
}

export function useScaledStand() {
  const [imageSize, setImageSize] = useState<ImageSize>({ width: 0, height: 0 });
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    updateImageSize({ imageRef, setImageSize });

    const controller = new AbortController();
    const { signal } = controller;

    window.addEventListener('resize', () => updateImageSize({ imageRef, setImageSize }), { signal });
    return () => controller.abort();
  }, []);

  return {
    imageRef,
    computeStandSize: (stand: Stand) => computeStandLayout({ stand, imageSize }),
  };
}
