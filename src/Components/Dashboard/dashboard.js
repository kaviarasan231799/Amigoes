import React,{useEffect, useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './dashboard.css';
import axios  from 'axios';

const Dashboard = () =>{
    const [startDate, setStartDate] = useState(null);
    const [startDate1, setStartDate1] = useState(null);
    const [data,setData] = useState([]);
    const [currentHour, setCurrentHour] = useState(new Date().getHours());

    useEffect(() =>{
        axios.get('http://localhost:5001/Dashboard')
        .then(response=>{
            setData(response.data);
        })
        .catch(error=>{
            console.error('Error fetching data:',error);
        });
    },[]);

    useEffect (()=>{
        const intervel = setInterval(()=>{
            setCurrentHour(new Date().getHours());
        }, 60000);
        return ()=>clearInterval(intervel);
    },[]);


    const filteredDataByHour = data.filter(entry => {
        const entryDate = new Date(entry.Date);
        const entryHour = entryDate.getHours();
        console.log(entryHour)
         
        const isSameDate = entryDate.toDateString() === new Date().toDateString();

        const [startHour, endHour] = entry.Timing.split('-').map(time => parseInt(time.split('.')[0]));
        const isWithinHours = currentHour >= startHour && currentHour < endHour;

        return isSameDate && isWithinHours;
    });

return(
    <div className='dashboard-contianer'>
      <div className='inside-dashboard-container'>
        <div className="input-dashboard-container">
        <input type="text" placeholder='Customer Name' className='dash-box-container'/>
        <input type='text' placeholder='Part-ID' className='dash-box-container'/>
        <input type="text" placeholder='Work Order' className='dash-box-container'/>
        <lable htmlFor='heat-no' className="heat-number-input">HeatNumber:</lable>
        <input type="text" placeholder='From' className='dash-box-container' id='heat-no'/>
        <input type="text" placeholder='To' className='dash-box-container'/>
        </div>
        <div className='dash-date-container'>
        <div className='date-from-to'>
        <label className='date-from' htmlFor='from'>Date From</label>
        <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} isClearable dateFormat='dd/MM/yyyy' placeholderText="DD/MM/YYYY" className='date'/>
        </div>
        <div className='date-to-container'>
        <label className='date-from' htmlFor='to'>Date To</label>
        <DatePicker selected={startDate1} onChange={(date) => setStartDate1(date)} isClearable dateFormat='dd/MM/yyyy' placeholderText="DD/MM/YYYY" className='date'/>
        </div>
        <div className='button-container-date'>
        <button type='button' className='dash-submit-button'>Submit</button>
        <button type='button' className='dash-reset-button'>Reset</button>
        </div>
        </div>
      </div>


 <div className='table-Dash-running-container'>
    <h1 className='head-running'>Running Status</h1>
<div className='table-container-running-dashboard'>
<table style={{width:'85em'}}>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Part</th>
            <th>Furance No</th>
            <th>Heat No</th>
            <th>Part Count</th>
            <th>Plan</th>
            <th>Actual</th>
            <th>Rejection</th>
            <th>Status</th>
        </tr>
    </thead>
    <tbody>
        {filteredDataByHour.map((entry,index)=>(
         <tr key={index}>
         <td>{index+1}</td>
         <td>{new Date(entry.Date).toLocaleDateString('en-GB')}</td>
         <td>{entry.CustomerName}</td>
         <td>{entry.PartName}</td>
         <td>{entry.MachineNo}</td>
         <td>{entry.HeatNo}</td>
         <td></td>
         <td>{entry.TargetQTY}</td>
         <td>{entry.AchievedQTY}</td>
         <td></td>
         <td>{entry.Remarks}</td>
     </tr>
        ))} 
    </tbody>
</table>
</div>
</div> 


<div className='table-Dash-container'>
<h1 className='head-running'>Summary Status</h1>
<div className='table-container-dashboard'>
<table style={{width:'85em'}}>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Customer</th>
            <th>Part</th>
            <th>Furance No</th>
            <th>Heat No</th>
            <th>Part Count</th>
            <th>Plan</th>
            <th>Actual</th>
            <th>Rejection</th>
            <th>Status</th>
        </tr>
    </thead>
    <thead>
        {data.map((entry,index)=>(
        <tr key={index}>
            <td>{index + 1}</td>
            <td>{new Date(entry.Date).toLocaleDateString('en-GB')}</td>
            <td>{entry.CustomerName}</td>
            <td>{entry.PartName}</td>
            <td>{entry.MachineNo}</td>
            <td>{entry.HeatNo}</td>
            <td></td>
            <td>{entry.TargetQTY}</td>
            <td>{entry.AchievedQTY}</td>
            <td></td>
            <td>{entry.Remarks}</td>
        </tr>
        ))}
    </thead>
</table>
</div>
</div>
    </div>
)
}

export default Dashboard