import React from 'react';
import Image from 'next/image';
import styles from '/styles/components/header.module.scss';

import Logo from '/public/inloveness_logo.svg';

const Header = () => {
   return (
      <header className={styles.header}>
         <Image
            src={Logo}
            alt="inloveness photography"
            className={styles.headerImage}
            height={45}
         />
      </header>
   );
};

export default Header;
