import '../styles/globals.sass'
// add bootstrap css 
import 'bootstrap/dist/css/bootstrap.min.css';
// own css files here
//import "../css/customcss.css";
import { AppProps } from 'next/app'

import '@fortawesome/fontawesome-free/js/fontawesome';
import '@fortawesome/fontawesome-free/js/solid';
import '@fortawesome/fontawesome-free/js/regular';
import '@fortawesome/fontawesome-free/js/brands';
 
//import '@fortawesome/fontawesome-free/css/all.css'; //??????????????

function MyApp({ Component , pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
