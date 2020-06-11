import React, {memo} from 'react';
const { useState, useRef } = React;

const Try = memo((props) => {

    const [result, setResult]  = useState(props.value);

    const onClick = () => {
        // setResult((pre) => {
        //     return pre.result + "1";
        // });
        setResult(1);
    };

    return (
        <li >{result}
            <button onClick={onClick}>{result}</button>
        </li>
    );
});

export default Try;