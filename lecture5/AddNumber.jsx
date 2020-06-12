import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import store from './src/store';

const AddNumber = () => {

    const [size, setSize] = useState(1);

    const onChange = (e) => {
        
    };

    const onClickPlus = () => {
        store.dispatch({type: 'INCREMENT', size: size});
    };

    return (
        <>
            <div>
                <h1>Add NUmber</h1>
                <input type="button" value="+" onClick={onClickPlus}/>
                <input type="text" value="0" onChange={onChange}/>
            </div>
        </>
    );
}

export default AddNumber;