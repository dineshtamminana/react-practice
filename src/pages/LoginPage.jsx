import { useState } from "react";
import Header from "../components/header/Header";
import { useNavigate } from "react-router-dom";
import { p } from "motion/react-client";


function LoginPage() {

    const [userDetails, setuserDetails] = useState({
        userName : "",
        userPassword : ""
    });

    const navigate = useNavigate();

    function handleChange(event) {
        const {name, value} = event.target;
        setuserDetails( prev => ({...prev,[name]:value}) );
    }

    const [errorMsg, seterrorMsg] = useState("");

    function handleLogin(){
        if(userDetails.userName === "dinesh" && userDetails.userPassword === "Dinesh@123" ){
            navigate("/SearchPage", {replace : true, state : { loggedInUser : userDetails.userName }});
        }else{
            seterrorMsg("please correct username and password");
            setuserDetails({
                userName : "",
                userPassword : ""
            })
        }
    }

    return (
        <>
        <Header/>
        <input name="userName" value={userDetails.userName} onChange={handleChange} />
        <input name="userPassword" type="password" value={userDetails.userPassword} onChange={handleChange}/>
        <button onClick={handleLogin} >Login</button>
        { (errorMsg) || <p>{errorMsg}</p> } 
        </>
       
    );
}
export default LoginPage;



