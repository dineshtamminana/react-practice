import { useState } from "react";
import Header from "../components/header/Header";

function LoginPage() {

    let [userName, setuserName] = useState("");

    function handleChange(event) {
        userName = event.target.value;
        console.log(userName);
    }

    return (
        <>
        <Header/>
        <input onChange={handleChange} />
        <input onChange={handleChange}/>
        </>
       
    );
}
export default LoginPage;