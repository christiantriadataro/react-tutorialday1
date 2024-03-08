import './css/custom.css'
import Navbar from "./components/Navbar";
import Home from "./views/Home";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Create from "./components/Create";

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <div className="content">
                    <Switch>
                        <Route path="/create">
                            <Create />
                        </Route>
                        <Route exact path="/">
                            <Home />
                        </Route>
                    </Switch>
                </div>
            </div>
        </Router>
    );
}

export default App;
