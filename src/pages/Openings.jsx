import React from 'react'
import { BsFillBagDashFill } from "react-icons/bs";
import line3 from '../assets/line3.svg'

export default function Openings() {
  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
         <div style={{height:"300px"}} className='gradi' ></div>
        <div class="svgdiv">
          <img alt='' className='svgimg' src={line3} />
          <i class="glyphicon glyphicon-chevron-down"></i>
          </div>
        <div className='my-4' >
            <BsFillBagDashFill size={50} color='#2F2F2F' />
            <p className='my-4' style={{fontSize:"20px"}}>It’s the most fun you’ll have inside an office. If you’ve got the talent, we’ve got the vacancy.</p>
            <p className='my-1' style={{fontSize:"14px"}} >Amit Kalra (HR Manager) </p>
            <p className='my-1' style={{fontSize:"14px"}} >Email: hr@infinityadvt.com</p>
        </div>
        <div className='w-50 mx-auto' style={{marginTop:"100px"}}>
            <p className='text-start my-4' style={{fontSize:"11px",color:"#555555"}} >Employee Sales Incentive Programme (ESIP)</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Job Referral Programme</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >HR Activities: -Saturday Activities -Hobby Club -Birthday Bash</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Training</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Employee of the Month</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Suggestion Scheme</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Total Productive Maintenance</p>
            <p className='text-start my-4' style={{fontSize:"13px",color:"#555555"}} >Recreational Activities & Trips</p>
        </div>
       <div className='my-4' style={{backgroundColor:"white",width:"100vw" ,paddingBottom:"100px"}}>
         
       <div className='w-50 mx-auto'  >
        <div className='h2 my-4 ' style={{color:"#5B5B5B",paddingTop:"50px"}} >Current&nbsp;<span style={{color:"#2ABDE9"}} >Openings</span></div>
        <div className='p-4 ' style={{height:"500px",backgroundColor:"#F5F5F5"}}> 
        <p className='bg-light py-2' style={{color:"#FFA54D"}}>Thank you for your interest. There are no Job Openings available at this time. Please check back later.</p>

        </div>
        </div>
       </div>
    </div>
  )
}







