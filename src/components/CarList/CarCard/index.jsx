import React from "react";

import './CarCard.scss'

const CarCard = ({img,title, mileage, fule, seats, price, availability, description}) => {
    return <div className="CarCard">
        <div className="CarCardContent">
        <div className="CarImg">
            <img src={img} alt="Car Image"/>
        </div>
        <div className="carDetails">
            <h3>{title}</h3>
            <div className="info">
                <div className="item">mileage: </div>
                <span>{mileage} KM</span>
            </div>
            <div className="info">
                <div className="item">fuel type: </div>
                <span>{fule}</span>
            </div>
            <div className="info">
                <div className="item">seats: </div>
                <span>{seats}</span>
            </div>
            <div className="info">
                <div className="item">price per day: </div>
                <span>$ {price}</span>
            </div>
            <div className="info">
                <div className="item">availability: </div>
                <span>{availability.toString()}</span>
            </div>
            <div className="description">
                <div className="item">description: </div>
                <span>{description}</span>
            </div>
        </div>
        <button className="addCar">Add to Cart</button>
        </div>
    </div>
}

export default CarCard