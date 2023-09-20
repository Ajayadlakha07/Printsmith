import React from 'react'
import {packaging} from './content'
import Table from '../components/Table'

export default function Packaging() {
  return (
    <div>
      <div style={{height:"200px"}} className='gradi' ></div>
      
      <Table table={packaging} />
    </div>
  )
}
