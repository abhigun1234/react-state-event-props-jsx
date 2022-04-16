import React from 'react';

function MyAddress(x) {
    console.log("props",x)
    return (
        <div>
            Hello
            {x.name}
            {x.email}
        </div>
    );
}

export default MyAddress;