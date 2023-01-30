import { useEffect, useState } from "react";
import Footer from "../components/Shared/footer/Footer";
import Navbar from "../components/Shared/navbar/Navbar";
import "../styles/globals.css";
// For slick slider css
// import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    // Check if the mode is already saved in local storage
    const savedMode = localStorage.getItem("mode");
    if (savedMode === "dark") {
      setIsDarkMode(true);
    }
  }, []);

  const handleToggleMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("mode", isDarkMode ? "light" : "dark");
  };
  return (
    <div className={`App ${isDarkMode ? "dark-mode" : "light-mode"}`}>
      <button onClick={handleToggleMode}>
        <h1 className="text-center text-red-700">Toggle Mode</h1>
      </button>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}
