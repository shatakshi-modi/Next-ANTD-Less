import '../styles/globals.less'
import "../styles/antd.less";
import LayoutPage from '../components/LayoutPage';

function MyApp({ Component, pageProps }) {
  return(
    <Component {...pageProps} />
  ) 
}

export default MyApp
