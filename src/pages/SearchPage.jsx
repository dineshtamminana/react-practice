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

