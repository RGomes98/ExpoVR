import type { RefObject } from 'react';

import pavilion from '@/assets/images/pavilion-stands.jpg';
import eventMap from '@/assets/images/event-map.png';

type ImageProps = {
  isFullMapView: boolean;
  imageRef: RefObject<HTMLImageElement | null>;
};

export function Image({ isFullMapView, imageRef }: ImageProps) {
  return (
    <div className='relative w-full max-w-full'>
      <img
        ref={imageRef}
        alt='full map'
        src={eventMap}
        className={`absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-500 ${isFullMapView ? 'opacity-100' : 'pointer-events-none opacity-0'} `}
        aria-hidden={!isFullMapView}
      />
      <img
        ref={imageRef}
        alt='pavilion'
        src={pavilion}
        className={`relative w-full object-cover transition-opacity duration-500 ${!isFullMapView ? 'opacity-100' : 'pointer-events-none opacity-0'} `}
        aria-hidden={isFullMapView}
      />
    </div>
  );
}
