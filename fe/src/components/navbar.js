import { Component } from "react";
import "./navbar.css"
import { Link } from "react-router-dom"; 
import { menuitems } from "./menu";
class Navbar extends Component{
    state={clicked:false};
    handleclick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <nav className="Navbaritems">
                <h1 className="navbar-log">Trippy</h1>
                <div className="menu-icons">
                    <i className={this.handleclicked ? "fas fa-times":"fas fa-bars"}></i>

                </div>
                <ul className="nav-menu">
                    
                    {menuitems.map((item,index)=>{
                        return(
                        <li key={index}>
                        <a href="/"> 
                   <i className={item.icon}></i>{item.title}
                   </a>
                    </li>
                        )
                    })}
                    
                </ul>
             </nav>
        )
    }
}export default Navbar