import {NavLink} from 'react-router-dom'
import { FaEdit } from "react-icons/fa";
import './quality.css'

const PartMaster = () =>(
    <div className='quality-part-container'>
    <div className='quality-inside-part-contianer'> 
    <NavLink to="/createNew" className='nav-create'>
    <div className='button-quality-container'>
    <button className='create-button' >Create New</button>
    </div>
    </NavLink>
    <div className='quality-inside-part-main-contianer'>
     <div className='quality-table-master-container'>
     <table style={{width: '80em'}}>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Grade</th>
            <th>Entered By</th>
            <th>Approved By</th>
            <th>Action</th>
        </tr>
    </thead>
    <thead> 
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td>
                <div className='fa-button-container'>
                <button type='button' className='fa-con-button'><FaEdit className='fa-button'/></button>
                </div>
                </td>
        </tr>
    </thead>
     </table>
     </div>
    </div>
    </div>
    </div>
)

export default PartMaster