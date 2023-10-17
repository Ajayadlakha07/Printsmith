import React,{useEffect,  useRef , useState} from 'react'
import {pos} from './content'
import Table from '../components/Table'
import line3 from '../assets/line3.svg'
import { AiOutlineCaretRight } from "react-icons/ai";


export default function Pos() {
  const [formattedDate,setformattedDate]= useState(null)
  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])
  const divRef = useRef(null);

   useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[]); 
  
  return (
    <div>
       <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-2' >
        <div className='text-start text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",width:"400px",maxWidth:"90%"}}>
          <span  >Home</span>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>POS DISPLAY AND FIXTURES EXPERTISE</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"150px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
      
      <Table table={pos} />
    </div>
  )
}
