import React from 'react';

function List(props) {
    const fruits=['Mango','Banana','pinaple']
    return (
        <div>
            {
                fruits.map(fruit=><h2>{fruit}</h2>)
            }
        </div>
    );
}

export default List;