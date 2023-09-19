import teampic1 from '../assets/teampic1-1-270x270_c.jpg'
import teampic2 from '../assets/vijaysir-1-270x270_c.png'
import teampic3 from '../assets/tarun-270x270_c.png'
import teampic4 from '../assets/DSC06915-scaled-270x270_c.jpg'
import teampic5 from '../assets/IMG-20200225-WA0009-270x270_c.jpg'
import teampic6 from '../assets/2-270x270_c.jpg'
import React from 'react'
import { AiOutlineLine } from "react-icons/ai";

export default function Team() {
  return (
    <>
     <div id='team' style={{paddingTop:"200px"}}>
            <div className='h1' style={{color:"#535353"}} >Meet <span style={{fontWeight:500,color:"#2ABDE9"}} >the Leadership Team</span> </div>
            <AiOutlineLine className='mb-4' color='#F902AC' style={{height:"3px", width:"60px",backgroundColor:"#F902AC"}} />
            <p>Team Printsmith is a bunch of like-minded, skilled & dedicated people who strive to provide world-class printing solutions to the clients. </p>
          </div>
          <div className='d-flex flex-md-row w-100 flex-column justify-content-center my-4' style={{}} >
            <div className='bg-light text-start mx-4 mdWidth25' >
                <img className='picWidth' alt='' src={teampic1} />
                <div className='m-4'>
                    <p className='h4'style={{color:"#535353"}}>Ajay Adlakha</p>
                    <p className='h6'style={{color:"#535353"}}>Managing Director</p>
                    <div>
                        <p style={{color:"#535353",fontSize:"12px", marginTop:"40px"}}>An M.B.A & B. Tech, Ajay Adlakha is the Managing Director as well as the chief strategist of Printsmith. </p>
                        <p style={{color:"#535353",fontSize:"12px"}}>He started his career with Johnson & Johnson & worked with several prestigious companies like Thermax Ltd. & Alembic Pharmaceutical. Soon he realised that he has a different goal to achieve and this led to the foundation of Infinity Advertising Services in 1994. Printsmith came into existence in 2003 to shoulder the print requirements of Infinity Advertising Services. </p>
                        <p style={{color:"#535353",fontSize:"12px"}}>Ajay is also the Vice President of DAC & Haryana Kick Boxing Association and the President of Rotary club of Faridabad-Sanskar, Haryana. He is also associated with an NGO, ‘Eksang’ as a Trustee, which provides free vocational training to underprivileged youth. His quest for excellence & entrepreneurial acumen has been taking the company on a path of constant growth and expansion.</p>
                    </div>
                </div>
            </div>
            <div className='bg-light text-start mx-4 mdWidth25' >
                <img className='picWidth' alt='' src={teampic2} />
                <div className='m-4'  >
                    <p className='h4'style={{color:"#535353"}}>Vijay Adlakha</p>
                    <p className='h6'style={{color:"#535353"}}>Director</p>
                    <div>
                        <p style={{color:"#535353",fontSize:"12px", marginTop:"40px"}}>An M.B.A & B. Tech, Ajay Adlakha is the Managing Director as well as the chief strategist of Printsmith. </p>
                        <p style={{color:"#535353",fontSize:"12px"}}>He started his career with Johnson & Johnson & worked with several prestigious companies like Thermax Ltd. & Alembic Pharmaceutical. Soon he realised that he has a different goal to achieve and this led to the foundation of Infinity Advertising Services in 1994. Printsmith came into existence in 2003 to shoulder the print requirements of Infinity Advertising Services. </p>
                        <p style={{color:"#535353",fontSize:"12px"}}>Ajay is also the Vice President of DAC & Haryana Kick Boxing Association and the President of Rotary club of Faridabad-Sanskar, Haryana. He is also associated with an NGO, ‘Eksang’ as a Trustee, which provides free vocational training to underprivileged youth. His quest for excellence & entrepreneurial acumen has been taking the company on a path of constant growth and expansion.</p>
                    </div>
                </div>
            </div>
            <div className='bg-light text-start mx-4 mdWidth25' >
                <img className='picWidth' alt='' src={teampic3} />
                <div className='m-4'>
                    <p className='h4'style={{color:"#535353"}}>Tarun Adlakha</p>
                    <p className='h6'style={{color:"#535353"}}>Director</p>
                    <div>
                        <p style={{color:"#535353",fontSize:"12px",marginTop:"40px"}}>An M.B.A & B. Tech, Ajay Adlakha is the Managing Director as well as the chief strategist of Printsmith. </p>
                        <p style={{color:"#535353",fontSize:"12px"}}>He started his career with Johnson & Johnson & worked with several prestigious companies like Thermax Ltd. & Alembic Pharmaceutical. Soon he realised that he has a different goal to achieve and this led to the foundation of Infinity Advertising Services in 1994. Printsmith came into existence in 2003 to shoulder the print requirements of Infinity Advertising Services. </p>
                        <p style={{color:"#535353",fontSize:"12px"}}>Ajay is also the Vice President of DAC & Haryana Kick Boxing Association and the President of Rotary club of Faridabad-Sanskar, Haryana. He is also associated with an NGO, ‘Eksang’ as a Trustee, which provides free vocational training to underprivileged youth. His quest for excellence & entrepreneurial acumen has been taking the company on a path of constant growth and expansion.</p>
                    </div>
                </div>
            </div>
          </div>
          <div className='d-flex flex-md-row w-100 flex-column justify-content-center my-4' style={{}} >
            <div className='bg-light text-start mx-4 mdWidth25' >
                <img className='picWidth' alt='' src={teampic4} />
                <div className='m-4'>
                    <p className='h4'style={{color:"#535353"}}>Anil Singh</p>
                    <p className='h6'style={{color:"#535353"}}>General Manager (Printsmith)</p>
                   
                </div>
            </div>
            <div className='bg-light text-start mx-4 mdWidth25' >
                <img className='picWidth' alt='' src={teampic5} />
                <div className='m-4'  >
                    <p className='h4'style={{color:"#535353"}}>Manoj Chaudhary</p>
                    <p className='h6'style={{color:"#535353"}}>QA Head</p>
                   
                </div>
            </div>
            <div className='bg-light text-start mx-4 mdWidth25' >
                <img className='picWidth' alt='' src={teampic6} />
                <div className='m-4'>
                    <p className='h4'style={{color:"#535353"}}>Virender Verma</p>
                    <p className='h6'style={{color:"#535353"}}>Purchase Head </p>
                    
                </div>
            </div>
          </div>
    </>
  )
}
