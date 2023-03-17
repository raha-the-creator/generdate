import "../styles/globals.css";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
