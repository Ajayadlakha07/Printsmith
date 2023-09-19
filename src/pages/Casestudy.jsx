import React from 'react'
import imgs from '../assets/HO8A0502-420x240_c.jpg'
import Page1 from '../assets/client-test-1.png'
import Page2 from '../assets/client-test-2.png'
import Page3 from '../assets/client-test.png'
import { AiOutlineLine } from "react-icons/ai";


export default function Casestudy() {
  return (
    <div>
       <div style={{height:"200px"}} className='gradi' ></div>
       <div className='mdWidth75 mx-auto text-start' >
        <p className='text-start h2' style={{marginBottom:"50px",fontWeight:"600"}} >Case Studies</p>
        <AiOutlineLine className='mb-4 ' color='#96979A' style={{height:"3px", width:"60px",backgroundColor:"#96979A"}} />
          <p className='h5 my-2' style={{color:"#FA01AC"}}>Lastest Case study</p>
        <div className='text-start mx-3'>
          <div className='d-flex' style={{backgroundImage:`url(${imgs}`,width:"420px",height:"240px",alignItems:"end"}} >
            <button className='btn3' >Read more+</button>
          </div>
        </div>
        <p className='text-start mt-4 mx-3' style={{fontSize:"12px",color:"#111111"}}>September 16, by admin in <span>case study</span></p>
        <p className='mx-3 h5'>Colorbar Cosmetics Ptv. Ltd.</p>
        <div className='w-100' style={{marginTop:"70px",paddingTop:"20px",paddingBottom:"20px"}} >
        <div className='row'>
          <p className='h2' style={{fontWeight:"700"}}>TESTIMONIALS</p>
        <div className="col-12 col-md-4">
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
