import { Fragment, useRef, useState } from 'react';
import useSticky from 'hooks/useSticky';
import Image from 'next/image';
import Link from 'next/link';

import NextLink from './NextLink';
import SocialLinks from './SocialLinks';
import ListItemLink from './ListItemLink';
import DropdownToggleLink from './DropdownToggleLink';

import { surgery, treatments, aboutUs } from '../data.js';

const Navbar = ({ navClassName, navOtherClass, fancy, stickyBox }) => {
  const sticky = useSticky(350);
  const navbarRef = useRef(null);

  const [surgeryCategory, setSurgeryCategory] = useState('ear');

  const handleSurgeryCategory = (category) => () => {
    setSurgeryCategory(category);
  };

  const surgeryMenu = [
    { id: 1, title: 'Servicios de oído', category: 'ear' },
    { id: 2, title: 'Servicios de nariz', category: 'nose' },
    { id: 3, title: 'Servicios de garganta', category: 'throat' },
    { id: 4, title: 'Servicios de cabeza y cuello', category: 'head' }
  ];

  const renderLinks = (links) =>
    links.map((item) => (
      <ListItemLink href="#" title={item.title} linkClassName="dropdown-item" key={item.id} />
    ));

  const headerContent = (
    <Fragment>
      <div className="navbar-brand w-100">
        <NextLink
          href="/"
          title={<Image alt="Logo | EPSDiaz" className="py-2" src="/img/logo-epsdiaz.svg" width={180} height={80} />}
        />
      </div>

      <div
        id="offcanvas-nav"
        data-bs-scroll="true"
        className="navbar-collapse offcanvas offcanvas-nav offcanvas-start"
      >
        <div className="offcanvas-header d-lg-none offcavas-bg nav-logo">
          <NextLink
            href="/"
            title={
              <Image
                id="nav-logo"
                alt="Logo | EPSDiaz"
                className="p-2 position-static bg-white rounded"
                src="/img/logo-epsdiaz.svg"
                style={{ maxWidth: '200px' }}
                layout="fill"
              />
            }
          />
          <button
            type="button"
            aria-label="Close"
            data-bs-dismiss="offcanvas"
            className="btn-close btn-close-white ms-auto"
          />
        </div>

        <div className="offcanvas-body ms-lg-auto d-flex flex-column h-100 offcavas-bg">
          <ul className="navbar-nav">
            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="/" title="Inicio" className="nav-link" />
            </li>

            <li className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink title="Nosotros" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                {aboutUs.map(({ id, url, title, children }) => (
                  children ? (
                    <li className="dropdown dropdown-submenu dropend" key={id}>
                      <DropdownToggleLink title="Nosotros " />
                      <ul className="dropdown-menu">{renderLinks(children)}</ul>
                    </li>
                  ) : (
                    <ListItemLink key={id} href="#" title={title} linkClassName="dropdown-item" />
                  )
                ))}
              </ul>
            </li>

            <li className="nav-item d-lg-none" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Nosotros" className="nav-link" />
            </li>
            <li className="nav-item d-lg-none" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Nuestro equipo" className="nav-link" />
            </li>
            <li className="nav-item d-lg-none" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Galería" className="nav-link" />
            </li>

            <li className="nav-item dropdown d-none d-lg-block">
              <DropdownToggleLink title="Servicios" className="nav-link dropdown-toggle" href="#" />
              <div className="dropdown-menu dropdown-lg">
                <div className="dropdown-lg-content">
                  <div>
                    {surgeryMenu.map(({ id, title, category }) => (
                      <h4 className="dropdown-header surgery-headings" key={id}>
                        <li onMouseEnter={handleSurgeryCategory(category)}>
                          <Link className="dropdown-item" href="#">
                            {title}
                          </Link>
                        </li>
                      </h4>
                    ))}
                  </div>

                  {surgeryCategory === 'ear' && (
                    <div>
                      <h4 className="dropdown-header d-header">Servicios de oído</h4>
                      <ul className="list-unstyled justify-content-center">
                        {["Timpanoplastia", "Mastoides", "Estribo", "Miringotomía"].map((surgery, idx) => (
                          <li key={idx}>
                            <Link className="dropdown-item" href="#">
                              {surgery}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {surgeryCategory === 'nose' && (
                    <div>
                      <h4 className="dropdown-header d-header">Servicios de nariz</h4>
                      <ul className="list-unstyled justify-content-center">
                        {[
                          "Adenoidectomía",
                          "Septoplastia",
                          "Senos paranasales",
                          "Base de cráneo",
                          "Hipófisis",
                          "Dacriocistorrinostomía endonasal"
                        ].map((surgery, idx) => (
                          <li key={idx}>
                            <Link className="dropdown-item" href="#">
                              {surgery}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {surgeryCategory === 'throat' && (
                    <div>
                      <h4 className="dropdown-header d-header">Servicios de garganta</h4>
                      <ul className="list-unstyled justify-content-center">
                        {[
                          "Amigdalectomía",
                          "Tiroides",
                          "Parótida",
                          "Microlaríngea",
                          "Broncoscopia",
                          "Laringoscopia directa y biopsia"
                        ].map((surgery, idx) => (
                          <li key={idx}>
                            <Link className="dropdown-item" href="#">
                              {surgery}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>

            <li className="nav-item dropdown d-lg-none">
              <DropdownToggleLink title="Servicios" className="nav-link dropdown-toggle" />
              <ul className="dropdown-menu">
                {surgery.map(({ id, title, children, url }) => (
                  children ? (
                    <li className="dropdown dropdown-submenu dropend" key={id}>
                      <DropdownToggleLink title={title} className="dropdown-item dropdown-toggle" />
                      <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                        {children.map((child) => (
                          <ListItemLink
                            key={child.id}
                            href="#"
                            title={child.title}
                            linkClassName="dropdown-item"
                          />
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <ListItemLink key={id} href="#"title={title} linkClassName="dropdown-item" />
                  )
                ))}
              </ul>
            </li>

            {["d-none d-lg-block", "d-lg-none"].map((cls, index) => (
              <li className={`nav-item dropdown ${cls}`} key={index}>
                <DropdownToggleLink title="Tratamientos" className="nav-link dropdown-toggle" />
                <ul className="dropdown-menu" data-bs-dismiss="offcanvas">
                  {treatments.map(({ id, title, children }) => (
                    children ? (
                      <li className="dropdown dropdown-submenu dropend" key={id}>
                        <DropdownToggleLink title="Tratamientos" />
                        <ul className="dropdown-menu">{renderLinks(children)}</ul>
                      </li>
                    ) : (
                      <ListItemLink key={id} href="#" title={title} linkClassName="dropdown-item" />
                    )
                  ))}
                </ul>
              </li>
            ))}

            <li className="nav-item" data-bs-dismiss="offcanvas">
              <NextLink href="#" title="Contáctanos" className="nav-link" />
            </li>
            <li
              className="nav-item align-items-center d-flex mt-3 mt-lg-0 ms-lg-3"
              data-bs-dismiss="offcanvas"
            >
              <NextLink
                title="Solicitar cita"
                href="#"
                className="btn btn-sm secondary-bg text-white mb-lg-1 rounded border border-md-none"
              />
            </li>
          </ul>

          <div className="offcanvas-footer d-lg-none">
            <div>
              <NextLink
                title="contacto@epsdiaz.com"
                className="link-inverse"
                href="mailto:contacto@epsdiaz.com"
              />
              <br />
              <NextLink href="tel:+576013456789" title="+57 (601) 345 6789" />
              <br />
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>

      <div className={navOtherClass}>
        <button
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
          className="hamburger offcanvas-nav-btn"
        >
          <span />
        </button>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      {stickyBox && <div style={{ paddingTop: sticky ? navbarRef.current?.clientHeight : 0 }} />}

      <nav ref={navbarRef} className={sticky ? 'navbar navbar-expand-lg center-nav transparent navbar-light navbar-clone fixed' : navClassName}>
        {fancy ? (
          <div className="container">
            <div className="navbar-collapse-wrapper bg-white d-flex flex-row flex-nowrap w-100 justify-content-between align-items-end">
              {headerContent}
            </div>
          </div>
        ) : (
          <div className="container flex-lg-row flex-nowrap align-items-center">{headerContent}</div>
        )}
      </nav>
    </Fragment>
  );
};

Navbar.defaultProps = {
  stickyBox: true,
  navOtherClass: 'navbar-other  d-flex  d-lg-none',
  navClassName: 'navbar navbar-expand-lg center-nav transparent navbar-light'
};

export default Navbar;
