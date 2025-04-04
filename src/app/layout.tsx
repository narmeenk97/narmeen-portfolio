import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import '../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import '../app/globals.css';
import Header from '../components/header';
import Footer from '../components/footer';
import { JSX } from 'react';
import Script from 'next/script';

export default function RootLayout({ 
  children,
 } : {
  children: React.ReactNode;
}) : JSX.Element {
  return (
    <html lang="en">
      <head>
        <title>Narmeen Khalid Portfolio</title>
      </head>
      <body>
        <Header/>
         { children }
         <Footer/>
         <Script src='/node_modules/bootstrap/dist/js/bootstrap.bundle.min.js' strategy='beforeInteractive' />
      </body>
      </html>
  );
}