import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Carous from '../components/Carous';
import '../styles/main.css';
import first from '../assets/firstleduvprinter-2.png'
import DAC from '../assets/DAC.jpg'
import india from '../assets/india-safe-200x150_c.jpg'
import coke from '../assets/coke-certificate-200x150_c.jpg'
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import { BsThreeDots, BsFillBookmarksFill, BsFillDisplayFill } from "react-icons/bs";
import { DiBitbucket } from "react-icons/di";
import banner1 from '../assets/publishing-1170x470_c.jpg'
import banner2 from '../assets/client-1170x470_c.jpg'
import produts1 from '../assets/Printsmith-Credentials-1-page-014.jpg'
import produts2 from '../assets/Printsmith-Credentials-1-page-015.jpg'
import Page1 from '../assets/client-test-1.png'
import Page2 from '../assets/client-test-2.png'
import Page3 from '../assets/client-test.png'
import { Link } from 'react-router-dom';


export default function Home() {
  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
      {/* <Carous/> */}
      <Carous/>
      <div className='bg-pink my-4 mx-auto mt-4 p-4' style={{backgroundColor:"#FC01AC",width:"95%",justifyContent:"center"}}>
        <p className='h3 text-light'>Liked what we are doing?</p>
        <p className='h3 text-light'>To know more and place your orders</p>
        <p className='text-light'>Call us or click to get a quote & we’ll respond at the earliest possible.</p>
        <button type="button" className="but1 btn text-white btn-outline-light">Call us at +91-9899246402</button>
        <button type="button" className="btn btn-light mx-4">Click here</button>
      </div>

      {/* INFINITE EXPRESSIONS IN PRINT */}
      <div className='row mx-auto' style={{width:"95%"}}>
        <div className="col-12 col-md-6" >
        <div className="card" style={{border:"none"}}>
          <div className="card-body">
            <h5 className="text-start" style={{color:"#FC01AC"}}>INFINITE EXPRESSIONS IN PRINT</h5>
            <h5 className="text-start mb-2 "><strong>“Awesomeness is what we have in our DNA & we are capable of inheriting that in our designs.”</strong></h5>
            <p className="text-start h6 text-muted">Hey all! We are a bunch of like-minded people striving to create infinite expressions in the printing industry. Just tell us your requirements & our efficient squad would be more than happy to help you.</p>
            <p className="text-start h6 text-muted">We devote ourselves to achieve just one aim-to create impressions that don’t fade away with time and leave a great impact on the minds of the consumers. We are seeking an opportunity to showcase what we can do for you. Let’s meet to create some magic together.</p>
          </div>
          </div>
      </div>
          <div className='col-12 col-md-6'>
          <div>
            <span className='cir mx-4'>LED UV</span>
            <span className=' mx-4'>Installed India’s First “LED UV PRINTER”</span>
            <div className='row' >
              <div className='col-4'>
              <img src={first} alt='' />
              </div>
              <div className='col-8'>
                <p className='h6 text-muted text-start' >Printsmith believes in being Worlds ahead and this passion of ours drove us to install India’s first LED UV Printer in our plant at Faridabad, Haryana. The LED UV technology (XP-9) is a series developed in the month of January, 2016 to attain a speed of 15,000 SPH supplied by AMS, the world’s No.1 LED/Mercury Lamp Makers and the world’s leader in UV & LED curing system</p>
                <p className='h6 text-muted text-start' >The LED UV Printer enables us to print on Polycarbonates/ Plastics/ Foam banners & to perform all MET pets jobs efficiently.</p>
              </div>
              
            </div>
          </div>
          
        </div>
      <div className='w-100 d-flex'>
       
        </div>
        
      </div>

      {/* AWARDS */}
      <div className='row mx-auto mt-4' style={{width:"95%"}}>
        <div className="col-12 col-md-6" >
        <p className='text-start' style={{fontSize:"30px",fontWeight:"600",color:"#181818"}} >AWARDS</p>
        <div className='row'>
          <div className='col-10 my-4'>
            <img alt='' className='mx-6 w-25' src={DAC} />
          </div>
          <div className="col-10">
            <p className='text-start text-muted h6'  >The most valuable award for us is the trust and appreciation of our esteemed clients. Besides this, we have won several awards acknowledging our quality work, innovative designs & for harnessing cutting-edge technology.</p>
            <p className='text-start text-muted h6'>Being the trailblazer, we have always set trends & this uniqueness of ours has made us stand apart from others.</p>
          </div>

        </div>
        </div>
          <div className='col-12 col-md-6'>
          <p className='text-start'  style={{marginBottom:"70px",fontSize:"30px",fontWeight:"600",color:"#181818"}} >Certifications</p>
          <div className='row' style={{marginTop:"20px"}}>
          <div className='col-1'></div>
          <div className='col-5'>
            <div style={{backgroundColor:"white"}} className='p-2'>
            <img alt='' className='mx-6 w-100' style={{width:"150px"}} src={india} />
            <div>
              <p className='text-start'>Support Appreciation </p>
              <p className='text-start'>Safe</p>
            </div>

            </div>
          </div>
          <div className='col-1'></div>
          <div className="col-5">
           
          <div style={{backgroundColor:"white"}} className='p-2'>
            <img alt='' className='mx-6 w-100' style={{width:"150px"}} src={coke} />
            <p className='text-start'>Certificate of Recognition</p>
            <p className='text-start'>Hindustan Coca-Cola Beverages Pvt. Ltd.</p>

            </div>
          </div>
        </div>
          
        </div>
      </div>

      {/* STAY IN TOUCH WITH US! */}
      <div className='w-100 mt-4'>
        <p className='text-start mx-4'><b>STAY IN TOUCH WITH US!</b></p>
        <div className='row mt-4 pt-4' >
          <div className='col-md-3' ></div>
          <div className='col-12 col-md-6'>
            <div className='row'>
            <div className='col-3'>
              <AiFillFacebook color='#1A6ED8' size={50} />
              <p>We love to share new stuff!</p>
            </div>
            <div className='col-3'>
              <AiFillYoutube color='#FF0000' size={50}/>
              <p>Watch our videos!</p>
            </div>
            <div className='col-3'>
              <AiOutlineTwitter color='#2ABDE9' size={50} />
              <p>Follow our tweets!</p>
            </div>
            <div className='col-3'>
              <AiFillLinkedin color='#004182' size={50}/>
              <p>We Print only the good stuff!</p>
            </div>
          </div>
            
          </div>
        </div>

        <p className='h1' style={{color:"#2ABDE9",marginTop:"200px"}} ><b>Our Expertise</b></p>
        <BsThreeDots size={35}/>
        <p>We are not just service providers; we are the trusted partner of our esteemed clients</p>
      </div>

      {/* Commercial Printing */}
      <div className='d-flex flex-column flex-md-row py-4' style={{backgroundColor:"white",justifyContent:"space-around"}} >
          <div className="m-4" style={{backgroundColor:"#F5F5F5"}}>
            <div className='p-4 d-flex flex-column justify-content-start'>
            <BsFillBookmarksFill color='#FC01AC' size={50} />
            <p className='text-start h5 my-4'><b>Commercial Printing</b></p>
            <p className='text-start text-muted h6'>Our endeavour to provide the best of commercial printing solutions is visible through our printing infrastructure. We have the following machines <Link to='/commercial-printing' >... More</Link></p>
            </div>
          </div>
          <div className="m-4" style={{backgroundColor:"#F5F5F5"}}>
            <div className='p-4 d-flex flex-column justify-content-start'>
            <DiBitbucket color='#FC01AC' size={50}  />
            <p className='text-start h5 my-4'><b>Packaging Printing</b></p>
            <p className='text-start text-muted h6'>We have state-of-the-art Packaging Infrastructure with world-class printing capabilities some of the aces of our packaging infrastructure always <Link to='/packaging-printing' >... More</Link></p>
          
            </div>
          </div>
          <div className="m-4" style={{backgroundColor:"#F5F5F5"}}>
            <div className='p-4 d-flex flex-column justify-content-start'>
            <BsFillDisplayFill color='#FC01AC' size={50} />
            <p className='text-start h5 my-4'><b>POS Display and Fixtures</b></p>
            <p className='text-start text-muted h6'>Printsmith is one of the most innovative display firms in the country. We conceptualize, design, engineer, manufacture <Link to='/pos' >... More</Link></p>
            </div>
          </div>
      </div>
      
      {/* Our Clients */}
        <div className='container'>
          <div className='h3 my-4' style={{color:"#5B5B5B",paddingTop:"50px"}} ><b>Our <span style={{color:"#2ABDE9"}} >Clients</span></b></div>
          <div className='w-75' >

          </div>
          <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner1}
                alt="First slide"
                style={{height:"500px"}}
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={banner2}
                alt="Second slide"
                style={{height:"500px"}}
              />
              
            </Carousel.Item>
          
          </Carousel>

          <div className='my-4 py-4'>
          <p className='h2' style={{color:"#2ABDE9"}}><strong>Our Recent Work</strong></p>
          <BsThreeDots size={35}/>
          <p className='h6 text-muted'>WE'RE GOOD AT SOME STUFF AND VERY GOOD AT OTHER STUFF</p>
          </div>
        </div>

        {/* products */}
        <div className='my-4' >
        <Carousel data-bs-theme="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={produts1}
                alt="First slide"
              />
              
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={produts2}
                alt="Second slide"
              />
              
            </Carousel.Item>
          
          </Carousel>
        </div>

      <div className='w-100' style={{backgroundColor:"#FC01AC",marginTop:"70px",paddingTop:"20px",paddingBottom:"20px"}} >
        <p className='h3 mt-4 text-white' ><strong>Client Testimonials</strong></p>
        <div className='row'>
          <div className="col-12 col-md-3">
            <img alt='' src={Page1} className='w-75 my-4' />
          </div>
          <div className="col-12 col-md-3">
            <img alt='' src={Page1} className='w-75 my-4' />
          </div>
          <div className="col-12 col-md-3">
            <img alt='' src={Page2} className='w-75 my-4' />
          </div>
          <div className="col-12 col-md-3">
            <img alt='' src={Page3} className='w-75 my-4' />
          </div>

        </div>

      </div >
     
    </div>
  )
}
