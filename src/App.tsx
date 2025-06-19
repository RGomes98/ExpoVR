import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Fragment, useState } from 'react';

import type { Stand } from './constants/stands.const';
import { useScaledStand } from './hooks/useScaledStand.hook';
import { STANDS, ZOOM_SCALE } from './constants/stands.const';

import pavilion from '@/assets/images/pavilion-stands.jpg';

export default function App() {
  const [selectedStand, setSelectedStand] = useState<Stand | null>(null);
  const { imageRef, computeStandSize } = useScaledStand();

  return (
    <div className='grid h-screen grid-cols-[1.8fr_auto]'>
      {/* Sidebar */}
      <h1>Sidebar</h1>

      <TransformWrapper>
        {({ zoomIn, zoomOut, resetTransform, zoomToElement }) => (
          <Fragment>
            {/* Image */}
            <TransformComponent
              wrapperStyle={{ height: '100%', width: '100%' }}
              contentStyle={{ height: '100%', width: '100%' }}
            >
              <div className='relative inline-block h-full w-full'>
                <img
                  ref={imageRef}
                  src={pavilion}
                  alt='pavilion-map'
                  className='block max-h-full max-w-full object-contain'
                />

                {/* Stands */}
                {STANDS.map((stand) => (
                  <div
                    key={stand.id}
                    id={stand.id}
                    style={computeStandSize(stand)}
                    className='absolute cursor-pointer border-2 border-red-500/50 bg-red-500/20 hover:bg-red-500/40'
                    onMouseLeave={() => setSelectedStand(null)}
                    onMouseEnter={() => setSelectedStand(stand)}
                    onClick={() => {
                      setSelectedStand(stand);
                      zoomToElement(stand.id, ZOOM_SCALE);
                    }}
                  />
                ))}
              </div>
            </TransformComponent>

            {/* Image Controls */}
            <div className='fixed top-5 right-5 z-[1000] flex flex-col space-y-2'>
              <button
                onClick={() => zoomIn()}
                className='rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600'
              >
                Zoom +
              </button>
              <button
                onClick={() => zoomOut()}
                className='rounded bg-blue-500 px-3 py-1 text-white hover:bg-blue-600'
              >
                Zoom -
              </button>
              <button
                onClick={() => resetTransform()}
                className='rounded bg-gray-500 px-3 py-1 text-white hover:bg-gray-600'
              >
                Reset
              </button>
            </div>
          </Fragment>
        )}
      </TransformWrapper>

      {/* Stand Popup */}
      {selectedStand && (
        <div className='fixed bottom-5 left-5 z-[999] border border-gray-300 bg-white p-3 shadow-md'>
          <h4 className='font-semibold'>{selectedStand.name}</h4>
          <p>{selectedStand.description}</p>
        </div>
      )}
    </div>
  );
}
