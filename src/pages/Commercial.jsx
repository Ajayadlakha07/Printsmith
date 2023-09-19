import React from 'react'
import { AiOutlineCheck } from "react-icons/ai";
import imge from '../assets/CP1-3.png'


export default function Commercial({table1,table1_li,table1_head,img1}) {
  return (
    <div>
         <div style={{height:"200px"}} className='gradi' ></div>
         <div className='mdWidth75 mx-auto'>
         <div className='h2 my-4' style={{color:"#5B5B5B",paddingTop:"50px"}} >{table1_head[0]}<span style={{color:"#2ABDE9"}} >Printing</span></div>
         <div className='text-start mx-3 my-2 h6'>{table1_head[1]}</div>
         <ul className='text-start '>
          {
              table1_li.map((e,i)=>{
                return <li key={i}>{e}</li>
              })
          }
         </ul>
         <div  className='row'>
         {table1.map((e,i)=>{
            return<> <div key={i} className='col-md-3 col-6 my-1 h5 text-start'> <AiOutlineCheck size={25} color='#F901AC' />{e}</div>
            </>
          })}
        
          </div>
         </div>
         <div className='my-4 bg-pink d-flex flex-row my-4 mx-auto mt-4 p-4' style={{backgroundColor:"#FC01AC",justifyContent:"space-around"}}>
        <p style={{fontWeight:"100"}} className='h3 text-light'>Click on the box to get a quote & we’ll get back to you shortly.</p>
       
        <button type="button" className="btn mx-4 h6" style={{backgroundColor:"#31B0D5",color:"white",borderRadius:"0px"}}>Get a quote now</button>
      </div>
      <div >
        <img className='w-75' alt='' src={img1} />
      </div>
    </div>
  )
}







