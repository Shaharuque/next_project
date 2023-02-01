import { useEffect, useState } from "react";
import Footer from "../components/Shared/footer/Footer";
import Navbar from "../components/Shared/navbar/Navbar";
import "../styles/globals.css";
import { CiLight } from "react-icons/ci";
import { BsFillBrightnessHighFill } from "react-icons/bs";
import { TbMoonOff } from "react-icons/tb";
import { BiSun } from "react-icons/bi";
// For slick slider css
// import "slick-carousel/slick/slick.css";

export default function App({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(false);

  const [value, setValue] = useState("Light");

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  console.log("drop down select value", value);

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
      <div className="flex justify-between mb-8 shadow-md px-2 rounded">
        <button onClick={handleToggleMode}>
          {isDarkMode ? (
            <TbMoonOff className="text-[30px]" />
          ) : (
            <BiSun className="text-[30px]" />
          )}
        </button>
        {/* <select value={value} onChange={handleChange}>
          <option value="Light">Light Mode</option>
          <option value="Dark">Dark Mode</option>
        </select> */}

        <Navbar></Navbar>
      </div>
      <Component {...pageProps} />
      <Footer></Footer>
    </div>
  );
}
