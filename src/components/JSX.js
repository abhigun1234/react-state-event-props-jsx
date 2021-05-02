import React from 'react'


// const HelloJsx =props =>{
//    console.log("props",props)
// return(<div><h1>Hello {props.name}{props.email}</h1></div>)
// }
const HelloJsx =props =>{
   console.log("props",props)
return React.createElement('div',null,React.createElement('h1',{ id:'name'},'abhishek'))
}
export default HelloJsx