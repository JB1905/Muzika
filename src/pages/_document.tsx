import Document, { DocumentContext } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();

    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        styles: (
          <>
            <head>
              <meta
                name="viewport"
                content="viewport-fit=cover, width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
              />

              <meta
                name="apple-mobile-web-app-status-bar-style"
                content="black-translucent"
              />

              <meta charSet="utf-8" />
              <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
              {/* <meta name='viewport' content='width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no' /> */}
              {/* <meta name='description' content='Description' />
              <meta name='keywords' content='Keywords' /> */}
              {/* <title>Next.js PWA Example</title> */}

              <link rel="manifest" href="/manifest.json" />
              {/* <link href='/favicon.ico' rel='icon' /> */}
              {/* <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' /> */}

              {/* <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
              <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' /> */}
              <link rel="apple-touch-icon" href="/logo512.png" />
              {/* <link rel="apple-touch-icon" href="/apple-icon.png" /> */}
              {/* <meta name="theme-color" content="#317EFB"/> */}
            </head>

            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
