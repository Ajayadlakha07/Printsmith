import React,{useEffect} from 'react'
import line3 from '../assets/line3.svg'
import pic from '../assets/WhatsApp-Image-2017-09-09-at-10.17.11-AM-300x180.jpeg'

export default function Employess() {

    useEffect(() => {
        window.scrollTo(0, 0);  // Scroll to the top of the page
      }, []);
  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
        <div style={{height:"300px"}} className='gradi' ></div>
            <div class="svgdiv">
                <img alt='' className='svgimg' src={line3} />
                <i class="glyphicon glyphicon-chevron-down"></i>
            </div>
            <div className='mdWidth75 my-4 text-start mx-auto'>
                <p style={{fontSize:"38px",fontWeight:"600",marginBottom:"100px"}}>Employee Engagement Activities</p>
                <div className='row'>
                    <div className='col-3'>
                        <img  alt='' src={pic}/>
                    </div>
                    <div className='col-9' >
                        <p style={{fontSize:"13px",fontFamily:"Open Sans",lineHeight:"25px",color:"#666666"}}>Pleasing clients are vital to run a profit-making business but giving employees attention is imperative for making something a really big affair. We all know, businesses who have invested in employee engagement activities have never seen a downfall. Happy employees ensure happy customers. And therefore, we organise employee engagement activities on a regular basis at our plant in Faridabad.</p>
                        <p style={{fontSize:"13px",fontFamily:"Open Sans",lineHeight:"25px",color:"#666666"}}>These activities provide us with an opportunity to sit & discuss together, streamline performance, increase productivity, and ensure the smooth running of work even under the pressure of tight deadlines.</p>
                    </div>
                </div>
            </div>

    </div>
  )
}
