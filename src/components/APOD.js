import React from 'react';
import ReactPlayer from 'react-player/youtube'
import axios from 'axios';
import styled from 'styled-components';

export default function Apod(props) {
    const { nasa } = props;
    return (
        <StyledImg>
             <img src={nasa.url} alt="Nasa"></img> 
            <StyledTitle>Title: {nasa.title}</StyledTitle>
            <StyledDate> Date: {nasa.date}</StyledDate>
             <div>
            {nasa.explanation}
             </div>

        </StyledImg>
    )
}

const StyledImg = styled.div`
/* border: 1px dashed black; */
background-image: url('https://images.unsplash.com/photo-1459909633680-206dc5c67abb?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1502&q=80');
display: flex;
flex-direction: column;
/* background-color: ${(pr) => pr.theme.primaryColor}; */

img {
    /* border: 1px solid black; */
    height: 800px;
    border-radius: 10%;
    width: 90%;
    margin-top: 2%;
    margin-left: 4%;
}

div {
    line-height: 1.6;
    font-weight: 300;
    background-color: ${(pr) => pr.theme.primaryColor};
}

`
const StyledTitle = styled.span`
    font-weight: bold;
    font-size: 1.5rem;
    margin-bottom: 2%;
    margin-top: 1%;
   


`

const StyledDate = styled.span`
    font-style: italic;
    font-size: 1.1rem;
    margin-bottom: 2%;
    text-decoration: underline 1px solid black;


`

