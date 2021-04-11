import React from "react";
import { formatPrice } from "../helpers";

class Fish extends React.Component {
    // handelClick = () => {
    //     this.props.addToOrder(this.props.index);
    // };

    render() {
        // This is the form if You want to write out each variable separetly, however, there is a shorter, collective version above
        // const image = this.props.details.image;  
        const { image, name, price, desc, status } = this.props.details;
        const isAvailable = status === "available";

        return ( 
            <li className="menu-fish">
                <img src={image} alt={name} />
                <h3 className="fish-name">
                    {name}
                    <span className="price">{formatPrice(price)}</span>
                </h3>
                <p>{desc}</p>
                <button
                    disabled={!isAvailable}
                    onClick={() => this.props.addToOrder(this.props.index)}
                    >
                    {isAvailable ? "Add To Order" : "Sold Out!"}
                </button>
            </li>
        );
    }
  }
  
  export default Fish;