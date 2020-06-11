import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

import BaseBall from'./BaseBall';

const Hot = hot(BaseBall);

ReactDom.render(<Hot />, document.querySelector('#root'));