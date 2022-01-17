import '../styles/globals.less'
import "../styles/antd.less";
import LayoutPage from '../components/LayoutPage';

function MyApp({ Component, pageProps }) {
  return(
    <LayoutPage>
        <Component {...pageProps} />
    </LayoutPage>
  ) 
}

export default MyApp
