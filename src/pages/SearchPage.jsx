import Header from "../components/header/Header";
import Booking from "../components/booking/Booking";
import { useLocation } from "react-router-dom";


function SearchPage() {

    const location = useLocation();
    const { loggedInUser } = location.state || { loggedInUser: "Guest" }

    return (
        <>
            <Header />
            <h1>Hello This is Search Page ! welcome {loggedInUser}</h1>
            <p>Book tickets</p>
            <Booking />
        </>
    )
}
export default SearchPage;

// Task 1: Pass loggedInUser as state when navigating to
// /train-search from LoginForm
// navigate('/train-search', { state: { loggedInUser: userName } })
// Task 2: In TrainSearch, use useLocation to read loggedInUser
// const { loggedInUser } = location.state || { loggedInUser: "Guest" }
// Task 3: Display "Welcome, {loggedInUser}!" in TrainSearch
// Task 4: Add Logout button in TrainSearch
// navigate('/', { replace: true })
// Task 5: Use useLocation in Header/Navbar to
// BOLD the active nav link