import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="description" content="Join the ultimate student community platform where you can discover like-minded peers, find the perfect roommates, and never miss out on campus events again." />
        <meta name="keywords" content="student community, college, university, roommates, campus events, social platform" />
        <meta name="author" content="GatorVibe" />
        <meta property="og:title" content="GatorVibe - Catch the Gator Vibe" />
        <meta property="og:description" content="Live, Connect, Belong. Join the ultimate student community platform." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="GatorVibe - Catch the Gator Vibe" />
        <meta name="twitter:description" content="Live, Connect, Belong. Join the ultimate student community platform." />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-16.svg" type="image/svg+xml" sizes="16x16" />
        <link rel="icon" href="/favicon.ico" sizes="32x32" />
        <link rel="apple-touch-icon" href="/favicon-192.svg" sizes="192x192" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#8B5CF6" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}