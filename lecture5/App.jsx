import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import AddNumberRoot from './AddNumberRoot';
import DisplayRoot from './DisplayRoot';

const App = () => {

    const [number, setNumber] = useState(0);

    return (
        <>
            <h1>Root</h1>
            <AddNumberRoot />
            <DisplayRoot number={number}/>
        </>
    );
}

export default App;