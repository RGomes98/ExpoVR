import type { Dispatch, SetStateAction } from 'react';

import type { Stand } from '@/constants/stands.const';
import { getLogoImagesPath } from '@/utils/file.util';
import { Badge } from '@/components/ui/badge';

import {
  Dialog as DialogUI,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

type DialogProps = {
  dialogState: { isDialogActive: boolean; setIsDialogActive: Dispatch<SetStateAction<boolean>> };
  standState: { selectedStand: Stand | null; setSelectedStand: Dispatch<SetStateAction<Stand | null>> };
};

export function Dialog({ standState, dialogState }: DialogProps) {
  const stand = standState.selectedStand;
  if (!stand) return null;

  return (
    <DialogUI open={dialogState.isDialogActive} onOpenChange={dialogState.setIsDialogActive}>
      <DialogContent className='w-full max-w-[90%] space-y-4'>
        <DialogHeader>
          <DialogTitle className='text-foreground text-xl font-bold'>{stand.name}</DialogTitle>
          <Badge variant='secondary' className='mt-1 w-fit text-xs uppercase max-sm:mx-auto'>
            {stand.category}
          </Badge>
        </DialogHeader>
        {stand.logoFilename && (
          <div className='flex justify-center'>
            <img
              src={getLogoImagesPath(stand.logoFilename)}
              alt={stand.name}
              className='max-h-28 rounded-md object-contain shadow-md'
            />
          </div>
        )}
        <DialogDescription className='text-muted-foreground mt-2 text-sm leading-relaxed whitespace-pre-wrap max-sm:text-center'>
          {stand.description}
        </DialogDescription>
      </DialogContent>
    </DialogUI>
  );
}
