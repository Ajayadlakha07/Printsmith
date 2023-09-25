import React,{useEffect} from 'react'
import { DiBitbucket } from "react-icons/di";
import services from '../assets/Printsmith-P7-1024x491.png'
import { AiOutlineLine } from "react-icons/ai";
import { BsFillBookmarksFill, BsFillDisplayFill } from "react-icons/bs";
import line3 from '../assets/line3.svg'
import { Link } from 'react-router-dom';
import '../styles/main.css'

export default function Ourservices() {
    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top of the page
      }, []);
  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
        <div style={{height:"200px"}} className='gradi' ></div>
        <div class="svgdiv">
          <img alt='' className='svgimg' src={line3} />
          <i class="glyphicon glyphicon-chevron-down"></i>
          </div>
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
                <div className='w-75'>
                <p className='text-start h3 my-4 d-flex' style={{color:"#2ABDE9"}}  >Commercial Printing</p>
                <p className='text-start my-4 para'>Our endeavour to provide the best of commercial printing solutions is visible through our printing infrastructure. We have the following machines </p>
                <Link to='/commercial-printing' className="p-2 btn" style={{fontWeight:"600",borderRadius:"0px",backgroundColor:"#FB02AC",color:"white"}}>Read More</Link>
                </div>
                <BsFillBookmarksFill className='my-4' style={{width:"100px"}} color='#464646' size={50} />
            </div>
            <div className='text-start mx-4 d-flex flex-row my-4'>
                <div className='w-75' >
                <p className='text-start h3 my-4 d-flex' style={{color:"#2ABDE9"}}  >Packaging Printing</p>
                <p className='text-start my-4 para' >We have state-of-the-art Packaging Infrastructure with world-class printing capabilities some of the aces of our packaging infrastructure always..obst Die Cutter SP-102</p>
                <Link to='/packaging-printing' className="p-2 btn" style={{fontWeight:"600",borderRadius:"0px",backgroundColor:"#FB02AC",color:"white"}}>Read More</Link>
                </div>
                <DiBitbucket className='my-4' style={{width:"100px"}} color='#464646' size={50} />
            </div>
            <div className='text-start mx-4 d-flex flex-row my-4'>
                <div className='w-75'>
                <p className='text-start h3 d-flex' style={{color:"#2ABDE9"}}  >POS Display and Fixtures</p>
                <p className='text-start mb-4 para'  >Printsmith is one of the most innovative display firms in the country. We conceptualize, design, engineer, manufacture ..</p>
                <Link to='/pos' className="p-2 btn" style={{fontWeight:"600",borderRadius:"0px",backgroundColor:"#FB02AC",color:"white"}}>Read More</Link>
                </div>
                <BsFillDisplayFill className='my-4' style={{width:"100px"}} color='#464646' size={50} />
            </div>
        </div>
    </div>
  )
}
