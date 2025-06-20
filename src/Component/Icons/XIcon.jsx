import React from 'react'; 


export default function XIcon({ size = 24, color = '#252420', ...props }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}   
      height={size}  
      fill="none"
      {...props}   
    >
      <path
        stroke={color} 
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.68}
        d="M18 6 6 18M6 6l12 12"
      />
    </svg>
  );
}