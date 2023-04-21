import CarList from "../../components/CarList"
import Layout from "../../components/Layout"


const Home = () => {
    return (<Layout>
            <div className="HomeWrapper">
                <CarList />
            </div>
        </Layout>)
}

export default Home