import React from "react";

export default function Button({
    children, // This is button Text.
    type = "button",
    bgColor = "bg-blue-600",
    textColor = "text-white",
    className = "",
    ...props // Programmer Provide more Properties
}) {
    
    return (
        <button className={`px-4 py-2 rounded-lg 
        ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}