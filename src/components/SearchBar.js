import React, { useState, useEffect} from 'react';
import axios from 'axios';
import styled from 'styled-components';


//a form that asks for a date, and when that date is entered(changes) useEffect renders another Img
const Searchbar = ({ placeholder, handleChange, search, onSubmit }) => {
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=QxocYC6yWlIXDrfI3Sa48fNm0SubRlyH8CmGZLxm&date=${search}`)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
      }, [onSubmit])


return (
    // <label>Enter date to see photo of the day</label>
    <form>
            <input type="search" className="search" placeholder={placeholder} onChange={handleChange} onSubmit={onSubmit}>
            </input>
                <input type="submit" value="Submit"></input>
        </form>
)
}


export default Searchbar;