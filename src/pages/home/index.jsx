import CarList from "../../components/CarList"
import Layout from "../../components/Layout"

import './home.scss'

const Home = () => {
    return (<Layout>
            <div className="Home">
                <h1>Select cars</h1>
                <CarList />
            </div>
        </Layout>)
}

export default Home