import React from 'react';
import ReactPlayer from 'react-player/youtube'
import axios from 'axios';

export default function Apod(props) {
    const { nasa } = props;
    return (
        <div>
            <ReactPlayer url={nasa.url} />
            <span>Title: {nasa.title}</span><span> Date: {nasa.date}</span>
            {nasa.explanation}

        </div>
    )
}