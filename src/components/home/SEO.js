import Head from 'next/head';

const SEO = () => (
  <Head>
    <title>Serverless SaaS</title>
    <meta
      name="description"
      content="Serverless SaaS is aiming to be the perfect starting point for your next React app to build full-stack applications. Save time and skip implementing authentication, payments, teams, etc."
    ></meta>
    <meta
      content="https://serverlesssaas.com/img/serverless-saas.png"
      property="og:image"
    ></meta>
    <meta content="https://serverlesssaas.com" property="og:url"></meta>
    <meta content="website" property="og:type"></meta>
    <meta content="Serverless SaaS Boilerplate" property="og:title"></meta>
    <meta
      content="Serverless SaaS is aiming to be the perfect starting point for your next React app to build full-stack applications. Save time and skip implementing authentication, payments, teams, etc."
      property="og:description"
    ></meta>

    {/* Twitter */}
    <meta name="twitter:title" content="Serverless SaaS Boilerplate"></meta>
    <meta
      name="twitter:description"
      content="Serverless SaaS is aiming to be the perfect starting point for your next React app to build full-stack applications. Save time and skip implementing authentication, payments, teams, etc."
    ></meta>
    <meta
      name="twitter:image"
      content="https://serverlesssaas.com/img/serverless-saas.png"
    ></meta>
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:image:alt" content="Serverless SaaS"></meta>

    {/* Favicon */}
    <link
      rel="apple-touch-icon"
      sizes="180x180"
      href="/favicon/apple-touch-icon.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="32x32"
      href="/favicon/favicon-32x32.png"
    />
    <link
      rel="icon"
      type="image/png"
      sizes="16x16"
      href="/favicon/favicon-16x16.png"
    />
    <link rel="manifest" href="/favicon/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/favicon/safari-pinned-tab.svg"
      color="#5bbad5"
    />
    <meta name="msapplication-TileColor" content="#2b5797"></meta>
    <meta name="theme-color" content="#ffffff"></meta>

    {/* Google Analytics */}
    {/* <script
      async
      src="https://www.googletagmanager.com/gtag/js?id=<YOUR_GA_ID_HERE>"
    />
    <script
      dangerouslySetInnerHTML={{
        __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '<YOUR_GA_ID_HERE>');
          `,
      }}
    /> */}
  </Head>
);

export default SEO;
