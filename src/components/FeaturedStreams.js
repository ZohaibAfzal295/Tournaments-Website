import React,{useEffect} from 'react'
import './FeaturedStreams.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function FeaturedStreams(props) {
  // Define an array of streams with their details
  const streams = [
    { status: 'ONLINE', name: 'Flip Markhor', type: 'Block Buster Unlocked' },
    { status: 'ONLINE', name: 'Flip Markhor', type: 'Block Buster Unlocked' },
    { status: 'ONLINE', name: 'Flip Markhor', type: 'Block Buster Unlocked' }
  ];

const handleonclick=(e)=>{

    const allListItems = document.querySelectorAll('.text-cont4 li');
    allListItems.forEach((li) => {
        li.classList.remove('active1');
    });
    e.target.classList.add('active1');

}

useEffect(() => {
    AOS.init({duration:3000})
  }, [])
  

  return (
    <div className="container4">
        <div className="box-cont4">
            <div className="text-cont4 .col-white" id='text-cont4'data-aos='flip-down'>
                <h1>Featured Stream</h1>
                <ul data-aos='fade-left'>
                    <li className='active1' onClick={handleonclick}>All</li>
                    <li onClick={handleonclick}>Youtube</li>     
                    {/* javascript to apply hover on it  */}
                    <li onClick={handleonclick}>Facebook</li>
                </ul>
            </div>
            <hr />
        </div>
        <div className="box1-cont4">
            <div className="boxesofcont4 boc4" id='boc4' data-aos='flip-up'>
                <p>{streams[0].status}</p>
                <div className="descriptionofstreams" id='descriptionofstreams'>
                    <p>{streams[0].name}</p>
                    <p>{streams[0].type}</p>
                </div>
            </div>
            <div className="boxesofcont4 boc4" id='boc4' data-aos='flip-down'>
                <p>{streams[1].status}</p>
                <div className="descriptionofstreams"id='descriptionofstreams' >
                    <p>{streams[1].name}</p>
                    <p>{streams[1].type}</p>
                </div>
            </div>
            <div className="boxesofcont4 boc4" id='boc4' data-aos='flip-left'>
                <p>{streams[2].status}</p>
                <div className="descriptionofstreams"id='descriptionofstreams'>
                    <p>{streams[2].name}</p>
                    <p>{streams[2].type}</p>
                </div>
            </div>
        </div>
        <div className="textofFS" data-aos='fade-bottom'>
            <div className="textfs1" id='textfs1'>
                <p>If you want to see more Streams</p>
                <p>Visit Special Section to see them all</p>
            </div>
            <div className="textfs1"id='textfs1'>
            <button class="btn-hover color-5">All Streams</button>
            </div>
        </div>
    </div>
  )
}
