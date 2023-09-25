import React,{useEffect, useRef} from 'react'
import {packaging} from './content'
import Table from '../components/Table'

export default function Packaging() {
  const divRef = useRef(null);
  useEffect(() => {
    divRef?.current?.scrollIntoView({ behavior: 'smooth' });
  },[]);
  return (
    <div>
      <div ref={divRef} ></div>
      <div style={{height:"200px"}} className='gradi' ></div>
      
      <Table table={packaging} />
    </div>
  )
}
