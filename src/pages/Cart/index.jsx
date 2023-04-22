import { useNavigate } from "react-router-dom"

import Layout from "../../components/Layout"
import cars from '../../assets/Cars.json'

import './Cart.scss'

const Cart = () => {
    const navigate = useNavigate()

    const renderTable = cars.map((car, index) => (
        <tr key={index}>
            <td><img src={car.img} alt="car image"/></td>
            <td>{car.title}</td>
            <td>${car.price}</td>
            <td><input type="number" /></td>
            <td><button>delete</button></td>
        </tr>
    ))

    return <Layout>
    <div className="Cart">
        <h1>Car Reservation</h1>
        <table>
            <thead>
                <th>Thumbnail</th>
                <th>Vehicle</th>
                <th>Price Per Day</th>
                <th>Rental Days</th>
                <th>Operations</th>
            </thead>
            
                {renderTable}
            
        </table>
        <div className="checkoutBtn">
            <button onClick={() => {navigate('/checkout')}}>Check Out</button>
        </div>
    </div>
    </Layout> 
}

export default Cart