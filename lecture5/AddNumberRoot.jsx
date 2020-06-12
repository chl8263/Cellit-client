import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import AddNumber from './AddNumber';

const AddNumberRoot = () => {

    return(
        <>
            <div>Number</div>
            <AddNumber />
        </>
    );
}

export default AddNumberRoot;