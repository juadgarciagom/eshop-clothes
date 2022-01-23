import React, { Component } from "react";
import { MenuItem } from "../menu-item/MenuItem";
import "./directory.scss";

class Directory extends Component {
    constructor() {
        super();

        this.state = {
            sections: [
                {
                    title: "Sombreros",
                    imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
                    id: 1,
                },
                {
                    title: "Chaquetas",
                    imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
                    id: 2,
                },
                {
                    title: "Tenis",
                    imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
                    id: 3,
                },
                {
                    title: "Mujeres",
                    imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
                    size: "large",
                    id: 4,
                },
                {
                    title: "Hombres",
                    imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
                    size: "large",
                    id: 5,
                },
            ],
        };
    }

    render() {
        //Functionality of the destructuracion of the sections with the map method
        this.state.sections.map(({ imageUrl }) => console.log(imageUrl));
        return (
            <div className="directory-menu">
                {this.state.sections.map(({ title, imageUrl, id, size }) => (
                    <MenuItem
                        key={id}
                        title={title}
                        imageUrl={imageUrl}
                        size={size}
                    />
                ))}
            </div>
        );
    }
}

export default Directory;
