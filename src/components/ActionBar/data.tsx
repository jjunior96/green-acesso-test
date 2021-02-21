import {
  RiAddCircleLine,
  RiEditCircleLine,
  RiDeleteBin6Line
} from 'react-icons/ri';
import { MdFingerprint, MdUpdate } from 'react-icons/md';

export const ActionBarData = [
  {
    id: '1',
    name: 'Adicionar',
    icon: <RiAddCircleLine />
  },
  {
    id: '2',
    name: 'Editar',
    icon: <RiEditCircleLine />
  },
  {
    id: '3',
    name: 'Biometria',
    icon: <MdFingerprint />
  },
  {
    id: '4',
    name: 'Deletar',
    icon: <RiDeleteBin6Line />
  },
  {
    id: '5',
    name: 'Atualizar',
    icon: <MdUpdate />
  }
];
