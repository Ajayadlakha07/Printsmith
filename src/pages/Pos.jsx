import React,{useEffect,  useRef } from 'react'
import {pos} from './content'
import Table from '../components/Table'

export default function Pos() {
  const divRef = useRef(null);

   useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[]); 
  
  return (
    <div>
      <div  ref={divRef} style={{height:"200px"}} className='gradi' ></div>
      
      <Table table={pos} />
    </div>
  )
}
