import React,{useEffect} from 'react'
import {table_report} from './content'
import line3 from '../assets/line3.svg'
import Table from '../components/Table'

export default function Commercialexp() {
  useEffect(() => {
    window.scrollTo(0, 0);  // Scroll to the top of the page
  }, []);
  
  return (
    <div>
       <div style={{height:"200px"}} className='gradi' ></div>
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
