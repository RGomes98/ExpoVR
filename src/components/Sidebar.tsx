import type { ComponentProps, Dispatch, SetStateAction } from 'react';
import { useControls } from 'react-zoom-pan-pinch';
import { SearchX } from 'lucide-react';
import { useState } from 'react';

import type { Stand } from '@/constants/stands.const';
import type { Category } from '@/constants/sidebar.const';
import { CATEGORIES } from '@/constants/sidebar.const';
import { STANDS } from '@/constants/stands.const';
import { useWindowSize } from '@/hooks/useWindowSize.hook';
import { getLogoImagesPath } from '@/utils/file.util';
import { getZoomScale } from '@/utils/window.util';
import { useIsMobile } from '@/hooks/useIsMobile.hook';

import logo from '@/assets/logos/expovr-logo.png';

import {
  Sidebar as SidebarUI,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarInput,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';

type SidebarProps = ComponentProps<typeof SidebarUI> & {
  categoryState: {
    activeCategory: Category | null;
    setActiveCategory: Dispatch<SetStateAction<Category | null>>;
  };
  standState: { selectedStand: Stand | null; setSelectedStand: Dispatch<SetStateAction<Stand | null>> };
};

export function Sidebar({ categoryState, standState, ...props }: SidebarProps) {
  const [activeSearch, setActiveSearch] = useState('');
  const { zoomToElement, resetTransform } = useControls();
  const { setOpen, setOpenMobile } = useSidebar();

  const dimensions = useWindowSize();
  const isMobile = useIsMobile();

  const filteredStands = STANDS.filter((stand) => {
    const hasActiveSearch = Boolean(activeSearch.trim());
    if (!hasActiveSearch) return stand;
    return stand.name.toLowerCase().includes(activeSearch.toLowerCase().trim());
  }).filter((stand) => {
    const activeCategory = categoryState.activeCategory;
    if (!activeCategory) return stand;
    return stand.category === activeCategory.title;
  });

  const hasStandsToShow = filteredStands.length > 0;

  return (
    <SidebarUI collapsible='icon' className='overflow-hidden *:data-[sidebar=sidebar]:flex-row' {...props}>
      <SidebarUI collapsible='none' className='w-[calc(var(--sidebar-width-icon)+1px)]! border-r'>
        <SidebarHeader className='border-b'>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton size='lg' asChild className='md:h-8 md:p-0'>
                <div>
                  <div className='bg-sidebar-primary-foreground text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                    <img src={logo} className='object-cover' alt='expovr-logo' />
                  </div>
                  <div className='grid flex-1 text-left text-sm leading-tight'>
                    <span className='truncate font-medium'>ExpoVR</span>
                    <span className='truncate text-xs'>Pavilhão de Negócios e Exposição </span>
                  </div>
                </div>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className='border-b'>
            <SidebarGroupContent className='px-1.5 md:px-0'>
              <SidebarMenu>
                {CATEGORIES.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      className='cursor-pointer px-2.5 md:px-2'
                      tooltip={{ children: item.title, hidden: isMobile }}
                      isActive={categoryState.activeCategory?.title === item.title}
                      onClick={() => {
                        setOpen(true);
                        resetTransform();
                        setOpenMobile(false);
                        standState.setSelectedStand(null);
                        categoryState.setActiveCategory((prev) => (prev?.title === item.title ? null : item));
                      }}
                    >
                      <item.icon />
                      <span>{item.title}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarUI>
      <SidebarUI collapsible='none' className='hidden flex-1 md:flex'>
        <SidebarHeader className='gap-3.5 border-b p-4'>
          <div className='flex w-full items-center justify-between'>
            <div className='text-foreground text-base font-medium'>
              ExpoVR 2025 - Pavilhão de Negócios e Exposição
            </div>
          </div>
          <SidebarInput
            value={activeSearch}
            placeholder='O que você procura?'
            onChange={(event) => setActiveSearch(event.target.value)}
          />
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup className={`${!hasStandsToShow && 'my-auto'} px-0`}>
            <SidebarGroupContent>
              {hasStandsToShow ? (
                filteredStands.map((stand) => {
                  return (
                    <button
                      key={stand.id}
                      onClick={() => {
                        zoomToElement(stand.id, getZoomScale(dimensions.width));
                        standState.setSelectedStand(stand);
                      }}
                      className='hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex w-full cursor-pointer items-start gap-4 border-b p-4 text-left text-sm leading-tight whitespace-nowrap last:border-b-0'
                    >
                      <div className='flex flex-1 flex-col items-start gap-1'>
                        <span className='font-semibold'>{stand.name}</span>
                        <span className='text-muted-foreground text-xs'>{stand.category}</span>
                        <span className='line-clamp-2 w-full text-xs whitespace-break-spaces'>
                          {stand.description}
                        </span>
                      </div>
                      {stand.logoFilename && (
                        <img
                          alt={stand.name}
                          src={getLogoImagesPath(stand.logoFilename)}
                          className='my-auto h-12 w-12 shrink-0 object-contain'
                        />
                      )}
                    </button>
                  );
                })
              ) : (
                <div className='text-muted-foreground flex flex-col items-center justify-center gap-2 py-8 text-center'>
                  <SearchX className='h-8 w-8 opacity-50' />
                  <span className='text-sm'>Nenhum stand encontrado com a busca atual.</span>
                </div>
              )}
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </SidebarUI>
    </SidebarUI>
  );
}
