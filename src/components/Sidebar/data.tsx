import {
  RiDashboardFill,
  RiChat2Line,
  RiCheckboxFill,
  RiPieChart2Fill
} from 'react-icons/ri';
import { BsPeopleFill } from 'react-icons/bs';
import { IoExtensionPuzzleSharp } from 'react-icons/io5';

export interface SideBarProps {
  title: string;
  path: string;
}

export const SidebarData: SideBarProps[] = [
  {
    title: 'Pessoas',
    path: '/peoples'
  },
  {
    title: 'Equipamentos',
    path: '/equipaments'
  },
  {
    title: 'Grupos',
    path: '/groups'
  },
  {
    title: 'Áreas',
    path: '/areas'
  },
  {
    title: 'Unidades',
    path: '/unities'
  },
  {
    title: 'Livro de Lotes',
    path: '/book'
  },
  {
    title: 'Senhas do App',
    path: '/passwords'
  },
  {
    title: 'Operadores',
    path: '/analytics'
  }
];
