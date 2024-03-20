import {Link, NavLink} from 'react-router-dom'
import './melting.css'

const Melting = () => (
    <div className='melting-contianer'>
        <div className='inside-melting'>
        <NavLink to="/chart1" className='furnace-1'>
           <div className='inside-furncae-1'>
              <h1 className='furncae-head'>Furnace 1</h1>
              <p className='furnace-para'>Capacity: 150</p>
              <p className='furnace-para'>Metal Temperature:</p>
              <p className='furnace-para'>Energy:</p>
              <p className='furnace-para'>Heat No:</p>
           </div>
           </NavLink>
         
         <NavLink to="/chart2" className='furnace-2'>
           <div className='inside-furncae-2'>
           <h1 className='furncae-head'>Furnace 2</h1>
              <p className='furnace-para'>Capacity: 300</p>
              <p className='furnace-para'>Metal Temperature:</p>
              <p className='furnace-para'>Energy:</p>
              <p className='furnace-para'>Heat No:</p>
           </div>
           </NavLink>
          
          <Link to="/chart3" className='furnace-3'>
           <div className='inside-furncae-3'>
           <h1 className='furncae-head'>Furnace 3</h1>
              <p className='furnace-para'>Capacity: 500</p>
              <p className='furnace-para'>Metal Temperature:</p>
              <p className='furnace-para'>Energy:</p>
              <p className='furnace-para'>Heat No:</p>
           </div>
           </Link>

          <Link to="/chart4" className='lpdc'>
           <div className='inside-lpdc'>
           <h1 className='furncae-head'>LPDC</h1>
              <p className='furnace-para'>Capacity: 500</p>
              <p className='furnace-para'>Metal Temperature:</p>
              <p className='furnace-para'>Energy:</p>
           </div>
           </Link>
        </div>

    <div className='table-melting-container'>
        <h1 className='head-summary'>Summary</h1>
         <table  style={{ width: '100%' }}>
             <thead>
                <tr>
                    <th>S.No</th>
                    <th style={{width: 7 + 'em'}}>Date</th>
                    <th style={{width:9 + 'em'}}>Heat Number</th>
                    <th>Furnace</th>
                    <th>Customer Name</th>
                    <th>Part Name</th>
                    <th>Grade</th>
                    <th>Shift</th>
                    <th>Metal Temp</th>
                    <th>Energy Consumption</th>
                </tr>
            </thead>
            <thead>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
        </tr>
    </thead>
        </table>
    </div>

    </div>
)

export default Melting