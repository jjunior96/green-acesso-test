import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { SidebarData } from './data';
import * as S from './styles';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <S.Container isOpen={isOpen}>
      <S.Logo>
        <Link href="/">
          <a>
            <Image src="/assets/logo.png" width={100} height={100} />
            <p>Green Acesso</p>
          </a>
        </Link>
      </S.Logo>
      <ul>
        {SidebarData.map((item) => (
          <li key={item.path}>
            <Link href={item.path}>
              <a>
                <p>{item.title}</p>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </S.Container>
  );
};

export default Sidebar;
