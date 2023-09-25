import React,{useEffect, useRef} from 'react'
import imgs from '../assets/HO8A0502-420x240_c.jpg'
import Page1 from '../assets/client-test-1.png'
import Page2 from '../assets/client-test-2.png'
import Page3 from '../assets/client-test.png'
import { AiOutlineLine } from "react-icons/ai";
import line3 from '../assets/line3.svg'
import { Link } from 'react-router-dom'
import { AiOutlineCaretRight } from "react-icons/ai";


export default function Casestudy() {
  const divRef = useRef(null);

  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[]);

  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
       <div ref={divRef} style={{height:"200px",alignItems:"end",display:"flex"}} className='gradi p-4 flex-column' >
        <div className='w-25 text-white p-2' style={{backgroundColor:"rgba(0, 0, 0, .8)"}}>
          Home
          <AiOutlineCaretRight color='#FC01AC'/>
          Case studies & Testimonial
        </div>
        <div className='px-2 py-1' style={{backgroundColor:"hsla(0, 0%, 100%, .5)",fontSize:"11px"}}>September 25, 2023</div>
       </div>
        <div class="svgdiv">
          <img  alt='' className='svgimg' src={line3} />
          <i class="glyphicon glyphicon-chevron-down"></i>
          </div>
       <div className='mdWidth75 my-4 p-4 mx-auto text-start'  >
        <p className='text-start h1 m-3' style={{fontWeight:"600"}} >Case Studies</p>
        <AiOutlineLine className='mb-4 mx-4' color='#313133' style={{height:"3px", width:"60px",backgroundColor:"#96979A"}} />
          <p className='h5 mb-3' style={{marginTop:"80px",color:"#FA01AC"}} >Lastest Case study</p>
        <div className='text-start mx-3'>
          <div className='d-flex' style={{backgroundImage:`url(${imgs}`,width:"420px",height:"240px",alignItems:"end"}} >
            <button className='btn3' >Read more+</button>
          </div>
        </div>
        <em class="case my-2 mx-3">September 26, 2017 By admin in <Link style={{textDecoration:"none"}} className='more' to='' >Case Study</Link></em>
        <p className='mx-3 h5'>Colorbar Cosmetics Ptv. Ltd.</p>
        <div className='w-100' style={{marginTop:"70px",paddingTop:"20px",paddingBottom:"20px"}} >
        <div className='row'>
          <p className='h2'  style={{fontWeight:"700"}}>TESTIMONIALS</p>
        <div id='testimonials' className="col-12 col-md-4">
            <img alt='' src={Page3} className='w-100 my-4' />
          </div>
          <div className="col-12 col-md-4">
            <img alt='' src={Page2} className='w-100 my-4' />
          </div>
          <div className="col-12 col-md-4">
            <img alt='' src={Page1} className='w-100 my-4' />
          </div>

        </div>

      </div >
       </div>
       <div>
       </div>
    </div>
  )
}
