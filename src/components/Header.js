import React from 'react';

export default function Header({ nasa }) {
    
    return (<div>
        <h1>NASA Photo Of The Day!</h1>
        <p>{nasa.date}</p>
    </div>)
}