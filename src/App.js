import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";
import Content from "./components/Content/Content";
import { useEffect, useState } from "react";

function App() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    window.addEventListener("resize", handleSize);
    handleSize();
    return () => window.removeEventListener("resize", handleSize)
  }, []);

  useEffect(() => {
    if(windowSize.width < 641) {
      setIsMobile(true);
    }
    else {
      setIsMobile(false)
    }
  }, [windowSize])

  return (
    <div className="font-sora overflow-x-hidden overflow-y-auto dark:text-white  text-black h-screen px-4 py-8 bg-gradient-to-b dark:from-purple-950 from-white to-purple-400 dark:to-purple-500 md:px-20">
      <NavBar isMobile={isMobile} />
      <Slogan />
      <Content />
    </div>
  );
}

export default App;
