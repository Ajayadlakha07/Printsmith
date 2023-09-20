import React from 'react'
import {table_report} from './content'
import Table from '../components/Table'

export default function Commercialexp() {
  return (
    <div>
      <div style={{height:"200px"}} className='gradi' ></div>
      
      <Table table={table_report.table1} />
      <Table table={table_report.table2} />
      <Table table={table_report.table3} />
      
    </div>
  )
}
