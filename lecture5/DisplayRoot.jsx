import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import DisplayNumber from './DisplayNumber';

const DisplayRoot = ({number}) => {

    return(
        <>
            <div>Display</div>
            <DisplayNumber number = {number}/>
            
        </>
    );
}

export default DisplayRoot;