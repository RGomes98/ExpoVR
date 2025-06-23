import {
  Building,
  BookOpen,
  HeartPulse,
  Wifi,
  ShoppingBag,
  Wrench,
  Factory,
  Car,
  MoreHorizontal,
} from 'lucide-react';

export type Category = (typeof CATEGORIES)[number];

export const CATEGORIES = [
  {
    title: 'Institucional',
    url: '#',
    icon: Building,
    isActive: true,
  },
  {
    title: 'Educação',
    url: '#',
    icon: BookOpen,
    isActive: false,
  },
  {
    title: 'Saúde',
    url: '#',
    icon: HeartPulse,
    isActive: false,
  },
  {
    title: 'Telecom',
    url: '#',
    icon: Wifi,
    isActive: false,
  },
  {
    title: 'Comércio',
    url: '#',
    icon: ShoppingBag,
    isActive: false,
  },
  {
    title: 'Serviços',
    url: '#',
    icon: Wrench,
    isActive: false,
  },
  {
    title: 'Indústria',
    url: '#',
    icon: Factory,
    isActive: false,
  },
  {
    title: 'Serviços Automotivos',
    url: '#',
    icon: Car,
    isActive: false,
  },
  {
    title: 'Outros',
    url: '#',
    icon: MoreHorizontal,
    isActive: false,
  },
];
