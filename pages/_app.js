import AllArticles from "../components/Articles/AllArticles";
import Banner from "../components/Banner/Banner";
import Navbar from "../components/navbar/Navbar";
import News from "../components/News/News";
import SearchBar from "../components/searchbar/SearchBar";
import Stories from "../components/Stories/Stories";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navbar></Navbar>
      <SearchBar></SearchBar>
      <Banner></Banner>
      <Stories></Stories>
      <News></News>
      <AllArticles></AllArticles>
      <Component {...pageProps} />
    </>
  );
}
