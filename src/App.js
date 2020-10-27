import React from "react";
import './App.css';
import HomePage from "./pages/homepage/homepage";
import {Switch, Route} from 'react-router-dom'
import ShopPage from "./pages/shop/shop.component";
import Header from "./component/header/header.component";


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
            <Header/>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/shop" component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
