import React, { useState } from "react";

function Cricket() {
    const [score, setScore] = useState(0);

    const score1 =() => setScore(score + 1);

    return (
        <>
            <h1>Score is: {score}</h1>
            <button style={{color:'green'}} onClick={score1}>+1</button>
            <button style={{color:'green'}} onClick={() => setScore(score + 2)}>+2</button>
            <button style={{color:'green'}} onClick={() => setScore(score + 3)}>+3</button>
            <button style={{color:'green'}} onClick={() => setScore(score + 4)}>+4</button>
            <button style={{color:'green'}} onClick={() => setScore(score + 6)}>+6</button>
            <button style={{color:'green'}} onClick={() => setScore(0)}>reset</button>
        </>
    );
}

export default Cricket;
