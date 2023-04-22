import { useNavigate } from 'react-router-dom'

import './Checkout.scss'

const CheckOut = () => {
    const nav = useNavigate()
    return <div className="Checkout">
        <h1>Check Out</h1>
        <div className="form">
            <div className="formDescription">
                <h2>Customer Details and Payment</h2>
                <span className="required">Please fill in your details. </span>
                <span >indicates required field</span>
            </div>
            <form>
                <div>
                    <label className="required">First Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="required">Last Name</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="required">Email</label>
                    <input type="email" />
                </div>
                <div>
                    <label className="required">Address Line 1</label>
                    <input type="text" />
                </div>
                <div>
                    <label>Address Line 2</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="required">City</label>
                    <input type="text" />
                </div>
                <div>
                    <label className="required">State</label>
                    <select name="state" id='state'>
                        <option value="nsw">NSW</option>
                        <option value="vic">VIC</option>
                        <option value="act">ACT</option>
                        <option value="wa">WA</option>
                        <option value="sa">SA</option>
                        <option value="tas">TAS</option>
                        <option value="nt">NT</option>
                    </select>
                </div>
                <div>
                    <label className="required">Post Code</label>
                    <input type="number" />
                </div>
                <div>
                    <label className="required">Payment Type</label>
                    <select name="payment" id="payment">
                        <option value="master">Master Card</option>
                        <option value="visa">VISA Card</option>
                        
                    </select>
                </div>
            </form>
            <div className="summary">
                You are required to pay $1800
            </div>
            <div className="action">
                <button onClick={()=>{nav('/')}}>Continue selecting</button>
                <button>Booking</button>
            </div>
        </div>
    </div>
}

export default CheckOut