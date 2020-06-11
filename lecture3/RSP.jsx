import React, { useState, useRef, useEffect } from 'react';

const RSP = () => {

    const [aa, setAa] = useState('R');
    const [result, setResult] = useState('');
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => {

        interval.current = setInterval(() => {
            if(aa === 'R'){
                setAa('S');
            }else if(aa === 'S'){
                setAa('P');
            }else if(aa === 'P'){
                setAa('R');
            }
        }, 100);

        return () => {
            clearInterval(interval.current);
        }

    }, [aa]);

    const onClickBtn = (x) => () => {
        console.warn('!!');
        clearInterval(interval.current);
        if(x === 'R'){
            if(aa === 'R'){
                setScore((pre) => pre.score + 0);
                setResult('tie');
            }else if(aa === 'S'){
                setScore((pre) => pre.score - 1);
                setResult('loose');
            }else if(aa === 'P'){
                setScore((pre) => pre.score + 1);
                setResult('win');
            }
        }
    };

    return (
        <>
            <div id="computer"> {aa} </div>
            <div>
               
                <button id="rock" className="btn" onClick={onClickBtn('R')}>R</button>
                <button id="rock" className="btn" onClick={onClickBtn('S')}>S</button>
                <button id="rock" className="btn" onClick={onClickBtn('P')}>P</button>
            </div>
            <div>Result: {result}</div>
            <div>Score: {score}</div>
        </>
    );
}

export default RSP;