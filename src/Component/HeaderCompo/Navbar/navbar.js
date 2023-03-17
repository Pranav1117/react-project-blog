import { Link } from "react-router-dom";

import './navbar.css'

const Navbar=()=>{
    return(
<div className="parent-div-nav">
<Link className="navbar" to='/'>Home</Link>
<Link className="navbar" to='/bollywood'>Bollywood</Link>
<Link className="navbar" to='/hollywood'>Hollywood</Link>
<Link className="navbar" to='/technology'>Technology</Link>
<Link className="navbar" to='/gaming'>Gaming</Link>
<Link className="navbar" to='/fitness'>Fitness</Link>
<hr/>

</div>
)
}

export default Navbar