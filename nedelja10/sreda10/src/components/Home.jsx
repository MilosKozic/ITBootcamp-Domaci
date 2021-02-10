import { Redirect } from "react-router"

const Home = ({ loggedin }) => {
    return (
        <>
            <h2>Welcome to home page</h2>
            {loggedin ? <Redirect to='/quotes' /> : < Redirect to='/login' />}
        </>
    )
}

export default Home