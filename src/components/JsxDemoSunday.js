import React, { createElement } from 'react';

// function JsxDemoSunday(props) {
//     return (
//         <div>
//          <h1>Hello</h1>
//         </div>
//     );
// }

function JsxDemoSunday(){

    return(React.createElement('div',{id:'myid'},React.createElement('h1',null,'hello')))
}

export default JsxDemoSunday;