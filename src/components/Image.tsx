import type { RefObject } from 'react';

import pavilion from '@/assets/images/pavilion-stands.jpg';

type ImageProps = {
  imageRef: RefObject<HTMLImageElement | null>;
};

export function Image({ imageRef }: ImageProps) {
  return <img ref={imageRef} src={pavilion} alt='pavilion-map' className='block max-w-full object-contain' />;
}
