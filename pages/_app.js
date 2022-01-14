import { AppProvider } from 'context'
import Head from 'next/head'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }) => (
  <>
    <Head>
      <title>Styleguideist</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <link href="/css/index.css" rel="stylesheet" />
    </Head>
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
    <style global jsx>{`
      input:checked + div {
        @apply border-indigo-500;
      }
      input:checked + div svg {
        @apply block;
      }

      .sketch-picker {
        z-index: 10;
      }

      .parameters {
        min-width: calc(18rem + 30px);
        max-width: calc(18rem + 30px);
        transform: scale(0.8);
        transform-origin: top right;

        -ms-overflow-style: none; /* Internet Explorer 10+ */
        scrollbar-width: none; /* Firefox */
      }

      .parameters::-webkit-scrollbar {
        display: none; /* Safari and Chrome */
      }

      .strike:before,
      .strike:after {
        content: '';
        height: 1px;
        background: var(--theme-ui-colors-borderColor);
        width: 100%;
        opacity: 0.75;
      }

      .strike:before {
        right: 100%;
        margin-right: 15px;
      }

      .strike:after {
        left: 100%;
        margin-left: 15px;
      }

      body {
        overflow: hidden;
        margin: 0px !important;
      }

      .prose ul {
        list-style: inside !important;
      }

      .prose ul > li {
        list-style: inside !important;
      }
    `}</style>
  </>
)

export default App
