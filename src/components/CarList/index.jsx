import { useState } from "react"

import CarCard from "./CarCard"
import carsdata from '../../assets/Cars.json'

import './CarList.scss'

const CarList = () => {
    const [cars, setCars] = useState(carsdata)

    const renderCars = cars.map((car, index) => (
        <CarCard key={index}
        img={car.img}
        title={car.title}
        mileage={car.mileage}
        seats={car.seats}
        price={car.price}
        availability={car.availability}
        description={car.description}
        />
    ))
    return <div className="CarList">
        <div className="content">
        {renderCars}
        </div>
    </div>
}

export default CarList