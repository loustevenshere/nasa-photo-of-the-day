import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Header({ nasa }) {
    const [searchValue, setsearchValue] = useState();
    const [value, setValue] = useState();
     function handleChange(event) {
        //setValue(value)
        // console.log(event.target.value)
        // return(event.target.value)
        setsearchValue(event.target.value)
        console.log(searchValue);
    }

    function handleSubmit(event) {
        console.log(value)
    }

    
    return (<StyledHead>
        <h1>NASA Photo Of The Day!</h1>
        <p>Today's Photo: {nasa.date}</p>
        <label>Enter date to see photo of the day</label>
        <form onSubmit={handleSubmit}>
            <input type="date" id="date" name="date" value="value" onChange={handleChange}>
            </input>
                <input type="submit" value="Submit"></input>
        </form>
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

//a form that asks for a date, and when that date is entered(changes) useEffect renders another Img
// function Searchbar({ nasa }) {
//     // function useSearch () => {
//     //     setsearchValue(handleChange(event))
//     // }
//     useEffect(() => {
//         axios
//         .get(`https://api.nasa.gov/planetary/apod?api_key=QxocYC6yWlIXDrfI3Sa48fNm0SubRlyH8CmGZLxm&date=${searchValue}`)
//         .then(res => {
//           console.log(res.data)
//         })
//         .catch(err => {
//           console.log(err)
//         })
//       }, [])
// }