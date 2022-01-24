import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";

const HatsPage = (props) => {
    console.log(props);
    return (
        <div>
            <h1>Hats Page</h1>
        </div>
    );
};

function App() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={HomePage} />
                <Route path="/gorras" component={HatsPage} />
            </Switch>
        </div>
    );
}

export default App;
