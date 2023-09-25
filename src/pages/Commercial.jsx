import React,{useEffect, useRef} from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import line3 from '../assets/line3.svg'


export default function Commercial({table1,table1_li,table1_head,img1}) {
  const divRef = useRef(null);
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[]);

  return (
    <div style={{backgroundColor:"#F5F5F5"}}>
      <div ref={divRef} ></div>
         <div style={{height:"300px"}} className='gradi' ></div>
        <div class="svgdiv">
          <img alt='' className='svgimg' src={line3} />
          <i class="glyphicon glyphicon-chevron-down"></i>
          </div>
         <div className='mdWidth75 mx-auto'>
         <div className='h1 my-3' style={{color:"#5B5B5B",paddingTop:"50px"}} >{table1_head[0]}<span style={{color:"#2ABDE9"}} >Printing</span></div>
         <div className='mx-auto' style={{width:"50px" ,height:"3px", backgroundColor:"#FA01AC"}} ></div>
         <div className='text-start mx-4 my-3' style={{fontFamily:"Open Sans",fontSize:"16px",color:"rgb(83,83,83)"}} >{table1_head[1]}</div>
         <ul className='text-start '>
          {
              table1_li.map((e,i)=>{
                return <li className='my-1' style={{fontFamily:"Open Sans",fontSize:"13px",color:"rgb(83,83,83)"}} key={i}>{e}</li>
              })
          }
         </ul>
         <div style={{marginTop:"60px",marginBottom:"60px"}} className='row px-2'>
         {table1.map((e,i)=>{
            return<> <div style={{color:"rgb(83,83,83)",fontSize:"18px"}} key={i} className='col-md-3 col-6 text-start'> <AiOutlineCheck size={25} className='mx-2' color='#F901AC' />{e}</div>
            </>
          })}
        
          </div>
         </div>
         <div className='my-4 bg-pink d-flex flex-row my-4 mx-auto mt-4 p-4' style={{backgroundColor:"#FC01AC",justifyContent:"space-around"}}>
        <p style={{fontWeight:"100"}} className='h3 text-light'>Click on the box to get a quote & we’ll get back to you shortly.</p>
       
        <button type="button" className="btn mx-4 h6" style={{backgroundColor:"#31B0D5",color:"white",borderRadius:"0px"}}>Get a quote now</button>
      </div>
      <div className='py-4' >
        <img className='w-75 my-4' alt='' src={img1} />
      </div>
    </div>
  )
}







