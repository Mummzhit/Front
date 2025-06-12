import React from "react";

export default function InputField ({ type, placeholder, value, name, onChange }) {

    return (
        <input
            className = "input-field" 
            type = {type}
            value ={value}
            name={name}
            placeholder = {placeholder}
            onChange={onChange}
        />

    );
}