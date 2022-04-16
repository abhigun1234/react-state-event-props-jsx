import React from 'react';

// function Demojsx(props) {
//     return (
//         <div>
//             <h1>Hello</h1>
//         </div>
//     );
// }

function Demojsx(props) {
    return (

        React.createElement('div',{id:'myId'},<h1>Hello</h1>)
        );
}


export default Demojsx;