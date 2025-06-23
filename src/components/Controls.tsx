import { Minus, Plus, RotateCcw } from 'lucide-react';
import { useControls } from 'react-zoom-pan-pinch';

import { Button } from '@/components/ui/button';

export function Controls() {
  const { zoomIn, zoomOut, resetTransform } = useControls();

  return (
    <div className='fixed right-5 bottom-5 flex flex-col space-y-2'>
      <Button
        variant='outline'
        className='size-12 cursor-pointer rounded-full shadow shadow-stone-400'
        onClick={() => zoomIn()}
      >
        <Plus />
      </Button>
      <Button
        variant='outline'
        className='size-12 cursor-pointer rounded-full shadow shadow-stone-400'
        onClick={() => zoomOut()}
      >
        <Minus />
      </Button>
      <Button
        variant='outline'
        className='size-12 cursor-pointer rounded-full shadow shadow-stone-400'
        onClick={() => resetTransform()}
      >
        <RotateCcw />
      </Button>
    </div>
  );
}
