import React from "react";
import Directory from "../../components/directory/Directory";

import "./homepage.scss";

const HomePage = () => {
    return (
        <div className="homepage">
            <h1>Bienvenido al e-shop</h1>
            <Directory />
        </div>
    );
};

export default HomePage;