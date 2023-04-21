import Header from "../Header"

const Layout = (props) => {
    return (<div style={{width:'100vw', height:'100vh'}}>
        <Header />
        {props.children}
    </div>)
}

export default Layout