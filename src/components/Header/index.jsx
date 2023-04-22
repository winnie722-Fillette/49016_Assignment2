import { useNavigate } from 'react-router-dom'


import './Header.scss'

const Header = () => {
    const navigate = useNavigate()

    return <div className="Header">
        <div className="log">Car Rent</div>
        <div className="title">Car Rent Center</div>
        <div className="cart" onClick={() => {navigate('/cart')}}>
            Cart
        </div>
    </div>
}

export default Header