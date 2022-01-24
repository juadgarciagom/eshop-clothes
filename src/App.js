import { Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";

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
                <Route path="/shop" component={ShopPage} />
            </Switch>
        </div>
    );
}

export default App;
