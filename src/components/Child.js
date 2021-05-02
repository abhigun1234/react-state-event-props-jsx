import React from 'react';

function Child(props) {
    return (
        <div>
        {/* <button onClick={props.greet}>Call Parent</button> */}
        <button onClick={()=>props.greet('child')}>Call Parent</button>
        </div>
    );
}

export default Child;