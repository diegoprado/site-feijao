'use client';

import { Fragment, PropsWithChildren } from 'react';
import { usePathname } from 'next/navigation';
// GLOBAL CUSTOM COMPONENTS
import { Footer8 } from 'components/blocks/footer';
import Navbar from 'components/blocks/navbar/navbar-1';
import NextLink from 'components/reuseable/links/NextLink';

export default function ServiceLayout({ children }: PropsWithChildren) {
  const pathname = usePathname();

  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className='wrapper bg-soft-red'>
        <Navbar
          logoAlt='logo-feijao'
          navClassName='navbar navbar-expand-lg center-nav transparent position-absolute caret-none'
        />
      </header>

      <main className='content-wrapper'>{children}</main>

      {/* ========== footer section ========== */}
      <Footer8 />
    </Fragment>
  );
}
