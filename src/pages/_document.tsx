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
              {/* <title>Muzika</title> */}

              <link rel="manifest" href="/manifest.json" />
              {/* <link href='/favicon.ico' rel='icon' /> */}
              {/* <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' /> */}

              {/* <link href='/favicon-16x16.png' rel='icon' type='image/png' sizes='16x16' />
              <link href='/favicon-32x32.png' rel='icon' type='image/png' sizes='32x32' /> */}
              {/* <link rel="apple-touch-icon" href="/logo512.png" /> */}
              {/* <link rel="apple-touch-icon" href="/apple-icon.png" /> */}
              {/* <meta name="theme-color" content="#317EFB"/> */}

              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2048-2732.jpg"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2732-2048.jpg"
                media="(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1668-2388.jpg"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2388-1668.jpg"
                media="(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1536-2048.jpg"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2048-1536.jpg"
                media="(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1668-2224.jpg"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2224-1668.jpg"
                media="(device-width: 834px) and (device-height: 1112px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1620-2160.jpg"
                media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2160-1620.jpg"
                media="(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1284-2778.jpg"
                media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2778-1284.jpg"
                media="(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1170-2532.jpg"
                media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2532-1170.jpg"
                media="(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1125-2436.jpg"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2436-1125.jpg"
                media="(device-width: 375px) and (device-height: 812px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1242-2688.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2688-1242.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-828-1792.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1792-828.jpg"
                media="(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1242-2208.jpg"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-2208-1242.jpg"
                media="(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-750-1334.jpg"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1334-750.jpg"
                media="(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-640-1136.jpg"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)"
              />
              <link
                rel="apple-touch-startup-image"
                href="assets/apple-splash-1136-640.jpg"
                media="(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: landscape)"
              />
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
