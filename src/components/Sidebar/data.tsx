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
