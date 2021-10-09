import React, { useState } from 'react'
import Stats from './Stats';

function Input() {

    const [videoID, setVideoID] = useState("");

    const handleChange = (event) => {
        const value = event.target.value;
        setVideoID(value);
    }

    return (
        <div className="input">
            <h1>Enter the video ID</h1>
            <input value={videoID} onChange={handleChange} placeholder="Enter video-id here" type="text" className="inputField"/>
            <hr/>
            <Stats videoID={videoID}/>
        </div>
    )
}

export default Input
