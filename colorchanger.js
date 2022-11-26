import React, { useState } from 'react'
import Select from 'react-select'
import "./col.css"
function Form() {
  var colors=[
    {
       value:'Lime',
       label:'lime'
    },
    {
      value:'Lavender',
      label:'lavender'
    },
    {
       value:'Crimson',
       label:'crimson'
    },
    {
       value:'Dark Blue',
       label:'darkblue'
    },
    {
      value:'Teal',
      label:'teal'
    },
    {
      value:'Rebecca Purple',
      label:'rebeccapurple'
    },
    {
      value:'Ghost White',
      label:'ghostwhite'
    }, 
    {
      value:'Aqua Marine',
      label:'aquamarine'
    },
    {
       value:'Alice Blue',
       label:'aliceblue'
    }
];
  var [color,setColor]=useState(colors.label);
  var Changer = (e) => {
    setColor(e.label);
  }
  return (
    <>
    <center>
      <div class="first">
        <h1>COLOR CHANGER</h1><br></br><br></br><br></br><br></br>
        <Select options={colors} onChange={Changer} className="sl"></Select>
      </div>
      <br></br>
      <div className='box'>
        <style>{'.box{background-color:'+color+';}'}</style><br></br><br></br>
        <h3> {color}</h3><br></br><br></br>
      </div>
      
      </center>
    </>
  )
}

export default Form;