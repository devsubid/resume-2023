import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";
import Head from "next/head";
import profile from "../public/profile.jpg";

const GlobalStyle = createGlobalStyle`
  :root{
    --light-color: 255, 255, 255;
    --dark-color: 49, 49, 49;
    --primary-color: 251, 195, 27;
    --secondary-color: 0, 122, 163;
    scroll-behavior: smooth;
  }
  ::-webkit-scrollbar {
    width: 0;
  }
  html, body {
  overflow-x: hidden;
  }
  body {
    position: relative;
  }
  * {
    font-family: var(--font-poppins);
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }
  body {
    padding-block: 4rem;
    background-color: rgb(var(--light-color));
    color: rgb(var(--dark-color));
    @media screen and (max-width: 40rem) {
      padding-block: 2rem;
    }
  }
  .container {
    margin-inline: auto;
    width: min(90%, 70rem);
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1 },
};

export default function App({ Component, pageProps }: AppProps) {
  const og = {
    title: "SUBID DAS",
    describedTitle: "RESUME of SUBID DAS",
    description:
      "Resume-2023 is a visually stunning resume website built using Next.js, TypeScript, and Styled-Components.",
    image: profile.src,
    url: "https://itsme-subid.vercel.app/",
  };
  return (
    <div className={poppins.variable}>
      <Head>
        <title>{og.title}</title>
        <meta
          name="google-site-verification"
          content="aUOx7BZBGMEAbtDsLf9bN1BvycMZwahF4zDqu0EtQCw"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta name="description" content={og.description} />

        <link rel="canonical" href={og.url} />
        <script type="application/ld+json">
          {`
      {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Full-Stack Developer",
            "@id": ${og.url},
            "name": ${og.describedTitle},
            "url": ${og.url},
            "sameAs": [
              "https://www.instagram.com/itsme_subid/",
              "https://twitter.com/ItsmeSubid"
            ],
            "logo": {
              "@type": "ImageObject",
              "@id": ${og.url},
              "inLanguage": "en-US",
              "url": ${og.image},
              "contentUrl": ${og.image},
              "width": 1000,
              "height": 1000,
              "caption": "itsme-Subid"
            },
            "image": { "@id": ${og.url} }
          },
          {
            "@type": "WebPage",
            "@id": ${og.url},
            "url": ${og.url},
            "name": ${og.describedTitle},
            "isPartOf": {
              "@id": ${og.url}
            },
            "about": { "@id": ${og.url} },
            "description": ${og.description},
            "inLanguage": "en-US"
          }
        ]
      }
      `}
        </script>
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={og.title} />
        <meta property="og:url" content={og.url} />
        <meta property="og:title" content={og.describedTitle} />
        <meta property="og:description" content={og.description} />
        <meta property="og:image" content={og.image} />
        <meta property="og:locale" content="en_US" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={og.url} />
        <meta property="twitter:title" content={og.describedTitle} />
        <meta property="twitter:description" content={og.description} />
        <meta property="twitter:image" content={og.image} />
        <meta name="twitter:site" content="@itsme-Subid" />
        <meta name="twitter:creator" content="@itsme-Subid" />
        <meta name="theme-color" content="#fff" />
        <meta name="next-head-count" content="26" />
      </Head>
      <GlobalStyle />
      <motion.div variants={container} initial="hidden" animate="show">
        <Component {...pageProps} />
      </motion.div>
    </div>
  );
}
