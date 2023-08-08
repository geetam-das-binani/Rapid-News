import "./App.css";
import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { HashRouter, Routes, Route } from "react-router-dom";

import LoadingBar from "react-top-loading-bar";

export default function App() {
  let pagesize = 20;
  const apikey = "fd4c268ca7544d3ab5bfa8d515e0166a";

  const [color, setColor] = useState("black");
  const [progress, SetProgress] = useState(0);
  const [text, setText] = useState("Enable Dark Mode");

  let togglemode = () => {
    if (color === "black") {
      setColor("white");
      setText("Enable Light Mode");
      document.body.style.backgroundColor = "black";
    } else {
      setColor("black");
      setText("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }
  };
  let BarProgress = (progress) => {
    SetProgress(progress);
  };

  return (
    <HashRouter>
      <LoadingBar color="#f11946" progress={progress} height={3} />
      <Navbar
        mode={color}
        btn={text}
        title="Rapid News"
        togglemode={togglemode}
      />
      <Routes>
        <Route
          path="/"
          element={
            <News
              key="health"
              ApiKey={apikey}
              Progress={BarProgress}
              mode={color}
              PageSize={pagesize}
              Category="health"
              Country="in"
            />
          }
        />
        <Route
          path="/business"
          element={
            <News
              key="business"
              ApiKey={apikey}
              Progress={BarProgress}
              mode={color}
              PageSize={pagesize}
              Category="business"
              Country="in"
            />
          }
        />
        <Route
          path="/entertainment"
          element={
            <News
              key="entertainment"
              ApiKey={apikey}
              Progress={BarProgress}
              mode={color}
              PageSize={pagesize}
              Category="entertainment"
              Country="in"
            />
          }
        />
        <Route
          path="/general"
          element={
            <News
              key="general"
              ApiKey={apikey}
              Progress={BarProgress}
              mode={color}
              PageSize={pagesize}
              Category="general"
              Country="in"
            />
          }
        />
        <Route
          path="/science"
          element={
            <News
              key="science"
              ApiKey={apikey}
              Progress={BarProgress}
              mode={color}
              PageSize={pagesize}
              Category="science"
              Country="in"
            />
          }
        />
        <Route
          path="/sports"
          element={
            <News
              key="sports"
              ApiKey={apikey}
              Progress={BarProgress}
              mode={color}
              PageSize={pagesize}
              Category="sports"
              Country="in"
            />
          }
        />
        <Route
          path="/technology"
          element={
            <News
              key="technology"
              ApiKey={apikey}
              Progress={BarProgress}
              mode={color}
              PageSize={pagesize}
              Category="technology"
              Country="in"
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}
