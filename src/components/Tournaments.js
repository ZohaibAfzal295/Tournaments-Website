import React,{useEffect} from 'react'
import './Tournaments.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function Tournaments() {

    const handleonclick=(e)=>{

        const allListItems = document.querySelectorAll('.text-cont5 li');
        allListItems.forEach((li) => {
            li.classList.remove('active1');
        });
        e.target.classList.add('active1');
    
    }
    
    useEffect(() => {
        AOS.init({duration:3000})
      }, [])


  return (
    <div className="container5" data-aos='fade'>
             <div className="box-cont4 box-cont5">
            <div className="text-cont4 text-cont5" id='text-cont5'>
                <h1 data-aos='fade-right'>Touraments</h1>
                <ul id='cont5-font' data-aos='fade-left'>
                    <li className='active1' onClick={handleonclick}>UPCOMING</li>
                    <li onClick={handleonclick}>STARTED</li>     
                    {/* javascript to apply hover on it  */}
                    <li onClick={handleonclick}>FINISHED</li>
                </ul>
            </div>
            <hr />
        </div>
        <div className="boxes-cont5">
            <div className="T-cont5" id='T-cont5'>
                <div className="boxes1-cont5" id='boxes1-cont5' data-aos='flip-up'>
                    <div className="text-cont5">
                        <p>Manilla master Toronot 4/4</p>
                        <p>Oct,19/2022</p>
                        <p>Clash Royale</p>
                    </div>
                    <div className="categ-cont5" id='categ-cont5'>
                        <div className="text1-cont5" id='text1-cont5'>
                            <p className='t1-c5'>Groups</p>
                            <p className='t2-c5'>62 Teams</p>
                        </div>
                        <div className="text2-cont5" id='text2-cont5'>
                            <p className='t1-c5'>Playout</p>
                            <p className='t2-c5'>Round Robin</p>
                        </div>
                        <div className="text3-cont5" id='text3-cont5'>
                            <p className='t1-c5'>Prize Pool</p>
                            <p className='t2-c5'>$ 450</p>
                        </div>
                        <div className="text4-cont5">
                        <button class="btn-text4-cont5" id='btn-text4-cont5'>Touch here</button>
                        </div>
                    </div>
                </div>
                <div className="boxes1-cont5 img2ofcont5" id='img2ofcont5' data-aos='flip-up'>
                <div className="text-cont5" id='text-cont5'>
                        <p>Manilla master Toronot 4/4</p>
                        <p>Oct,19/2022</p>
                        <p>Clash Royale</p>
                    </div>
                    <div className="categ-cont5" id='categ-cont5'>
                        <div className="text1-cont5" id='text1-cont5'>
                            <p className='t1-c5'>Groups</p>
                            <p className='t2-c5'>62 Teams</p>
                        </div>
                        <div className="text2-cont5" id='text2-cont5'>
                            <p className='t1-c5'>Playout</p>
                            <p className='t2-c5'>Round Robin</p>
                        </div>
                        <div className="text3-cont5" id='text3-cont5'>
                            <p className='t1-c5'>Prize Pool</p>
                            <p className='t2-c5'>$ 450</p>
                        </div>
                        <div className="text4-cont5">
                        <button class="btn-text4-cont5" id='btn-text4-cont5'>Touch here</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="T-cont5" id='T-cont5'>
                <div className="boxes1-cont5 img3ofcont5"id='img3ofcont5' data-aos='flip-down'>
                <div className="text-cont5">
                        <p>Manilla master Toronot 4/4</p>
                        <p>Oct,19/2022</p>
                        <p>Clash Royale</p>
                    </div>
                    <div className="categ-cont5" id='categ-cont5'>
                        <div className="text1-cont5" id='text1-cont5'>
                            <p className='t1-c5'>Groups</p>
                            <p className='t2-c5'>62 Teams</p>
                        </div>
                        <div className="text2-cont5" id='text2-cont5'>
                            <p className='t1-c5'>Playout</p>
                            <p className='t2-c5'>Round Robin</p>
                        </div>
                        <div className="text3-cont5" id='text3-cont5'>
                            <p className='t1-c5'>Prize Pool</p>
                            <p className='t2-c5'>$ 450</p>
                        </div>
                        <div className="text4-cont5">
                        <button class="btn-text4-cont5" id='btn-text4-cont5'>Touch here</button>
                        </div>
                    </div>
                </div>
                <div className="boxes1-cont5 img4ofcont5" id='img4ofcont5' data-aos='flip-down'>
                <div className="text-cont5">
                        <p>Manilla master Toronot 4/4</p>
                        <p>Oct,19/2022</p>
                        <p>Clash Royale</p>
                    </div>
                    <div className="categ-cont5" id='categ-cont5'>
                        <div className="text1-cont5" id='text1-cont5'>
                            <p className='t1-c5'>Groups</p>
                            <p className='t2-c5'>62 Teams</p>
                        </div>
                        <div className="text2-cont5" id='text2-cont5'>
                            <p className='t1-c5'>Playout</p>
                            <p className='t2-c5'>Round Robin</p>
                        </div>
                        <div className="text3-cont5" id='text3-cont5'>
                            <p className='t1-c5'>Prize Pool</p>
                            <p className='t2-c5'>$ 450</p>
                        </div>
                        <div className="text4-cont5">
                        <button class="btn-text4-cont5" id='btn-text4-cont5'>Touch here</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
