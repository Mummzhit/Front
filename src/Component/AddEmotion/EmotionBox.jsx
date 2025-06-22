import React from "react";
import './EmotionBox.css';


export default function EmotionBox({ icon, text }) {
    // const navigate = useNavigate();
    const emotion = {
        icon: icon,
        name: text
    };
    
    

    return (
        <div className="emotion-box">
            <p className="emotion-icon"> {icon}</p>
            <p className="emotion-name">{text}</p>
        </div>
    );
}