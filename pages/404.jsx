import { Fragment } from 'react';
import { Breadcrumb } from 'react-bootstrap';
import NextLink from 'components/NextLink';

const NotFound = () => {
  return (
    <Fragment>
      {/* Header breadcrumb-style banner */}
      <Breadcrumb className="d-flex flex-column align-items-center justify-content-center pt-14 pb-14 breadcrumbs">
        <div className="overlay"></div>
        <div className="text-center box">
          <h1 className="fs-48 text-main">Página no encontrada</h1>
          <p className="mt-2 text-white">{/* Optional message can be added here */}</p>
        </div>
      </Breadcrumb>

      {/* Main Content */}
      <main className="content-wrapper">
        <section className="wrapper bg-light">
          <div className="container pt-12 pt-md-14 pb-14 pb-md-16">
            <div className="row">
              <div className="col-lg-8 col-xl-7 col-xxl-6 mx-auto text-center">
                <h1 className="mb-3">¡Ups! No encontramos esta página.</h1>
                <p className="lead mb-7 px-md-12 px-lg-5 px-xl-7">
                  La página que buscas no está disponible o fue trasladada. Intenta visitar otra sección o regresa al
                  inicio con el botón.
                </p>
                {/* Optional CTA button can be placed here */}
                <NextLink
                  title="Ir al inicio"
                  href="/"
                  className="btn btn-md secondary-bg text-white mb-lg-1 rounded border border-md-none"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </Fragment>
  );
};

export default NotFound;