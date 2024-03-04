import React from 'react'
import './footer.css'
import img1 from '../images/7.jpg'
export default function footer() {


    const menuRight=['Tournaments',"Teams","streams","Sponser","News"]
    const menuLeft=['News',"Matches","Gallery","About"]

  return (
    <div className="container8">
        <div className="minibox1-cont8" id='minibox1-cont8'>
            <img src={img1} alt="" />
            <div className="socialmeadiaicons" id='socialmeadiaicons'>
            <i class="fa fa-facebook" aria-hidden="true"></i>
            <i class="fa fa-twitter" aria-hidden="true"></i>
            <i class="fa fa-youtube" aria-hidden="true"></i>
            <i class="fa fa-instagram" aria-hidden="true"></i>
            <i class="fa fa-steam" aria-hidden="true"></i>
            <i class="fa fa-twitch" aria-hidden="true"></i>
            </div>
        </div>
        <hr />
        <div className="minibox2-cont8" id='minibox2-cont8'>
            <h3>Get In Touch</h3>
            <i class="fa fa-pencil-square-o" aria-hidden="true">
                <p> Press Department</p>
            </i>
            <p className='getintouchtext'>Abc@gmail.com</p>
            <i class="fa fa-bookmark-o" aria-hidden="true">
                <p> Sponserships</p>
            </i>
            <p className='getintouchtext'>Abc@gmail.com</p>
            <i class="fa fa-free-code-camp" aria-hidden="true">
                <p> Marketing</p>
            </i>
            <p className='getintouchtext'>Abc@gmail.com</p>
            <i class="fa fa-bell-o" aria-hidden="true">
                <p> Media</p>
            </i>
            <p className='getintouchtext'>Abc@gmail.com</p>
        </div>
        <div className="minibox3-cont8" id='minibox3-cont8'>
            <h3>Latest News</h3>
            <a href="/">Hello World</a>
            <hr />
            <a href="/">Epic Battle Between <br />Freaky and King Royal</a>
            <hr/>
            <a href="/">View All News Here</a>
            <hr />
        </div>
        <div className="minibox4-cont8" id='minibox4-cont8'>
            <h3>Menu Left</h3>
            {menuLeft.map((item,index)=>{
                return <a href={`/${item}`} key={index}>{item}</a>
            })}
            <div id="footerline"></div>
        </div>
        <div className="minibox5-cont8" id='minibox5-cont8'>
            <h3>Menu Right</h3>
            {menuRight.map((item,index)=>{
                return <a href={`/${item}`} key={index}>{item}</a>
            })}
            <div id="footerline"></div>
        </div>
    </div>
  )
}
