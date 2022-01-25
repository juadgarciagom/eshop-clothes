import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SignPage from "./pages/sign/SignPage";
import { auth, createUserProfileDocument } from './firebase/firebase.utils'
import React from "react";

class App extends React.Component {
    constructor() {
        super();

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            // this.setState({ currentUser: user})
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                userRef.onSnapshot(snapShot => {
                    this.setState({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    }, () => {console.log(this.state);})
                })
            } else {
                this.setState({ currentUser: userAuth })
            }
            
        })

    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser} />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route path="/shop" component={ShopPage} />
                    <Route path="/signin" component={SignPage} />
                </Switch>
            </div>
        );
    }
    
}

export default App;
