import 'tailwindcss/tailwind.css'
import '../styles/landing/landing.scss'
import "react-image-gallery/styles/scss/image-gallery.scss";
import { appWithTranslation } from 'next-i18next';
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default appWithTranslation(MyApp)
