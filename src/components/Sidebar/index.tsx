import { useCallback, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { SidebarData, SettingsData } from './data';
import * as S from './styles';

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(true);

  const handleOpenMenu = useCallback(() => {
    setMenuOpen(!menuOpen);
  }, [menuOpen]);

  return (
    <S.Container aria-label="sidebar">
      <S.Content>
        <S.Logo>
          <Link href="/">
            <a>
              <Image src="/assets/logo.png" width={100} height={100} />
              <p>Green Acesso</p>
            </a>
          </Link>
        </S.Logo>
        <S.MenuContainer>
          {SidebarData.map((item) => (
            <>
              <S.MenuTitle key={item.id} onClick={handleOpenMenu}>
                {item.icon}
                {item.name}
              </S.MenuTitle>
              {item.children?.map((subItem) => (
                <S.MenuItem isOpen={menuOpen} key={subItem.id}>
                  <Link href={subItem.path}>
                    <a>
                      <p> - {subItem.title}</p>
                    </a>
                  </Link>
                </S.MenuItem>
              ))}
            </>
          ))}
        </S.MenuContainer>
      </S.Content>

      <S.MenuContainer>
        {SettingsData.map((itemMenu) => (
          <S.MenuTitle key={itemMenu.id}>
            {itemMenu.icon}
            {itemMenu.name}
          </S.MenuTitle>
        ))}
      </S.MenuContainer>
    </S.Container>
  );
};

export default Sidebar;
