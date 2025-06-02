import React from 'react';


export default function HomeIcon({ color = '#B5B5B5', size = 28 }) {
    return (
        <svg 
        width={size}
        height={size}
        viewBox="0 0 21 22" 
        fill={color}
        stroke={color}
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'

        xmlns="http://www.w3.org/2000/svg">

        <path d="M17.4333 3H3.43335C2.32878 3 1.43335 3.89543 1.43335 5V19C1.43335 20.1046 2.32878 21 3.43335 21H17.4333C18.5379 21 19.4333 20.1046 19.4333 19V5C19.4333 3.89543 18.5379 3 17.4333 3Z" />
        <path d="M14.4333 1V5"  />
        <path d="M6.43335 1V5"   />
        <path d="M1.43335 9H19.4333" />
</svg>

        
        
    );
}

