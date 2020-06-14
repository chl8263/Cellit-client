import React from "react"
import Page1 from './routes/Page1'
import Page2 from './routes/Page2'
import Page3 from './routes/Page3'

const GameMatcher = (props) => {
    let data = new URLSearchParams(props.location.search.slice(1))
    console.log(data.get('name'));

    if(props.match.params.name === 'page1'){
        return <Page1/>
    }else if(props.match.params.name === 'page2'){
        return <Page2/>
    }else if(props.match.params.name === 'page3'){
        return <Page3/>
    }else {
        return (
            <div>
                NO this site
            </div>
        )
    }
}

export default GameMatcher;