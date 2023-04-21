import logo from "./logo.svg";
import "./App.css";
// import FigureComponent from "./FigureComponent";
// import FileUploadComponent from "./FileUploadComponent";
import imageDataURLContext from "./utils/imageDataURLContext";
import { useState, lazy, Suspense } from "react";

const FileUploadComponent = lazy(() => import("./FileUploadComponent"));
const FigureComponent = lazy(() => import("./FigureComponent"));

function App() {
  const [imgUrl, setImgUrl] = useState();
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <FileUploadComponent setImgUrl={setImgUrl} />
        <br></br>
        <FigureComponent imgUrl={imgUrl} />
      </Suspense>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
