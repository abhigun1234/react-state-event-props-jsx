import React from 'react';

function List(props) {
    const fruits=['Mango','Banana','pinaple']
    const personArr=[{name:'abhishek'},{name:'amol'}]
    return (
        <div>
            {
                // fruits.map(fruit=><h2>{fruit}</h2>)
                    personArr.map(person=><h2>{person.name}</h2>)
            }
        </div>
    );
}

export default List;