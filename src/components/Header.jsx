import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../assets/printsmith.png'
import { AiFillFacebook, AiFillYoutube, AiOutlineTwitter, AiFillLinkedin } from "react-icons/ai";
import '../styles/main.css'
import { Link, useLocation } from 'react-router-dom';

function Header() {

  const location = useLocation();

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
              <a href='https://www.facebook.com/PrintsmithIndia/' target='blank'>
              <AiFillFacebook color='#1A6ED8' size={35} />
              </a>
              </Nav.Link>
            <Nav.Link href="#action1">
              <a href='https://www.facebook.com/PrintsmithIndia/' target='blank'>
                <AiOutlineTwitter color='#2ABDE9' size={35} />
              </a>
              </Nav.Link>
            <Nav.Link href="#action2">
              <a href='https://www.linkedin.com/company/print-smith/'  target='blank'>
                <AiFillLinkedin color='#004182' size={35}/>
              </a>
              </Nav.Link>
            <Nav.Link href="#action2">
              <a href='https://www.youtube.com/channel/UCThrndHV8sn5EA25on8Wu_Q' target='blank'>
                <AiFillYoutube color='#FF0000' size={35}/>
              </a>
              </Nav.Link>
              <div className='d-flex d-none d-md-flex align-items-center flex-row'>
                <p className="h6 mx-2" style={{fontSize:"13px"}} >Call Us: <span style={{fontWeight:"800"}}>+91 9899246402</span></p>
                <p className="h6 mx-2" style={{fontSize:"13px"}} > print@printsmith.co.in</p>
                <Link to='/registration' className="h6 mx-2" style={{fontSize:"13px",color:"#FC01AC",fontWeight:"700",textDecoration:"none"}} >Online Vendor Registration</Link>
              </div>
           
          </Nav>
         <Nav
            className="me-auto my-2 my-lg-0 mx-auto"
            // style={{ maxHeight: '100px' }}
            navbarScroll
            
          >
            
              <div className='d-flex flex-column flex-md-row align-items-center'>
                <Link to='/' className={`${location.pathname==='/'?"btnloc":"dropbtn"}`} >Home</Link>
                <Link to='/covid'  className={`${location.pathname==='/covid'?"btnloc":"dropbtn"}`} >Covid-19 Essentials</Link>
                <div className="dropdown">
                  <Link to='/about' className={`${location.pathname==='/about'?"btnloc":"dropbtn"}`}>About Us</Link>
                  <div className="dropdown-content">
                    <Link to='/about'  className='linkStyle text-start' >Vision & Mission</Link>
                    <a href='http://localhost:3000/about#team'  className='linkStyle text-start' >The Team</a>
                    <a href='http://localhost:3000/about#infrastructure'  className='linkStyle text-start' >Infrastructure</a>
                    <Link to='/case-studies'  className='linkStyle text-start' >Case study</Link>
                    <a href='http://localhost:3000/case-studies#testimonials'  className='linkStyle text-start' >Client Testimonials</a>
                  </div>
                </div> 
                <div className="dropdown">
                  <Link to='/Our-services' className={`${location.pathname==='/Our-services'?"btnloc":"dropbtn"}`}>Our Services</Link>
                  <div className="dropdown-content">
                    <Link to='/commercial-printing'  className='linkStyle text-start' >Commercial printing</Link>
                    <Link to='/packaging-printing'  className='linkStyle text-start' >Packaging Printing</Link>
                    <Link to='/pos'  className='linkStyle text-start' >POS Display and Fixtures</Link>
                  </div>
                </div> 
                <div className="dropdown">
                  <div className={`${location.pathname==='/showcase'?"btnloc":"dropbtn"}`}>Showcase</div>
                  <div className="dropdown-content">
                    <Link to='/commercial-printing-exp'  className='linkStyle text-start' >Commercial Expertise</Link>
                    <Link to='/packaging-printing-exp'  className='linkStyle text-start' >Packaging Expertise</Link>
                    <Link to='/pos-exp'  className='linkStyle text-start' >POS Display and Fixtures Expertise</Link>
                  </div>
                </div> 
                <div className="dropdown">
                  <div className={`${location.pathname==='/work-with-us'?"btnloc":"dropbtn"}`}>Work With US</div>
                  <div className="dropdown-content">
                    <Link to='/openings'  className='linkStyle text-start' >Openings</Link>
                    <Link to='/registration'  className='linkStyle text-start' >Online vender registration</Link>
                  </div>
                </div> 
                {/* <Link to='/' className='mx-2 px-2 py-1 but1' style={{textDecoration: "none"}} ></Link> */}
                <Link to='/Contact-us' className={`mx-2 ${location.pathname==='/Contact-us'?"btnloc":"dropbtn"}`} style={{textDecoration: "none"}} >Contact Us</Link>
              </div>
           
          </Nav>
         </div>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}













export default Header;