import React from 'react'
import { Section1 } from './Section1'
import { Section2 } from './Section2'

export const Allsection = (props) => {
    console.log(props.coursreData )
  return (
    <div>Allsection
        <Section1/>
        <Section2 coursreData = {props.coursreData}/>
z    </div>
  )
}
