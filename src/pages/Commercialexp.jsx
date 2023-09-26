import React,{useEffect, useState} from 'react'
import {table_report} from './content'
import line3 from '../assets/line3.svg'
import Table from '../components/Table'
import { AiOutlineCaretRight } from "react-icons/ai";

export default function Commercialexp() {
  const [formattedDate,setformattedDate]= useState(null)
  useEffect(()=>{
      const currentDate = new Date();
      const format = new Date(currentDate).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
      setformattedDate(format)
  }, [])
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, []);
  
  return (
    <div>
       <div  style={{height:"200px",alignItems:"end",paddingTop:"100px"}} className='gradi text-start px-4' >
        <div className='text-start text-white px-2 py-1' style={{backgroundColor:"rgba(0, 0, 0, .8)",width:"400px"}}>
          <span  >Home</span>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>OUR SERVICES</span>
          <AiOutlineCaretRight size={13} className='mx-2' color='#FC01AC'/>
          <span>COMMERCIAL EXPERTISE</span>
        </div>
        <div className='px-2 py-1 my-2'  style={{backgroundColor:"hsla(0, 0%, 100%, .5)",width:"150px",fontSize:"11px"}}>{formattedDate}</div>

       </div>
        <div class="svgdiv">
          <img alt='' className='svgimg' src={line3} />
          <i class="glyphicon glyphicon-chevron-down"></i>
          </div>
      
      <Table table={table_report.table1} />
      <Table table={table_report.table2} />
      <Table table={table_report.table3} />
      
    </div>
  )
}
