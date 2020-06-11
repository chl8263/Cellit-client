import React, {Component} from 'react';
import Try from './Try';

const { useState, useRef } = React;

const BaseBall = () => {

    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState('');
    const [tries, setTries] = useState([]);
    
    const onSubmitForm = () => {
        setTries((prev) => {
            return [...prev.tries, {try: 1, result: 2}];
        });
    };

    const onChangeInput = (e) => {
        setValue(e.target.value);
    };

    return(
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeInput} />
            </form>
            <div> Count: {tries.length}</div>
            
            {['like', 'like', 'like', 'like'].map((x, i) => {
                return ( 
                    <Try value={x} />
                );
            })}
        </>
    );
}

export default BaseBall;