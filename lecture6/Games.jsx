import React from "react"
import { BrowserRouter, HashRouter, Route, Link } from "react-router-dom";


import GameMatcher from './GameMatcher';

const Games = (props) => {
    return (

        <HashRouter>
            <Link to="/game/page1?name=ewan"> page1</Link>
            <Link to="/game/page2"> page2</Link>
            <Link to="/game/page3"> page3</Link>
            <Link to="/game/index"> game matcher</Link>
            <div>
                {/* <Route path="/page1" component={page1}/>
                <Route path="/page2" component={page2}/>
                <Route path="/page3" component={page3}/> */}
                {/* <Route path="/game/:name" component={() => <GameMatcher aaa={"asdsad"} />} /> */}
                <Route path="/game/:name" render={(props) => <GameMatcher {...props} />} />
                {/* <Route path="/game/:name" component={GameMatcher}/> */}
            </div>
        </HashRouter>

        // <BrowserRouter>
        //     <Link to="/page1"> page1</Link>
        //     <Link to="/page2"> page2</Link>
        //     <Link to="/page3"> page3</Link>
        //     <div>
        //         <Route path="/page1" component={page1}/>
        //         <Route path="/page2" component={page2}/>
        //         <Route path="/page3" component={page3}/>
        //     </div>
        // </BrowserRouter>
    );
}

export default Games;