import type { AppProps } from "next/app";
import { Poppins } from "@next/font/google";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root{
    --light-color: 255, 255, 255;
    --dark-color: 49, 49, 49;
    --primary-color: 251, 195, 27;
    --secondary-color: 0, 122, 163;
    scroll-behavior: smooth;
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
    width: 0;
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
    overflow-x: hidden;
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

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={poppins.variable}>
      <GlobalStyle />
      <Component {...pageProps} />
    </div>
  );
}
