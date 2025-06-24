import type { Dispatch, SetStateAction } from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { MapPin } from 'lucide-react';

import type { Stand } from '@/constants/stands.const';
import type { Category } from '@/constants/sidebar.const';
import { STANDS } from '@/constants/stands.const';
import { useWindowSize } from '@/hooks/useWindowSize.hook';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/useIsMobile.hook';
import { getLogoImagesPath } from '@/utils/file.util';
import { getZoomScale } from '@/utils/window.util';

type StandProps = {
  computeStandSize: (stand: Stand) => React.CSSProperties;
  dialogState: { isDialogActive: boolean; setIsDialogActive: Dispatch<SetStateAction<boolean>> };
  standState: { selectedStand: Stand | null; setSelectedStand: Dispatch<SetStateAction<Stand | null>> };
  categoryState: {
    activeCategory: Category | null;
    setActiveCategory: Dispatch<SetStateAction<Category | null>>;
  };
};

export function Stands({ standState, categoryState, dialogState, computeStandSize }: StandProps) {
  const { zoomToElement } = useControls();
  const dimensions = useWindowSize();

  const isMobile = useIsMobile();

  return STANDS.map((stand) => {
    const isCategorySelected = categoryState.activeCategory?.title === stand.category;
    const isStandSelected = standState.selectedStand?.id === stand.id;

    return (
      <div
        id={stand.id}
        key={stand.id}
        style={computeStandSize(stand)}
        className='absolute flex cursor-pointer items-center justify-center'
        onClick={() => {
          standState.setSelectedStand(stand);
          zoomToElement(stand.id, getZoomScale(dimensions.width));
        }}
      >
        {(isCategorySelected || isStandSelected) && (
          <Tooltip useTouch={isMobile}>
            <TooltipTrigger asChild>
              <div className='zoom-in-95 bg-primary relative rounded-full p-1 text-white shadow-lg transition-all duration-200 ease-out hover:scale-110 hover:shadow-xl max-sm:p-0.5'>
                <MapPin className='z-50 size-2.5 transition-all duration-200 ease-out max-sm:size-1' />
                <span
                  className={`absolute inset-0 inline-flex h-full w-full animate-ping rounded-full ${isStandSelected ? 'bg-yellow-300' : 'bg-black'} opacity-75`}
                />
              </div>
            </TooltipTrigger>
            <TooltipContent
              side='top'
              sideOffset={8}
              tooltipColor='secondary'
              className='zoom-in-95 bg-secondary flex max-w-[220px] flex-col gap-2 rounded-md p-2 text-center shadow-md transition-all duration-150 ease-out sm:text-sm'
            >
              <div className='flex h-10 items-center justify-center gap-2'>
                {stand.logoFilename && (
                  <img
                    className='size-10 h-full rounded-md object-contain shadow'
                    src={getLogoImagesPath(stand.logoFilename)}
                    alt={stand.name}
                  />
                )}
                <span className='text-foreground text-base font-semibold'>{stand.name}</span>
              </div>
              <Button
                className='bg-primary hover:bg-primary/90 z-50 cursor-pointer rounded-md px-3 py-1 text-xs font-semibold text-white transition-all'
                variant='default'
                onClick={() => {
                  standState.setSelectedStand(stand);
                  dialogState.setIsDialogActive(true);
                }}
              >
                Saiba mais
              </Button>
            </TooltipContent>
          </Tooltip>
        )}
      </div>
    );
  });
}
