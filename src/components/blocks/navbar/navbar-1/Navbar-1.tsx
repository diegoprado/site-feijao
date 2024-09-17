'use client';

import { Fragment, ReactElement, useRef } from 'react';
// -------- CUSTOM HOOKS -------- //
import useSticky from 'hooks/useSticky';
import useNestedDropdown from 'hooks/useNestedDropdown';
// -------- CUSTOM COMPONENTS -------- //
import NextLink from 'components/reuseable/links/NextLink';
import SocialLinks from 'components/reuseable/SocialLinks';
// LOCAL CUSTOM COMPONENTS
import Info from '../components/Info';
import Search from '../components/search';
import Signin from '../components/signin';
import Signup from '../components/signup';
import MiniCart from '../components/mini-cart';
import HeaderRight from '../components/header-right';
import FancyHeader from '../components/fancy-header';
import BlogNavItem from '../components/blog-nav-item';
import DemosNavItem from '../components/demos-nav-item';
import PagesNavItem from '../components/pages-nav-item';
import BlocksNavItem from '../components/blocks-nav-item';
import ProjectsNavItem from '../components/projects-nav-item';
import DocumentationNavItem from '../components/documentation-nav-item';
import DropdownToggleLink from 'components/reuseable/links/DropdownToggleLink';
import Link from 'next/link';

// ===================================================================
interface NavbarProps {
  info?: boolean;
  cart?: boolean;
  fancy?: boolean;
  logoAlt?: string;
  search?: boolean;
  social?: boolean;
  language?: boolean;
  stickyBox?: boolean;
  navClassName?: string;
  button?: ReactElement;
  navOtherClass?: string;
}
// ===================================================================

export default function NavbarOne({
  fancy,
  button,
  logoAlt,
  cart = false,
  info = false,
  social = false,
  search = false,
  language = false,
  stickyBox = true,
  navOtherClass = 'navbar-other w-100 d-flex ms-auto',
  navClassName = 'navbar navbar-expand-lg center-nav transparent navbar-light',
}: NavbarProps) {
  useNestedDropdown();
  const sticky = useSticky(350);
  const navbarRef = useRef<HTMLElement | null>(null);

  // dynamically render the logo
  const logo = sticky ? 'logo-feijao-dark' : logoAlt ?? 'logo-feijao';

  // dynamically added navbar className
  const fixedClassName =
    'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed';

  // all main header contents
  const headerContent = (
    <Fragment>
      <div className='navbar-brand w-100 py-2'>
        <NextLink
          href='/'
          className=''
          title={
            <img
              className={`max-w-[130px] ${sticky ? 'max-h-[50px]' : ''}`}
              alt='logo'
              src={`/img/${logo}.svg`}
              srcSet={`/img/${logo}.svg 3x`}
              // src='/img/logo-feijao.png'
            />
          }
        />
      </div>

      <div
        id='offcanvas-nav'
        data-bs-scroll='true'
        className='navbar-collapse offcanvas offcanvas-nav offcanvas-start w-100'
      >
        <div className='offcanvas-header d-lg-none'>
          <NextLink
            href='/'
            title={
              <img
                className='w-100'
                alt='logo'
                src={`/img/${logo}-dark.svg`}
                srcSet={`/img/${logo}-dark.svg 3x`}
              />
            }
          />

          <button
            type='button'
            aria-label='Close'
            data-bs-dismiss='offcanvas'
            className='btn-close btn-close-white'
          />
        </div>

        <div className='offcanvas-body ms-lg-auto d-flex flex-column h-100'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link href='#quem-sou' title='Quem sou' className='nav-link'>
                Quem sou
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#' title='O que penso' className='nav-link'>
                O que penso
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#' title='' className='nav-link'>
                A BH que eu quero
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#' title='' className='nav-link'>
                Time do Feijão
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#' title='' className='nav-link'>
                Contato
              </Link>
            </li>
            <li className='nav-item'>
              <Link href='#' title='' className='nav-link'>
                Materiais
              </Link>
            </li>
          </ul>

          {/* ============= show contact info in the small device sidebar ============= */}
          <div className='offcanvas-footer d-lg-none'>
            <div>
              <NextLink
                title='info@email.com'
                className='link-inverse'
                href='mailto:first.last@email.com'
              />
              <br />
              <NextLink href='tel:0123456789' title='00 (123) 456 78 90' />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      {/* ============= right side header content ============= */}
      <HeaderRight
        // cart={cart}
        // info={info}
        // button={button}
        // search={search}
        // social={social}
        // language={language}
        navOtherClass={navOtherClass}
      />
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox ? (
        <div
          style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }}
        />
      ) : null}

      <nav ref={navbarRef} className={sticky ? fixedClassName : navClassName}>
        {fancy ? (
          <FancyHeader>{headerContent}</FancyHeader>
        ) : (
          <div className='container flex-lg-row flex-nowrap align-items-center'>
            {headerContent}
          </div>
        )}
      </nav>

      {/* ============= signin modal ============= */}
      <Signin />

      {/* ============= signup modal ============= */}
      <Signup />

      {/* ============= info sidebar ============= */}
      {info ? <Info /> : null}

      {/* ============= show search box ============= */}
      {search ? <Search /> : null}

      {/* ============= cart sidebar ============= */}
      {cart ? <MiniCart /> : null}
    </Fragment>
  );
}
