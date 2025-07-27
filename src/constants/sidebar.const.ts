import {
  Building,
  BookOpen,
  HeartPulse,
  Wifi,
  ShoppingBag,
  Wrench,
  Factory,
  Car,
  Globe,
  Coffee,
  Megaphone,
  MoreHorizontal,
} from 'lucide-react';

export type Category = (typeof CATEGORIES)[number];

export const CATEGORIES = [
  {
    title: 'Institucional',
    icon: Building,
    isActive: true,
  },
  {
    title: 'Educação e Pesquisa',
    icon: BookOpen,
    isActive: false,
  },
  {
    title: 'Saúde e Bem-Estar',
    icon: HeartPulse,
    isActive: false,
  },
  {
    title: 'Tecnologia e Telecom',
    icon: Wifi,
    isActive: false,
  },
  {
    title: 'Comércio e Varejo',
    icon: ShoppingBag,
    isActive: false,
  },
  {
    title: 'Serviços e Consultoria',
    icon: Wrench,
    isActive: false,
  },
  {
    title: 'Indústria e Produção',
    icon: Factory,
    isActive: false,
  },
  {
    title: 'Mobilidade e Transporte',
    icon: Car,
    isActive: false,
  },
  {
    title: 'Turismo e Cultura',
    icon: Globe,
    isActive: false,
  },
  {
    title: 'Alimentos e Gastronomia',
    icon: Coffee,
    isActive: false,
  },
  {
    title: 'Comunicação e Mídia',
    icon: Megaphone,
    isActive: false,
  },
  {
    title: 'Outros',
    icon: MoreHorizontal,
    isActive: false,
  },
];
