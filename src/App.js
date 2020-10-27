import React from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage";
import {Switch, Route, Link} from 'react-router-dom'

const HatsPage = (props) => {
    return (
        <div>
            <h1>Hats Page</h1>
            <button onClick={() => props.history.push('/')}>Home</button>
        </div>
    )
}

// const MainPage = (props) => {
//     return (
//         <div>
//             <Link to={"/hats"}>Hats</Link>
//             <Link to={`${props.match.url}/11`}>11</Link>
//             <h1>MainPage Page</h1>
//         </div>
//     )
// }
//
// const HomPage = (props) => {
//     return (
//         <div>
//             <button onClick={() => props.history.push('/hats')}>Topics</button>
//             <Link to={`${props.match.url}/11`}>11</Link>
//
//             <h1>HomePage Page</h1>
//         </div>
//     )
// }

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/shop/hats" component={HatsPage}/>
            </Switch>
        </div>
    );
}

export default App;
