import { useState } from "react";
import "./App.css";
import Folder from "./components/Folder";
import explorer from "./data/folderData";

function App() {
  return (
    <>
      <div>
        <Folder explorer={explorer} />
      </div>
    </>
  );
}

export default App;
