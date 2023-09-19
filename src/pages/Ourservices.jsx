import React from 'react'
import { DiBitbucket } from "react-icons/di";
import services from '../assets/Printsmith-P7-1024x491.png'
import { AiOutlineLine } from "react-icons/ai";
import { BsFillBookmarksFill, BsFillDisplayFill } from "react-icons/bs";

export default function Ourservices() {
  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
        <div style={{height:"200px"}} className='gradi' ></div>
        <div className='mdWidth75 mx-auto p-4 text-start' >
            <p className='h2 my-4 text-start' style={{fontWeight:"700",color:"#2ABDE9"}} >OUR SERVICES</p>
            <AiOutlineLine className='mb-4 ' color='#96979A' style={{height:"3px", width:"60px",backgroundColor:"#96979A"}} />
            <p className='text-start h2' style={{fontWeight:"100",color:"#96979A"}}>“We are not just service providers; we are the trusted partner of our esteemed clients”</p>
            <p  className='text-start h6' style={{fontWeight:"100",color:"#535353"}}>Committed to provide solutions in a quick turnaround time, we offer a range of services catering to the different needs of our clients. From printing and publishing, to large format printing; our proven work has always helped clients achieve desired results.</p>
        </div>
        <div className='mdWidth75 mx-auto p-4' style={{marginTop:"50px"}} >
            <p className='h2 my-4' style={{fontWeight:"700",color:"# 535353"}} >Industry <span style={{color:"#2ABDE9"}}>We Serve</span></p>
            <img alt='' className='w-100'  src={services} />
        </div>

        <div className='mdWidth75 d-flex flex-md-row flex-column mx-auto' style={{marginTop:"100px",paddingBottom:"100px"}}>
            <div className='text-start mx-4 d-flex flex-row my-4'>
                <div>
                <p className='text-start h4 d-flex' style={{color:"#2ABDE9"}}  >Commercial Printing</p>
                <p className='text-start' style={{color:"#464646",fontSize:"13px"}} >Our endeavour to provide the best of commercial printing solutions is visible through our printing infrastructure. We have the following machines </p>
                <button  type="button" className="btn" style={{backgroundColor:"#FB02AC",color:"white"}}>Primary</button>
                </div>
                <BsFillBookmarksFill style={{width:"100px"}} color='#464646' size={50} />
            </div>
            <div className='text-start mx-4 d-flex flex-row my-4'>
                <div>
                <p className='text-start h4 d-flex' style={{color:"#2ABDE9"}}  >Commercial Printing</p>
                <p className='text-start' style={{color:"#464646",fontSize:"13px"}} >Our endeavour to provide the best of commercial printing solutions is visible through our printing infrastructure. We have the following machines </p>
                <button  type="button" className="btn" style={{backgroundColor:"#FB02AC",color:"white"}}>Primary</button>
                </div>
                <DiBitbucket style={{width:"100px"}} color='#464646' size={50} />
            </div>
            <div className='text-start mx-4 d-flex flex-row my-4'>
                <div>
                <p className='text-start h4 d-flex' style={{color:"#2ABDE9"}}  >Commercial Printing</p>
                <p className='text-start' style={{color:"#464646",fontSize:"13px"}} >Our endeavour to provide the best of commercial printing solutions is visible through our printing infrastructure. We have the following machines </p>
                <button  type="button" className="btn" style={{backgroundColor:"#FB02AC",color:"white"}}>Primary</button>
                </div>
                <BsFillDisplayFill style={{width:"100px"}} color='#464646' size={50} />
            </div>
        </div>
    </div>
  )
}
