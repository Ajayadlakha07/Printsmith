import Carousel from 'react-bootstrap/Carousel';
import banner1 from "../assets/epsom_banner-1.png"
import banner2 from '../assets/LED-Catalogue_innerPage.p0021-1.jpg'
import banner3 from '../assets/banner4-2.jpg'
import banner4 from '../assets/banner3-2.jpg'
import banner5 from "../assets/banner2-2.jpg"
import banner6 from "../assets/banner8.jpg"
import banner7 from "../assets/banner1-1.jpg"


function Carous() {
  return (
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner3}
          alt="Third slide"
        />
         <Carousel.Caption style={{left:"0px"}} >
        <div>
          <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 courserone' >Coffee table book launch function</div>
          </div>
          <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 coursertwo' >Nulla vitae elit libero, a pharetra augue mollis interdum.</div>
          </div>
          <div className="text-start my-md-3 my-2">
          <div className='text-start p-2 courserthree' >New Delhi</div>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner2}
          alt="Second slide"
        />
        <Carousel.Caption style={{left:"0px"}} >
        <div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 courserone'>Tempting! isn't it?</div>
        </div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 coursertwo' >CMYK along with Abrasive & Emboss UV, and Matt Lamination on 220 Matt Art Card</div>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption style={{left:"0px"}} >
        <div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 courserone' >Glossy finishing at its best</div>
        </div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 coursertwo' >Glossy colours appealing to your senses</div>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner7}
          alt="Third slide"
        />
       <Carousel.Caption style={{left:"0px"}} >
        <div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 courserone'>Designs packed with innovation</div>
        </div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 coursertwo'>Delivering quality, harnessing latest technology.</div>
        </div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start p-2 courserthree' >Offering printing solutions, not just printed materials.</div>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner6}
          alt="Third slide"
        />
       <Carousel.Caption style={{left:"0px"}} >
        <div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 courserone'>Exhibiting our latest work</div>
        </div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start my-1 p-2 coursertwo'>Pragati Maidan, New Delhi</div>
        </div>
        <div className="text-start my-md-3 my-2">
          <div className='text-start p-2 courserthree' >3rd- 6th August, 2017</div>
        </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner5}
          alt="Third slide"
        />
       <Carousel.Caption style={{left:"0px"}} >
        <div>
          <div className="text-start my-md-3 my-2" >
          <div className='text-start my-1 p-2 courserone'>CMYK</div>
          </div>
          <div className="text-start my-md-3 my-2" >
          <div className='text-start my-1 p-2 coursertwo' >Innovation is our passion</div>
          </div>
          <div className="text-start my-md-3 my-2" >
          <div className='text-start p-2 courserthree' >White on Matt Silver MetPET, CMYK</div>
          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner4}
          alt="Third slide"
        />
       <Carousel.Caption style={{left:"0px"}} >
        <div>
          <div className='text-start my-md-3 my-2'>
          <div className='text-start my-1 p-2 courserone' >Enhancing experience with alluring designs</div>
          </div>
          <div className='text-start my-md-3 my-2'>
          <div className='text-start my-1 p-2 coursertwo' >125 Micron NTR Media,CMYK</div>

          </div>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carous;