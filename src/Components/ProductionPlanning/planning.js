import React,{useState,useEffect} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './planning.css';
import axios from 'axios';

const ProductionPlanning = () => {
    const [startDate, setStartDate] = useState(new Date());
    const [formData, setFormData] = useState([]);
    const [newEntry, setNewEntry] = useState({
      date: '', 
      timing: '',
      operatorName: '',
      machineNo: '',
      heatNo: '',
      customerName: '',
      partName: '',
      operationNo: '',
      cycleTime: '',
      targetQty: '',
      achievedQty: '',
      remarks: '',
    });

    useEffect(() => {
        if (startDate instanceof Date && !isNaN(startDate)) {
          setNewEntry((prevEntry) => ({
            ...prevEntry,
            date: startDate.toISOString().split('T')[0],
          }));
        }
      }, [startDate]);


      const handleInputChange = (e) => {
        const { name, value } = e.target;
        const selectedDate = name === 'date' && !value ? new Date() : value;
    
        setNewEntry((prevEntry) => ({ ...prevEntry, [name]: value }));
    
        if (name === 'date') {
          setStartDate(selectedDate);
        }
      };

      const handleFormSubmit = async () => {
        const isFormValid = Object.values(newEntry).every((value) => value !== '');
    
        if (isFormValid) {
          try {
            await axios.post('http://localhost:5001/production', newEntry); 
            setFormData([...formData, newEntry]);
            setNewEntry({
              date: '',
              timing: '',
              operatorName: '',
              machineNo: '',
              heatNo: '',
              customerName: '',
              partName: '',
              operationNo: '',
              cycleTime: '',
              targetQty: '',
              achievedQty: '',
              remarks: '',
            });
          } catch (error) {
            alert('Failed to submit data');
            console.error('Error:', error);
          }
        } else {
          alert('Please fill in all fields before submitting.');
        }
      };

    return(
        <div className='production-container'>
          <div className='inside-production-planning'>
            <h1 className='production-heading'>Daily Production Entry</h1>
            <div className='inside-production-planning-2'>
         <table style={{ width: '100%' }}>
             <thead>
                <tr>
                    <th style={{ width: 10 + 'em' }}>Date</th>
                    <th style={{ width: 20 + 'px' }}>Timing</th>
                    <th style={{ width: 8 + 'em' }}>Operator Name</th>
                    <th>Machine No</th>
                    <th>Heat No</th>
                    <th>Customer Name</th>
                    <th>Part Name</th>
                    <th>Operation No</th>
                    <th>Cycle Time</th>
                    <th>Target QTY</th>
                    <th>Achieved QTY</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <thead>
        <tr>
            <td><DatePicker selected={startDate || null} onChange={(date)=>{setStartDate(date); handleInputChange({target:{name:'date',value:date? date.toISOString().split('T')[0]: ''}});}} dateFormat='dd/MM/yyyy' showIcon  className='date-picker' name='date'/></td>
            <td name='timing' value={newEntry.timing} onChange={handleInputChange}><select className='select-option-time' name='timing' value={newEntry.timing} onChange={handleInputChange}>
                <option value='' disabled>Select Time</option>
                <option>8.00-9.00</option>
                <option>9.00-10.00</option>
                <option>10.00-11.00</option>
                <option>11.00-12.00</option>
                <option>12.00-13.00</option>
                <option>13.00-14.00</option>
                <option>14.00-15.00</option>
                <option>15.00-16.00</option>
                <option>16.00-17.00</option>
                <option>17.00-18.00</option>
                <option>18.00-19.00</option>
                <option>19.00-20.00</option>
                <option>20.00-21.00</option>
                <option>21.00-22.00</option>
                <option>22.00-23.00</option>
                <option>23.00-24.00</option>
            </select></td>
            <td><input type='text' className='operator-input' name='operatorName' value={newEntry.operatorName}  onChange={handleInputChange}/></td>
            <td>
            <select name='machineNo' value={newEntry.machineNo} onChange={handleInputChange} className='Machine-no-input'>
                <option value='' disabled>select</option>
                <option>Furance1</option>
                <option>Furance2</option>
                <option>Furance3</option>
                <option>LPDC</option>
                </select></td>
            <td><input type='text' className='Heat-no-input'  name='heatNo' value={newEntry.heatNo} onChange={handleInputChange}/></td>
            <td><input type='text' className='Customer-name-input' name='customerName' value={newEntry.customerName} onChange={handleInputChange}/></td>
            <td><input type='text' className='Part-input' name='partName' value={newEntry.partName} onChange={handleInputChange}/></td>
            <td><input type='text' className='Operation-input' name='operationNo' value={newEntry.operationNo} onChange={handleInputChange}/></td>
            <td><input type='text' className='Cycle-input' name='cycleTime' value={newEntry.cycleTime} onChange={handleInputChange}/></td>
            <td><input type='text' className='Target-input' name='targetQty' value={newEntry.targetQty} onChange={handleInputChange}/></td>
            <td><input type='text' className='Achived-input' name='achievedQty' value={newEntry.achievedQty} onChange={handleInputChange}/></td>
            <td><input type='text' className='operator-input' name='remarks' value={newEntry.remarks} onChange={handleInputChange}/></td>
        </tr>
    </thead>
        </table>
        <div className='button-container-planning'>
          <button className='raw-submit-button' onClick={handleFormSubmit}>Submit</button>
          <button className='raw-reset-button' onClick={()=>setNewEntry({date:'',timing:'',operatorName:'',machineNo:'',heatNo:'',customerName:'',partName:'',operationNo:'',cycleTime:'',targetQty:'',achievedQty:'',remarks:''})}>Reset</button>
          </div>
          </div>
          </div>

          <div className='inside-adding-production-planning'>
            <h1 className='production-heading'>Production Plan Summary</h1>
          <table style={{ width: '100%' }}>
             <thead>
                <tr>
                    <th style={{ width: 1 + 'em' }}>S.No</th>
                    <th style={{ width: 7 + 'em' }}>Date</th>
                    <th style={{ width: 20 + 'px' }}>Timing</th>
                    <th style={{ width: 8 + 'em' }}>Operator Name</th>
                    <th>Machine No</th>
                    <th>Heat No</th>
                    <th>Customer Name</th>
                    <th>Part Name</th>
                    <th>Operation No</th>
                    <th>Cycle Time</th>
                    <th>Target QTY</th>
                    <th>Achieved QTY</th>
                    <th>Remarks</th>
                </tr>
            </thead>
            <thead>
                {formData.map((entry,index) =>(
                 <tr key={index}>
                 <td>{index+1}</td>
                 <td>{entry.date}</td>
                 <td>{entry.timing}</td>
                 <td>{entry.operatorName}</td>
                 <td>{entry.machineNo}</td>
                 <td>{entry.heatNo}</td>
                 <td>{entry.customerName}</td>
                 <td>{entry.partName}</td>
                 <td>{entry.operationNo}</td>
                 <td>{entry.cycleTime}</td>
                 <td>{entry.targetQty}</td>
                 <td>{entry.achievedQty}</td>
                 <td>{entry.remarks}</td>
               </tr>
                ))}
                
            </thead>
            </table>
          </div>
        </div>
  )
    }

export default ProductionPlanning