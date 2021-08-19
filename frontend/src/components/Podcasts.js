import Podcast from './Podcast'
import { useState } from 'react'

const Podcasts = (props) => {
    const [color, setColor] = useState("white")

    const [text, setState] = useState("Dark Mode")
    
    const podcasts = () => {
        return props.podcasts.map((podcast) => {
            return < Podcast key={podcast.id} {...podcast} />
        })
    } 

    const handleClick = () => { 
        color === "white" ? setColor("black") : setColor("white")
        text === "Dark Mode" ? setState("Light Mode") : setState("Dark Mode")
    }
    
    return (
        <div style={{backgroundColor: `${color}`}}>
           <button onClick={handleClick}>{`${text}`}</button>
        <div>
            {podcasts()}
        </div>
        </div>
    );
}

export default Podcasts