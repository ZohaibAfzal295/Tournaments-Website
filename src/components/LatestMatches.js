import React,{useEffect} from 'react'
import './LatesMatches.css'
import img1 from "../images/1.jpg"
import img2 from "../images/2.jpg"
import img3 from "../images/3.jpg"
import img4 from "../images/4.jpg"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function LatestMatches() {

  useEffect(() => {
    AOS.init({duration:3000})
  }, [])



  return (
    <div className="container6" data-aos='fade-bottom'>
        <div className="boxes1-cont6" id='boxes1-cont6' data-aos='fade-bottom'>
          <h1>Latest Match & Results</h1>
          <p className='text-boxes1-cont6'>This is Live Update of matches our Teams playing right now</p>
          <button class="btn-hover color-5 ad-pd" id='ad-pd'>UPCOMING</button>
          <button class="btn-hover color-5 ad-pd" id='ad-pd2'>FINISHED</button>
        </div>
        <div className="boxes2-cont6">
          <div className="mini-box-cont6" id='mini-box-cont6'>
            <div className="sm-mini-box-cont6" id='sm-mini-box-cont6'>
              <div className="set-img">
              <img src={img1} alt="" />
              </div>
              <div className="text-sm-mini-box-cont6">
              <p className='text-cont6'>Freaky Esports</p>
              <div className="minibox-cont6">
                <div className="minibox-cont6-images">
                  <img src={img1} alt="" />
                </div>
                <div className="minibox-cont6-images"><img src={img2} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img3} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img4} alt="" /></div>
              </div>
              </div>
            </div>
            <div className="sm-mini-box-cont6 h-cont6" id='sm-mini-box-cont6'>
              <div className="text-center-cont6">
                <h2 id='cont6-text1'>Manila Master Tornoto 4V4</h2>
                <p id='cont6-text2'>3, OCT, 2023 PM, <a href="/" id='cont6-text3'>View Match</a></p>
              </div>
              <div className="text-center-cont6 sign-VS">
                <p id='cont6-text4'>VS</p>
              </div>
              <div className="text-center-cont6 text-align">
                <strong className='gamename-cont6' id='cont6-text5'>Fifa 2024</strong>
              </div>
            </div>
            <div className="sm-mini-box-cont6" id='sm-mini-box-cont6'>
            <div className="set-img">
              <img src={img1} alt="" />
              </div>
              <div className="text-sm-mini-box-cont6">
              <p className='text-cont6'>Freaky Esports</p>
              <div className="minibox-cont6">
                <div className="minibox-cont6-images">
                  <img src={img1} alt="" />
                </div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
              </div>
              </div>
            </div>
          </div>
          <div className="mini-box-cont6" id='mini-box-cont6'>
          <div className="sm-mini-box-cont6" id='sm-mini-box-cont6'>
              <div className="set-img">
              <img src={img1} alt="" />
              </div>
              <div className="text-sm-mini-box-cont6">
              <p className='text-cont6'>Freaky Esports</p>
              <div className="minibox-cont6">
                <div className="minibox-cont6-images">
                  <img src={img1} alt="" />
                </div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
              </div>
              </div>
            </div>
            <div className="sm-mini-box-cont6 h-cont6" id='sm-mini-box-cont6'>
              <div className="text-center-cont6">
                <h2 id='cont6-text1'>Manila Master Tornoto 4V4</h2>
                <p id='cont6-text2'>3, OCT, 2023 PM, <a href="/">View Match</a></p>
              </div>
              <div className="text-center-cont6 sign-VS">
                <p id='cont6-text3'>VS</p>
              </div>
              <div className="text-center-cont6 text-align">
                <strong className='gamename-cont6' id='cont6-text5'>Fifa 2024</strong>
              </div>
            </div>
            <div className="sm-mini-box-cont6" id='sm-mini-box-cont6'>
            <div className="set-img">
              <img src={img1} alt="" />
              </div>
              <div className="text-sm-mini-box-cont6">
              <p className='text-cont6'>Freaky Esports</p>
              <div className="minibox-cont6" >
                <div className="minibox-cont6-images">
                  <img src={img1} alt="" />
                </div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
              </div>
              </div>
            </div>
          </div>
          <div className="mini-box-cont6" id='mini-box-cont6'>
          <div className="sm-mini-box-cont6" id='sm-mini-box-cont6'>
              <div className="set-img">
              <img src={img1} alt="" />
              </div>
              <div className="text-sm-mini-box-cont6">
              <p className='text-cont6'>Freaky Esports</p>
              <div className="minibox-cont6">
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
              </div>
              </div>
            </div>
            <div className="sm-mini-box-cont6 h-cont6" id='sm-mini-box-cont6'>
              <div className="text-center-cont6">
                <h2 id='cont6-text1'>Manila Master Tornoto 4V4</h2>
                <p id='cont6-text2'>3, OCT, 2023 PM, <a href="/">View Match</a></p>
              </div>
              <div className="text-center-cont6 sign-VS">
                <p id='cont6-text3'>VS</p>
              </div>
              <div className="text-center-cont6 text-align">
                <strong className='gamename-cont6' id='cont6-text5'>Fifa 2024</strong>
              </div>
            </div>
            <div className="sm-mini-box-cont6" id='sm-mini-box-cont6'>
            <div className="set-img">
              <img src={img1} alt="" />
              </div>
              <div className="text-sm-mini-box-cont6">
              <p className='text-cont6'>Freaky Esports</p>
              <div className="minibox-cont6">
                <div className="minibox-cont6-images">
                  <img src={img1} alt="" />
                </div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
                <div className="minibox-cont6-images"><img src={img1} alt="" /></div>
              </div>
              </div>
            </div>
          </div>
        </div>
        <div className="boxes3-cont6" id='boxes3-cont6'>
          <div className="box-1-ofcont6" id='box-1-ofcont6'>
            <p id='boxes3-cont6-text1'>If You Want To See More Matches</p>
            <a href="/" id='boxes3-cont6-text2'>Visit Special Situation to See Them All</a>
          </div>
          <div className="box-2-ofcont6">
          <button class="btn-hover color-5" id='boxes3-cont6-tex3'>Touch here</button>
          </div>
        </div>
    </div>
  )
}
