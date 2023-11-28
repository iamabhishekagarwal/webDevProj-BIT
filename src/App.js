import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import NavigationBar from "./components/NavigationBar";
import Compiler from "./pages/Compiler";
import Home from "./pages/Home";

function App() {
  const [progress, setProgress] = useState(0);
  return (
    <>
      <BrowserRouter>
        <div>
          <LoadingBar
            color="white"
            progress={progress}
            onLoaderFinished={() => setProgress(0)}
          />
          <NavigationBar />
          <Routes>
            <Route
              path="/"
              element={<Home setProgress={setProgress} />}
            ></Route>
            <Route path="/Compiler" element={<Compiler setProgress={setProgress} />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
