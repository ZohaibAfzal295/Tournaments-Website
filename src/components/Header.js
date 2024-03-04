// import React from 'react';
import "./firstpage.css";
import { motion } from "framer-motion";
import logo from "../images/logo.png";
import { Typewriter } from "react-simple-typewriter";
import * as React from "react";
import { Link } from "react-router-dom";
const NewsFeed = React.lazy(() => import("./NewsFeed"));
const Teams = React.lazy(() => import("./Teams"));
const FeaturedStreams = React.lazy(() => import("./FeaturedStreams"));
const Tournaments = React.lazy(() => import("./Tournaments"));
const LatestMatches = React.lazy(() => import("./LatestMatches"));
const Slidergaming = React.lazy(() => import("./Slidergaming"));
const Footer = React.lazy(() => import("./Footer"));
export default function Header(props) {
  const clickonSearch = () => {
    //    let a= document.querySelector('.searchIcon')
    let b = document.querySelector(".right-cont");
    let c = document.querySelector(".hello");
    let d = document.querySelector(".para");
    b.classList.toggle("hidden");
    c.classList.toggle("hidden");
    d.classList.toggle("hidden");
  };

  const searchonClose = () => {
    let b = document.querySelector(".right-cont");
    let c = document.querySelector(".hello");
    let d = document.querySelector(".para");
    b.classList.toggle("hidden");
    c.classList.toggle("hidden");
    d.classList.toggle("hidden");
  };
  // the upper part is for Search on WEb on the navigation page

  // Below code is for showing the nav on mobile.
  const OpenNav = () => {
    let CLickonNavs = document.querySelector(".CLickonNavs");
    CLickonNavs.classList.add("navigationForMobile");
    let CloseBtnforNav = document.querySelector(".CloseBtnforNav");
    CloseBtnforNav.classList.remove("hidden");
    console.log(CLickonNavs);
  };

  const CloseNav = () => {
    let CLickonNavs = document.querySelector(".CLickonNavs");
    // CLickonNavs.classList.add('navigationForMobileHide')
    CLickonNavs.classList.remove("navigationForMobile");
    let CloseBtnforNav = document.querySelector(".CloseBtnforNav");
    CloseBtnforNav.classList.add("hidden");
  };

  // const [sticky,setSticky]=useState(false)

  // //  use the class as ternary operator ${sticky ? "sticky": ""}
  // useEffect(() => {
  //   const handleScroll=()=>{
  //     if(window.scrollY > 200){
  //       setSticky(true)
  //       console.log('true')
  //     }
  //     else{
  //       setSticky(false)
  //       console.log('false')
  //     }
  //   }

  //   return () => {
  //     window.addEventListener('scroll', handleScroll)
  //   }
  // })

  return (
    <>
      <div className="container">
        <div className={`check`}>
          <motion.div
            animate={{ x: 0 }}
            initial={{ x: -500 }}
            transition={{ duration: 1 }}
            className="logo"
          >
            <img
              src={logo}
              alt=""
              style={{ maxWidth: "100%" }}
              loading="lazy"
            />
          </motion.div>
          <div className="navbarBox">
            <motion.nav
              animate={{ scale: 1 }}
              initial={{ scale: 0 }}
              transition={{ duration: 0.7 }}
            >
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">News</a>
                </li>
                <li>
                  <a href="/">Teams</a>
                </li>
                <li>
                  <a href="/">Sponsor</a>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <a href="/">Tournaments</a>
                </li>
                <li>
                  <a href="/">Streams</a>
                </li>
                <li className="more">
                  <a href="/">...</a>
                  <ul id="submenu">
                    <li>
                      <a href="/">Matches</a>
                    </li>
                    <hr />
                    <li>
                      <a href="/">Gallery</a>
                    </li>
                    <hr />
                  </ul>
                </li>
                <li className="more"></li>
                <i
                  class="fa fa-search searchIcon"
                  aria-hidden="true"
                  onClick={clickonSearch}
                ></i>
              </ul>
            </motion.nav>
          </div>
          <a
            href="/"
            style={{
              fontStyle: "normal",
              fontSize: "2.5rem",
              position: "absolute",
              top: "8%",
              right: "4.5%",
              fontWeight: "0",
            }}
          >
            |
          </a>
        </div>
        <div className="centerpart">
          <div className="heading" id="heading">
            <h2>
              <span>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={["Freaky Esports"]}
                  loop={0}
                  cursor
                  cursorStyle="|"
                  typeSpeed={120}
                  deleteSpeed={60}
                  delaySpeed={6000}
                />
              </span>
            </h2>
          </div>
          <div className="centerText" id="centerText">
            <p>
              <span>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                  words={[
                    "We organize Esports Tournaments for Professional and Amateur Gamers",
                  ]}
                  loop={0}
                  cursor
                  cursorStyle="_"
                  typeSpeed={100}
                  deleteSpeed={60}
                  delaySpeed={1000}
                />
              </span>
            </p>
          </div>
          <div className="centerbtn">
            <button class="btn-hover color-5" id="m-resp-Head">
              Get Now
            </button>
          </div>
        </div>
        <div class="right-cont hidden">
          <form action="get" class="hello hidden">
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search"
            />
            <p class="para hidden" onClick={searchonClose}>
              &times;
            </p>
            <i class="fa fa-search placingonSearch" aria-hidden="true"></i>
          </form>
        </div>
      </div>
      <div className="navlinesmaking hidden" onClick={OpenNav}>
        <div className="navLines line1"></div>
        <div className="navLines line2"></div>
        <div className="navLines"></div>
      </div>
      <div className="CLickonNavs">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <div className="blanknav"></div>
          <li>
            <a href="/">News</a>
          </li>
          <div className="blanknav"></div>
          <li>
            <a href="/">Teams</a>
          </li>
          <div className="blanknav"></div>
          <li>
            <a href="/">Sponsor</a>
          </li>
          <div className="blanknav"></div>
          <li>
            <a href="/">About</a>
          </li>
          <div className="blanknav"></div>
          <li>
            <a href="/">Tournaments</a>
          </li>
          <div className="blanknav"></div>
          <li>
            <a href="/">Streams</a>
          </li>
          <div className="blanknav"></div>
        </ul>
        <p class="CloseBtnforNav hidden" onClick={CloseNav}>
          &times;
        </p>
      </div>
      {/* main Pic for Mobile Responsive logo */}
      <div className="imgformobileRes"></div>

      <div className="newsfeed">
        <React.Suspense fallback={<div>please Wait</div>}>
          <NewsFeed />
        </React.Suspense>
      </div>
      <div className="TeamsName">
        <React.Suspense fallback={<div>please Wait</div>}>
          <Teams />
        </React.Suspense>
      </div>
      <div className="FeaturedStreams">
        <React.Suspense fallback={<div>please Wait</div>}>
          <FeaturedStreams />
        </React.Suspense>
      </div>
      <div className="Tournaments">
        <React.Suspense fallback={<div>please Wait</div>}>
          <Tournaments />
        </React.Suspense>
      </div>
      <div className="LatestMatches">
        <React.Suspense fallback={<div>please Wait</div>}>
          <LatestMatches />
        </React.Suspense>
      </div>
      <div className="slidergaming">
        <React.Suspense fallback={<div>please Wait</div>}>
          <Slidergaming />
        </React.Suspense>
      </div>
      <div className="footer">
        <React.Suspense fallback={<div>please Wait</div>}>
          <Footer />
        </React.Suspense>
      </div>
    </>
  );
}
