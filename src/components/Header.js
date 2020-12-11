import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Header({ nasa }) {

    return (<StyledHead>
        <h1>NASA Photo Of The Day!</h1>
        <p>Today's Photo: {nasa.date}</p>
        <label>Enter date to see photo of the day</label>
        {/* <form onSubmit={handleSubmit}>
            <input type="date" id="date" name="date" value={} onChange={}>
            </input>
                <input type="submit" value="Submit"></input>
        </form> */}
        </StyledHead>)
}

const StyledHead = styled.div`
background-color: ${(pr) => pr.theme.secondaryColor};

h1 {
    font-family: ${(pr) => pr.theme.fantasyFont};
}
p {
    font-size: 1.2em;
    font-style: italic;
}
label {
    margin-bottom: 2%;
}
`

