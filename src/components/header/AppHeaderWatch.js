import React, { useState, useEffect } from "react";

export default function AppHeaderWatch() {
    const [time, setTime] = useState(new Date().toLocaleTimeString());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);

        return () => clearInterval(interval);  
    }, []);

    return (
        <div>
            <h2 style={{color: "white",fontSize:"20px",fontWeight:"lighter",padding:"3px" ,marginTop:"2px"}}>{time}</h2>
        </div>
    );
}
