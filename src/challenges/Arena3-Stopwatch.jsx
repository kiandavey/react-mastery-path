import { useState, useEffect } from 'react';

export default function Arena3() {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    useEffect(() => {
        if(!isRunning) return;

        const interval = setInterval(() => {
            setTimer(prev => prev + 1);
        }, 100)
        
        return () => {
            clearInterval(interval);
        }
    }, [isRunning]);

    return(
        <div>
            <h2 style={{color: 'orange'}}>Arena Challenge 3: Stopwatch</h2>

            <div style={{ 
                fontSize: '80px', 
                fontFamily: 'monospace', 
                border: '5px solid blue', 
                display: 'inline-block',
                padding: '20px',
                backgroundColor: 'black',
                color: 'blue',
                borderRadius: '10px'
            }}>
                {(timer / 10).toFixed(1) + "s"}
            </div>

            <div style={{ color: 'white'}}>
                <button 
                style={{backgroundColor: 'green'}}
                onClick={() => setIsRunning(true)}
                >Start</button>

                <button 
                style={{backgroundColor: 'red'}}
                onClick={() => setIsRunning(false)}
                >Stop</button>

                <button 
                style={{backgroundColor: 'black'}}
                onClick={() => {
                    setIsRunning(false); 
                    setTimer(0);
                }}
                >Reset</button>
            </div>
        </div>
    );
}