import React from 'react';


export default function Card(props) {
      console.log(props.age);
      console.log(props.fname);
      

    return (
        <div>
            <h1>This is card</h1>
            <h1>{props.age}</h1>
        </div>
    );
}