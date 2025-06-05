import React from "react";
import ChallengeStatusCard from "../ChallengeStatusCard/ChallengeStatusCard";
import './DashContainer.css'

export default function DashContainer (){
    const username = '멋쟁이 사자처럼';
    const day = '9';
    const safetime ='146';
    return (
        <div className="Main-Dash-Container">
        <ChallengeStatusCard className='challenge-status-card' username={username} day = {day} safetime={safetime}/></div>
        
    )
}