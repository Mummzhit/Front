import React from "react";
import './ActivityBox.css';


export default function EmotionBox({ icon, text }) {
    // const navigate = useNavigate();
    const activity = {
        icon: icon,
        name: text,
        onclick: () => {
            console.log(`Activity selected: ${text}`);
        }
    };
    
    

    return (
        <div className="activity-box">
            <p className="activity-icon"> {icon}</p>
            <p className="activity-name">{text}</p>
            <button className="activity-button" onClick={activity.onclick}>
                추가할래요
            </button>
        </div>
    );
}