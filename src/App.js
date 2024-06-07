import "./App.css"
import NavBar from "./components/NavBar/NavBar";
import Slogan from "./components/Slogan/Slogan";
import Content from "./components/Content/Content";

function App() {
  return <div className="font-sora overflow-y-auto text-white h-screen px-4 py-8 bg-gradient-to-b from-purple-950 to-purple-500">
    <NavBar/>
    <Slogan/>
    <Content/>
  </div>;
}

export default App;
