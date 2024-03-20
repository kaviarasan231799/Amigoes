import React from 'react';
import { FaRegUser } from "react-icons/fa";
import image from '../../images/amigoe.png'
import {NavLink} from 'react-router-dom'
import './Header.css'

const Headers = () => (  
<div className="header-container">
    <div className="him-container">
      <img src={image} alt="amigo-logo" className="amigoes-logo"/>
    </div>
    <nav className="home-container">
             <ul className="order-list-container" >

             <NavLink to="/" className="chemicalanalysis"><li className="list-container"><p className="analysis">Dashboard</p></li></NavLink>

             <NavLink to="/planning" className="chemicalanalysis"><li className="list-container"> <p className="analysis">Production Planning</p></li></NavLink> 
              
             <NavLink to="/melting" className="chemicalanalysis"><li className="list-container"> <p className="analysis">Melting</p></li></NavLink>

             <NavLink to="/chemical" className="chemicalanalysis"><li className="list-container"><p className="analysis">Spectro</p></li></NavLink>
                   
             <NavLink to="/raw" className="chemicalanalysis"><li className="list-container"><p className="analysis">Raw Material Consumption</p></li></NavLink>
             
             <NavLink to="/partMaster" className="chemicalanalysis"><li className="list-container"><p className="analysis">Part Master</p></li></NavLink>
           
             <NavLink to="/quality" className="chemicalanalysis"><li className="list-container"><p className="analysis">Quality Master</p></li></NavLink>
             
             <NavLink to="/qualityReport" className="chemicalanalysis"><li className="list-container"><p className="analysis">Quality Report</p></li></NavLink>

             </ul>
            </nav>
  <div className="user-container"><FaRegUser /></div>
</div>
) 

export default Headers