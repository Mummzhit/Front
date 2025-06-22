import React from "react";
import { useState } from "react";
import './EmotionBox.css';


export default function EmotionBox({ icon, text }) {
    const [selected, setSelected] = useState(false);
    const emotion = {
        icon: icon,
        name: text
    };
    
    

    return (
        <div 
            className={`emotion-box ${selected ? "selected" : ""}`}
            onClick={() => setSelected(!selected)}>
            <p className="emotion-icon"> {icon}</p>
            <p className="emotion-name">{text}</p>
        </div>
    );
}