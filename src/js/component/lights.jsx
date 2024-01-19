import React, {useState, useEffect} from "react";


const Lights = () => { 
const [ color, setColor] = useState('_______')

function generateColor () {
const colors = ["#FF0000", "#FFFF00", "#00FF00", "#800080"]; // Red, Yellow, Green, Purple
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColor(colors[randomIndex]);

};


return (

    <div> 
        <div> 
            <button className="btn btn-outline-secondary m-5" onClick={generateColor} style={{backgroundColor:color}}>  Click me </button>
        </div>
            <div style={{backgroundColor:color}}> 
            <p> You have selected {color}  </p> 
            </div> 
    </div>
        
)

}



export default Lights;
