import { Fragment, useEffect, useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { ToastContainer } from 'react-toastify';
import Layout from 'components/Layout';
import ThemeProvider from 'theme/ThemeProvider';

import 'animate.css';
import 'styles/style.css';
import 'styles/responsive.css';
import 'plyr-react/plyr.css';
import 'plugins/scrollcue/scrollCue.css';
import 'assets/scss/style.scss';

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') import('bootstrap');
  }, []);

  useEffect(() => {
    (async () => {
      const scrollCue = (await import('plugins/scrollcue')).default;
      scrollCue.init({
        interval: -400,
        duration: 700,
        percentage: 0.8,
      });
      scrollCue.update();
    })();
  }, [pathname]);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 300); // debounce initial load
    return () => clearTimeout(timeout);
  }, []);

  return (
    <Fragment>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>EPSDiaz - Atención médica especializada</title>
        <meta name="description" content="EPSDiaz ofrece atención médica especializada, cercana y confiable para familias en Colombia." />
        <meta name="date" content="2026-09-15" />

        {/* Open Graph Meta */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="EPSDiaz - Atención médica especializada" />
        <meta property="og:description" content="Atención médica especializada, cercana y confiable en Colombia." />
        <meta property="og:url" content="https://epsdiaz.com/" />
        <meta property="og:image" content="https://epsdiaz.com/img/logo-epsdiaz.svg" />
        <meta property="og:image:secure_url" content="https://epsdiaz.com/img/logo-epsdiaz.svg" />

        {/* Twitter Meta */}
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="EPSDiaz - Atención médica especializada" />
        <meta name="twitter:description" content="Atención médica especializada, cercana y confiable en Colombia." />
        <meta name="twitter:image" content="https://epsdiaz.com/img/logo-epsdiaz.svg" />
      </Head>

      <ThemeProvider>
        <Layout>
          <ToastContainer position="bottom-right" autoClose={5000} />
          {loading ? <div className="page-loader" /> : <Component {...pageProps} />}
        </Layout>
      </ThemeProvider>
    </Fragment>
  );
}

export default MyApp;
