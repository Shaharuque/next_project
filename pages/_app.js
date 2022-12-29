import AllArticles from "../components/Articles/AllArticles";
import Banner from "../components/Banner/Banner";
import TradingFAQ from "../components/FAQ/TradingFAQ";
import Footer from "../components/Slider/Slider";
import Navbar from "../components/navbar/Navbar";
import News from "../components/News/News";
import SearchBar from "../components/searchbar/SearchBar";
import Stories from "../components/Stories/Stories";
import "../styles/globals.css";
// For slick slider css
import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
    </>
  );
}
