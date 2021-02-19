import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BsPerson } from 'react-icons/bs';
import { BiLineChart, BiMessage, BiHelpCircle } from 'react-icons/bi';
import { AiFillSetting } from 'react-icons/ai';
import { RiLogoutBoxRLine } from 'react-icons/ri';

import { SidebarData } from './data';
import * as S from './styles';

const Sidebar = () => {
  return (
    <S.Container>
      <S.Logo>
        <Link href="/">
          <a>
            <Image src="/assets/logo.png" width={100} height={100} />
            <p>Green Acesso</p>
          </a>
        </Link>
      </S.Logo>
      <S.MenuContainer>
        <S.MenuTitle>
          <BsPerson />
          Cadastros
        </S.MenuTitle>
        {SidebarData.map((item) => (
          <S.MenuItem key={item.path}>
            <Link href={item.path}>
              <a>
                <p> - {item.title}</p>
              </a>
            </Link>
          </S.MenuItem>
        ))}
        <S.MenuTitle>
          <BiLineChart />
          Relatórios
        </S.MenuTitle>
        <S.MenuTitle>
          <BiMessage />
          Avisos
        </S.MenuTitle>
      </S.MenuContainer>

      <S.Settings>
        <S.MenuContainer>
          <S.MenuTitle>
            <AiFillSetting />
            Configurações
          </S.MenuTitle>
          <S.MenuTitle>
            <BiHelpCircle />
            Ajuda
          </S.MenuTitle>
          <S.MenuTitle>
            <RiLogoutBoxRLine />
            Sair
          </S.MenuTitle>
        </S.MenuContainer>
      </S.Settings>
    </S.Container>
  );
};

export default Sidebar;
