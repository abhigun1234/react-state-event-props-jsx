import React from 'react';

function ChildDemoSunday(props) {
    return (
        <div>
            Hello {props.name} welcome to the sunday
            <button  onClick={()=>props.greet('sending data from child please recive')}>callParent</button>
        </div>
    );
}

export default ChildDemoSunday;