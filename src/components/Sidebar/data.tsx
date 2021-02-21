import { BsPerson } from 'react-icons/bs';
import { BiLineChart, BiMessage, BiHelpCircle } from 'react-icons/bi';

import { AiFillSetting } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';

export const SidebarData = [
  {
    id: '1',
    name: 'Cadastros',
    icon: <BsPerson />,
    children: [
      {
        id: '10',
        title: 'Pessoas',
        path: '/peoples'
      },
      {
        id: '11',
        title: 'Equipamentos',
        path: '/equipaments'
      },
      {
        id: '12',
        title: 'Grupos',
        path: '/groups'
      },
      {
        id: '13',
        title: 'Áreas',
        path: '/areas'
      },
      {
        id: '14',
        title: 'Unidades',
        path: '/unities'
      },
      {
        id: '15',
        title: 'Livro de Lotes',
        path: '/book'
      },
      {
        id: '16',
        title: 'Senhas do App',
        path: '/passwords'
      },
      {
        id: '17',
        title: 'Operadores',
        path: '/analytics'
      }
    ]
  },
  {
    id: '2',
    name: 'Relatórios',
    icon: <BiLineChart />
  },
  {
    id: '3',
    name: 'Avisos',
    icon: <BiMessage />
  }
];

export const SettingsData = [
  {
    id: '1',
    name: 'Configurações',
    icon: <AiFillSetting />
  },
  {
    id: '2',
    name: 'Ajuda',
    icon: <BiHelpCircle />
  },
  {
    id: '3',
    name: 'Sair',
    icon: <RiLogoutBoxRLine />
  }
];
