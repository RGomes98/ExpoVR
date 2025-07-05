import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import { Fragment, useState } from 'react';

import type { Category } from '@/constants/sidebar.const';
import type { Stand } from '@/constants/stands.const';
import { Dialog } from '@/components/Dialog';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Controls } from '@/components/Controls';
import { Stands } from '@/components/Stands';
import { Sidebar } from '@/components/Sidebar';
import { Image } from '@/components/Image';
import { useScaledStand } from '@/hooks/useScaledStand.hook';
import { useWindowSize } from '@/hooks/useWindowSize.hook';
import { getInitialScale } from '@/utils/window.util';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [selectedStand, setSelectedStand] = useState<Stand | null>(null);
  const [isDialogActive, setIsDialogActive] = useState(false);

  const { imageRef, computeStandSize } = useScaledStand();
  const { width } = useWindowSize();

  return (
    <Fragment>
      <TransformWrapper initialScale={getInitialScale(width)}>
        {({ resetTransform }) => {
          return (
            <SidebarProvider
              className='h-screen'
              style={{ '--sidebar-width': '450px' } as React.CSSProperties}
            >
              <Sidebar
                standState={{ selectedStand, setSelectedStand }}
                categoryState={{ activeCategory, setActiveCategory }}
              />
              <SidebarInset className='grid h-dvh grid-rows-[auto_1fr]'>
                <header className='bg-background sticky top-0 flex shrink-0 items-center gap-2 border-b p-4'>
                  <SidebarTrigger className='-ml-1' />
                  <Separator orientation='vertical' className='mr-2 data-[orientation=vertical]:h-4' />
                  <Breadcrumb>
                    <BreadcrumbList>
                      <BreadcrumbItem>
                        <BreadcrumbLink
                          href='#'
                          onClick={() => {
                            if (!activeCategory) return;
                            resetTransform();
                            setSelectedStand(null);
                            setActiveCategory(null);
                          }}
                        >
                          Categoria
                        </BreadcrumbLink>
                      </BreadcrumbItem>
                      <BreadcrumbSeparator />
                      <BreadcrumbItem>
                        <BreadcrumbPage>{activeCategory ? activeCategory.title : 'Todos'}</BreadcrumbPage>
                      </BreadcrumbItem>
                    </BreadcrumbList>
                  </Breadcrumb>
                </header>
                <TransformComponent
                  wrapperStyle={{ width: '100%', height: '100%' }}
                  contentClass='hover:cursor-grab active:cursor-grabbing'
                >
                  <Image imageRef={imageRef} />
                  <Stands
                    computeStandSize={computeStandSize}
                    standState={{ selectedStand, setSelectedStand }}
                    dialogState={{ isDialogActive, setIsDialogActive }}
                    categoryState={{ activeCategory, setActiveCategory }}
                  />
                </TransformComponent>
                <Controls />
              </SidebarInset>
            </SidebarProvider>
          );
        }}
      </TransformWrapper>
      <Dialog
        standState={{ selectedStand, setSelectedStand }}
        dialogState={{ isDialogActive, setIsDialogActive }}
      />
    </Fragment>
  );
}
