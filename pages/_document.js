import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
   static async getInitialProps(ctx) {
      const initialProps = await Document.getInitialProps(ctx);
      return { ...initialProps };
   }

   render() {
      return (
         <Html>
            <Head>
               {/* Meta Elements
               ======================================================== */}
               <meta
                  name="description"
                  content="Generated by create next app"
               />
               <meta name="keywords" content="keyword 1, keyword 2" />
               {/* ==================================================== */}

               {/* Google Fonts
               ======================================================== */}
               <link
                  href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
                  rel="stylesheet"
               />
               {/* ==================================================== */}

               {/* Favicons
               ======================================================== */}
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
                  color="#000000"
               />
               <link rel="shortcut icon" href="/favicon/favicon.ico" />
               <meta
                  name="apple-mobile-web-app-title"
                  content="inlovenessphotography pricing"
               />
               <meta
                  name="application-name"
                  content="inlovenessphotography pricing"
               />
               <meta name="msapplication-TileColor" content="#eedbcd" />
               <meta
                  name="msapplication-config"
                  content="/favicon/browserconfig.xml"
               />
               <meta name="theme-color" content="#f6eee9" />
               {/* ==================================================== */}
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;