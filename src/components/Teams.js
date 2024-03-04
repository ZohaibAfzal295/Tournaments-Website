import React,{useEffect} from 'react'
import "../components/Teams.css"

import img4 from "../images/5.jpg"
import img6 from "../images/6.jpg"
import img7 from "../images/7.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Teams() {


    useEffect(() => {
        AOS.init({duration:3000})
      }, [])
  return (
    <>
    <div className="TeamsCont">
        <div className="Teamofgames">
            <h2>The Teams</h2>
            <h4>Meet Our Main Power !</h4>
            <div className="minibox-teamscont" id='minibox-teamscont'>
                <button className='active' data-aos='fade-right'>Cod 4</button>
                <button data-aos='fade-out'>Clash Royale</button>
                <button data-aos='fade-left'>Clash of Clan</button>
            </div>
        </div>
        <div className="listofTeams" data-aos='fade-bottom'>
            <div className="listofTeams-box1 lot" id='lot'>
                <div className="lot-text">
                    <p>Team Freaky Esports</p>
                    <p>Clash Royale</p>
                </div>
                <div className="lot-logo">
                    <div className="lot-logo1">
                        <img src={img4} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img7} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img6} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img7} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="lot-btn" id='lot-btn'>
                    <p className='lot-text3' id='lot-text3'>From <br /><strong className='lot-text4'>Pakistan</strong></p>
                    <button class="btn">Team Page</button>
                </div>
            </div>
            <div className="listofTeams-box2 lot" id='lot'>
            <div className="lot-text">
                    <p>Team Freaky Esports</p>
                    <p>Clash Royale</p>
                </div>
                <div className="lot-logo">
                    <div className="lot-logo1">
                        <img src={img4} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img7} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img6} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img7} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="lot-btn" id='lot-btn'>
                    <p className='lot-text3'>From <br /><strong className='lot-text4'>Italy</strong></p>
                    <button class="btn">Team Page</button>
                </div>
            </div>
            <div className="listofTeams-box3 lot" id='lot'>
            <div className="lot-text">
                    <p>Team Freaky Esports</p>
                    <p>Clash Royale</p>
                </div>
                <div className="lot-logo">
                    <div className="lot-logo1">
                        <img src={img4} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img7} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img6} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                    <div className="lot-logo1">
                        <img src={img7} alt="" />
                        <i class="fa fa-arrow-right" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="lot-btn"id='lot-btn'>
                    <p className='lot-text3'>From <br /><strong className='lot-text4'>USA</strong></p>
                    {/* <button>Team Page <strong className='arr'>&#x2192;</strong></button> */}
                    <button class="btn">Team Page</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
