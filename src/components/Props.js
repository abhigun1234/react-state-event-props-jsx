import React from 'react'
const  Greet =props =>{
     console.log("props",props)
    return(<div><h1>Hello {props.name} {props.address}</h1></div>)
}
export default Greet