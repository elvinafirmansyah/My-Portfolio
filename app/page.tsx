import Image from "next/image";
import About from "./about/page";
import Script from "next/script";


export default function Home() {
  return (
    <>
      <Script id="next" async src={`https://www.googletagmanager.com/gtag/js?id=G-K3RNYPDWGJ`}></Script>
      <Script id="next">
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-K3RNYPDWGJ');`
        }
      </Script>
      <About />
    </>
  );
}
