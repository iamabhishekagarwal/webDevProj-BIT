import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NavigationBar from "../src/components/NavigationBar.js";
import Compiler from "./pages/Compiler";
import HackathonUser from "./pages/HackathonUser";
import Home from "./pages/Home";
import TechNews from "./pages/TechNews";
function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
        <div>
        <NavigationBar/>
          <LoadingBar
            color="white"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          {/* <Routes>
          <Route
              exact
              path="/"
              element={<LoginPage setProgress={setProgress} />}
            ></Route>
            </Routes> */}
            
            <Routes>
            <Route
              exact
              path="/Home"
              element={<Home setProgress={setProgress} />}
            ></Route>
            <Route
              exact
              path="/Compiler"
              element={<Compiler setProgress={setProgress} />}
            ></Route>
            <Route
              exact
              path="/HackathonUser"
              element={<HackathonUser setProgress={setProgress} />}
            ></Route>
            <Route
              exact
              path="/TechNewsUser"
              element={<TechNews setProgress={setProgress} />}
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
