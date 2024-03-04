import React,{useEffect} from 'react'
import "./NewsFeed.css"
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function NewsFeed() {

useEffect(() => {
  AOS.init({duration:3000})
}, [])


  return (
    <>
    <div className="container1" data-aos="fade-right">
        <div className="text-newsfeed">
            <h2>News Feed</h2>
            <hr className='line'/>
        </div>
        <div className="mini-cont1">
            <div className="mini-cont1-box1 box-cont1 cont1-img1">
                {/* <img src={img1} alt="" /> */}
                <div class="text-overlay">
                    <button className='btn-mini-cont1'>Gaming</button>
                    <p className='text-mini-cont1'>Navi Moves towrard Second <br /> in Esports Tournaments</p>
                    <p className='dateofnews'>June , 6 , 2024</p>
                </div>
            </div>
            <div className="mini-cont1-box2 box-cont1 cont1-img2">
                {/* <img src={img2} alt="" /> */}
                <div class="text-overlay1">
                    <button className='btn-mini-cont1'>Gaming</button>
                    <p className='text-mini-cont1'>Navi Moves towrard Second <br />in Esports Tournaments</p>
                    <p className='dateofnews'>June, 6 2024</p>
                </div>
            </div>
            <div className="mini-cont1-box3 box-cont1 cont1-img3">
                
                {/* <img src={img1} alt="" /> */}
                <div class="text-overlay2">
                    <button className='btn-mini-cont1'>Gaming</button>
                    <p className='text-mini-cont1'>Navi Moves towrard Second <br />in Esports Tournaments</p>
                    <p className='dateofnews'>June, 6 2024</p>
                </div>
            </div>
            <div className="mini-cont1-box4 box-cont1 cont1-img4">
                {/* <img src={img2} alt="" /> */}
                <div class="text-overlay3">
                    <button className='btn-mini-cont1'>Gaming</button>
                    <p className='text-mini-cont1'>Navi Moves towrard Second <br />in Esports Tournaments</p>
                    <p className='dateofnews'>June, 6 2024</p>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}
