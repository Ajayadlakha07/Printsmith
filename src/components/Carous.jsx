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
        {/* <div>
          <h5 className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"rgba(35, 35, 35, 0.3)"}}>Coffee table book launch function</h5>
          <p className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner1}
          alt="First slide"
        />
        {/* <div>
          <h5 className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"rgba(35, 35, 35, 0.3)"}}>Coffee table book launch function</h5>
          <p className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"black"}}>Jaya Bachchan addressing the audience</p>
        </div> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner2}
          alt="Second slide"
        />
        {/* <div>
          <h5 className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"rgba(35, 35, 35, 0.3)"}}>First slide label</h5>
          <p className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div> */}
      </Carousel.Item>
      
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner4}
          alt="Third slide"
        />
       {/* <div>
          <h5 className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"rgba(35, 35, 35, 0.3)"}}>First slide label</h5>
          <p className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner5}
          alt="Third slide"
        />
       {/* <div>
          <h5 className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"rgba(35, 35, 35, 0.3)"}}>First slide label</h5>
          <p className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner6}
          alt="Third slide"
        />
        {/* <div>
          <h5 className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"rgba(35, 35, 35, 0.3)"}}>First slide label</h5>
          <p className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div> */}
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 md600"
          src={banner7}
          alt="Third slide"
        />
        {/* <div>
          <h5 className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"rgba(35, 35, 35, 0.3)"}}>First slide label</h5>
          <p className='h5 text-start p-2' style={{ fontSize:"40px", color:"white", backgroundColor:"black"}}>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </div> */}
      </Carousel.Item>
    </Carousel>
  );
}

export default Carous;