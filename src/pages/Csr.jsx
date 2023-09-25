import React,{useEffect, useRef} from 'react'
import line3 from '../assets/line3.svg'
import pic from '../assets/Page1-1-238x300.jpg'

export default function Csr() {
  const divRef = useRef(null);
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[]);

  return (
    <div style={{backgroundColor:"#F5F5F5"}} >
      <div ref={divRef} ></div>
        <div style={{height:"300px"}} className='gradi' ></div>
            <div class="svgdiv">
                <img alt='' className='svgimg' src={line3} />
                <i class="glyphicon glyphicon-chevron-down"></i>
            </div>
            <div className='mdWidth75 my-4 py-4 text-start mx-auto' >
            <div className='row '>   
                <div className='col-8'>
                    <p className='' style={{fontSize:"35px",color:"#666666"}} >CSR Activity</p>
                    <div style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >Life becomes better when you share the joy and spread happiness. At Printsmith, we have made this philosophy our policy. To achieve this goal, we have collaborated with like-minded people and contribute individually too.</div>
                    <div style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >Printsmith has been working with ABLE Charities, an NGO operating from Haryana to provide better healthcare facilities and education to rural people who are deprived of these basic facilities due to acute poverty and ignorance.</div>
                    <p  className='my-4' style={{fontWeight:700,color:"#555555"}}>Education</p>
                    <p style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >Education is one of the basic human rights and no person can be denied this right. Printsmith partnered with ABLE Charities and has been donating funds to build schools for providing free education to underprivileged children across the country.</p>
                    <p className='my-4' style={{fontWeight:700,color:"#555555"}}>Health</p>
                    <div style={{fontFamily:"Open Sans",fontSize:"13px",lineHeight:"25px"}} >Printsmith along with ABLE Charities organise health camps in slums and alike areas for a complete preventive and corrective health check-up of children who are under below poverty line. These community healthcare programmes are being run on a regular basis to achieve our mission of ensuring good health to everyone.</div>

                </div>
                <div className='col-4 d-flex align-items-center' >
                <img alt='' src={pic} />

                </div>

            </div>

            </div>
            
    </div>
  )
}
