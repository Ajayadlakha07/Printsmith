import React from 'react'
import {pos} from './content'
import Table from '../components/Table'

export default function Pos() {
  return (
    <div>
      <div style={{height:"200px"}} className='gradi' ></div>
      
      <Table table={pos} />
    </div>
  )
}
