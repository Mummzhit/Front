import React from "react";

export default function AnalyzeIcon({ color = '#B5B5B5'}) {
    return (
        <svg 
            width="25" 
            height="14" 
            viewBox="0 0 25 14" 
            fill="none" 
            stroke={color}
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M22.5667 12L14.8838 4.622C14.1098 3.87872 12.8872 3.87872 12.1132 4.622L10.111 6.54467C9.33706 7.28794 8.11443 7.28794 7.34044 6.54467L1.56665 1" />
            <path d="M17.5667 13H21.5667C22.6712 13 23.5667 12.1046 23.5667 11V7"/>
        </svg>


    );
}