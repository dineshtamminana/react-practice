
import { button, hr, p } from "motion/react-client";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


function Booking() {
    
    const [route, setRoute] = useState({ fromStation: "", toStation: "" });
    const [isSearching, setisSearching] = useState(false);
    const [isclear, setClear] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();

    console.log( "location", location );
    console.log( "navigation", navigate );

    function inputHandle(event){
        const { name, value } = event.target;
        setRoute( route => ({
            ...route,[name]:value
        }) );
    }

    function searchHandle(){
        setisSearching(() => (true));
    }

    function clearInputs(){
        setRoute({fromStation:"",toStation:""});
        setisSearching(false);
    }




    return (
        <>
            <input type="text" name="fromStation" onChange={inputHandle} value={route.fromStation} />
            <br />
            <input type="text" name="toStation" onChange={inputHandle} value={route.toStation} />
            <br />
            {(((route.fromStation !== "" && route.toStation !== "")) && (isSearching !== true)) ? <button type="button" onClick={searchHandle} name="isSearching" value={isSearching}  >SEARCH</button> : (route.fromStation === "" || route.toStation === "") ? <p> please enter the from and to stations </p> : <p>Searching trains .... from {route.fromStation} to {route.toStation} </p>}
            <br />
            {(route.fromStation !== "" || route.toStation !== "") ? <button name="isClear" onClick={clearInputs} value={isclear} > clear </button> : <hr />}

        </>
    )
}

export default Booking;