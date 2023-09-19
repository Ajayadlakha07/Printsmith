import React from 'react'
import logo from '../assets/logo-300x139.png'

export default function Footer() {
  return (
    <div style={{backgroundColor:"#181818"}}>
        <div className='row py-4' >
        <div className="col-md-4 col-12">
            <div className="row">
                    <p className='text-white h2 text-start mx-4 my-3'>Useful Links</p>
                <div className="col-6">
                    <ul>
                        <li className="h6 text-white list-group-item text-start"  >About Us</li>
                        <li className="h6 text-white list-group-item text-start"  >POS Display and Fixtures</li>
                        <li className="h6 text-white list-group-item text-start"  >Case studies & Testimonial</li>
                        <li className="h6 text-white list-group-item text-start"  >Online Vendor Registration</li>
                        <li className="h6 text-white list-group-item text-start"  >Employee Engagement & Training</li>
                        <li className="h6 text-white list-group-item text-start"  >Opening</li>
                        <li className="h6 text-white list-group-item text-start"  >Privacy Policy & Terms and conditions</li>
                    </ul>
                </div>
                <div className="col-6">
                    <ul>
                        <li className="h6 text-white list-group-item text-start"  >Commercial Printing</li>
                        <li className="h6 text-white list-group-item text-start"  >Packaging Printing</li>
                        <li className="h6 text-white list-group-item text-start"  >Contact Us</li>
                        <li className="h6 text-white list-group-item text-start"  >CSR</li>
                        <li className="h6 text-white list-group-item text-start"  >News</li>
                        <li className="h6 text-white list-group-item text-start"  >Fqa</li>
                    </ul>
                </div>
            </div>
        </div>
        
        <div className="col-md-4 col-12 my-4">
                <div>
                    <img src={logo} alt='' />
                </div>
        </div>
        <div className="col-md-4 col-12">
        <div className="col-sm-3">
            <div id="text_contact-1" className="widget widget_text_contact">
		<div className="textwidget contact-details">
            <iframe title='video' id="video" width="420" height="215" src="//www.youtube.com/embed/BVlSGuVeSYw?rel=0" frameBorder={0} allowFullScreen ></iframe>
        </div>
		</div>
        </div>
        </div>
    </div>
        <p className='text-white p-4' style={{borderTop:"2px solid gray"}} >©Copyright 2023, Printsmith (P) LTD. All rights reserved.</p>

    </div>
  )
}

// 

// 

// 

// 

// 

// Faq

