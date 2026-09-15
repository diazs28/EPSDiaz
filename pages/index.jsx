import { Fragment } from 'react';
import Head from 'next/head';
import PageProgress from 'components/PageProgress';
import Hero from 'components/Hero';
import About from 'components/About';
import Services from 'components/Services';
import EngineeringFaculties from 'components/EngineeringFaculties';

const Home = () => {
  return (
    <Fragment>
      <PageProgress />

      <Head>
        <title>EPSDiaz - Atención médica en Bogotá</title>
        <meta name="description" content="EPSDiaz brinda atención médica especializada, humana y confiable en Bogotá, Colombia." />
        <meta name="date" content="2026-09-15" />
        <link rel="canonical" href="https://epsdiaz.com" />
      </Head>

      <main className="content-wrapper overflow-hidden">
        {/* Hero Section */}
        <Hero />

        {/* Sección sobre nosotros */}
        <section className="wrapper bg-light">
          <div className="container pt-8 pt-md-15">
            <About
              imgPosition="right"
              imgSrc="/img/ent.webp"
              heading="Atención médica de confianza en Bogotá"
              para="En EPSDiaz brindamos atención médica especializada con un enfoque humano, cercano y seguro. Nuestro equipo acompaña a cada paciente con profesionales comprometidos y servicios de salud pensados para las familias colombianas."
              isH1="true"
            />
          </div>
        </section>

        {/* Sección de servicios */}
        <section className="wrapper bg-light py-10 py-md-14">
          <div className="container">
            <div className="col-md-10 col-lg-8">
              <p className="fs-80 fw-bolder sub-h2 position-relative">Servicios</p>
              <h2 className="display-5 mb-16 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head">
                Servicios de salud en Bogotá
                <span
                  className="ms-2 d-inline-block"
                  style={{
                    borderBottom: '3px solid #D8D8D8',
                    width: '30px',
                    height: 0,
                  }}
                />
              </h2>
            </div>

            {/* Services Grid */}
            <Services />
          </div>
        </section>

        <EngineeringFaculties />
      </main>
    </Fragment>
  );
};

export default Home;
