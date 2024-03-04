import "./main.css";
import React from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./headerpages/About";

const NewsFeed = React.lazy(() => import("./components/NewsFeed"));
const Teams = React.lazy(() => import("./components/Teams"));
const FeaturedStreams = React.lazy(() =>
  import("./components/FeaturedStreams")
);
const Tournaments = React.lazy(() => import("./components/Tournaments"));
const LatestMatches = React.lazy(() => import("./components/LatestMatches"));
const Slidergaming = React.lazy(() => import("./components/Slidergaming"));
const Footer = React.lazy(() => import("./components/Footer"));

function App() {
  return (
    <>
      <div className="FirstContent">
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Header />}></Route>

            <Route path="/about" element={<About />} />
            {/* <Route path="/" element={<Header />} /> */}
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
