import Footer from "../components/Shared/footer/Footer";
import Navbar from "../components/Shared/navbar/Navbar";
import "../styles/globals.css";
// For slick slider css
// import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}
