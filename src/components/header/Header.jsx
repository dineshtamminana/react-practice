import './Header.css';
import { Link } from 'react-router-dom';
function Header(){
    return(
    <>
        <Link className='links' to={"/"} >Home</Link>
        <Link className='links' to={"/login"}>Login</Link>
        <Link className='links' to={"/searchpage"}>Search Page</Link>     
        {/* use arrays  */}
    </>
     
    )
}

export default Header;