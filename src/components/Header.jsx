import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/printsmith.png'
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import '../styles/main.css'
import { Link } from 'react-router-dom';

function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <div>
            <img src={logo} alt=''/>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">

         <div className='d-flex flex-md-column flex-column-reverse' style={{margin:"auto"}} >
         <Nav
            className="me-auto my-2 my-lg-0 d-flex mx-auto flex-row justify-content-between"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1">
            <AiFillFacebook color='#1A6ED8' size={35} />
              </Nav.Link>
            <Nav.Link href="#action1">
            <AiOutlineTwitter color='#2ABDE9' size={35} />
              </Nav.Link>
            <Nav.Link href="#action2">
            <AiFillLinkedin color='#004182' size={35}/>
              </Nav.Link>
            <Nav.Link href="#action2">
            <AiFillYoutube color='#FF0000' size={35}/>
              </Nav.Link>
              <div className='d-flex d-none d-md-flex align-items-center flex-row'>
                <p className="h6 mx-2">Call Us: +91 9899246402</p>
                <p className="h6 mx-2"> print@printsmith.co.in</p>
                <p className="h6 mx-2">Online Vendor Registration</p>
              </div>
           
          </Nav>
         <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            // style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
            
              <div className='d-flex flex-column flex-md-row align-items-center'>
                <Link to='/' className='mx-2 text-white px-2 py-1' style={{backgroundColor:"#FC01AC",borderRadius:"2px",textDecoration: "none"}} >Home</Link>
                <Link to='/covid' className='mx-2 px-2 py-1 but1' >Covid-19 Essentials</Link>
                <div className="dropdown">
                  <Link to='/about' className="dropbtn">About Us</Link>
                  <div className="dropdown-content">
                    <Link to='/' style={{fontSize:"12px"}} className='text-start' >Vision & Mission</Link>
                    <a href='#team' style={{fontSize:"12px"}} className='text-start' >The Team</a>
                    <Link to='/' style={{fontSize:"12px"}} className='text-start' >Infrastructure</Link>
                    <Link to='/case-studies' style={{fontSize:"12px"}} className='text-start' >Case study</Link>
                    <Link to='/' style={{fontSize:"12px"}} className='text-start' >Client Testimonials</Link>
                  </div>
                </div> 
                <div className="dropdown">
                  <Link to='/Our-services' className="dropbtn">Our Services</Link>
                  <div className="dropdown-content">
                    <Link to='/commercial-printing' style={{fontSize:"12px"}} className='text-start' >Cpmmercial printing</Link>
                    <Link to='/packaging-printing' style={{fontSize:"12px"}} className='text-start' >Packaging Printing</Link>
                    <Link to='/pos' style={{fontSize:"12px"}} className='text-start' >POS Display and Fixtures</Link>
                  </div>
                </div> 
                <div className="dropdown">
                  <Link to='/' className="dropbtn">Showcase</Link>
                  <div className="dropdown-content">
                    <Link to='/' style={{fontSize:"12px"}} className='text-start' >Cpmmercial Expertise</Link>
                    <Link to='/' style={{fontSize:"12px"}} className='text-start' >Packaging Expertise</Link>
                    <Link to='/' style={{fontSize:"12px"}} className='text-start' >POS Display and Fixtures Expertise</Link>
                  </div>
                </div> 
                <div className="dropdown">
                  <Link to='/' className="dropbtn">Work With US</Link>
                  <div className="dropdown-content">
                    <Link to='/' style={{fontSize:"12px"}} className='text-start' >Openings</Link>
                    <Link to='/' style={{fontSize:"12px"}} className='text-start' >Online vender registration</Link>
                  </div>
                </div> 
                {/* <Link to='/' className='mx-2 px-2 py-1 but1' style={{textDecoration: "none"}} ></Link> */}
                <Link to='/Contact-us' className='mx-2 px-2 py-1 but1' style={{textDecoration: "none"}} >Contact Us</Link>
              </div>
           
          </Nav>
         </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}













export default Header;