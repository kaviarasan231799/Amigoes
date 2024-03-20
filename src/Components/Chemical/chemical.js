import React, {useEffect,useState} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';
import './chemical.css'


const Chemical = () => {
   const [startDate,setStartDate] = useState(null);
   const [startDate1,setStartDate1] = useState(null);
   const [data,setData] = useState([]);
   const [filteredData, setFilteredData] = useState([]);
   const [filteredHeatNumber, setFilteredHeatNumber] = useState('');
   const [filteredCustomer, setFilteredCustomer] = useState('');
   const [filteredGrade, setFilteredGrade] = useState('');
   const [filteredPart, setFilteredPart] = useState('');
   const [currentPage, setCurrentPage] = useState(1);
   const [itemsPerPage] = useState(10);

   useEffect (()=>{
      fetchData();
   },[]);

   const fetchData = async () =>{
         try{
            const response = await axios.get('http://localhost:5001/');
            console.log('API Response:',response.data)
            setData(response.data);
         }catch (error) {
            console.error('Error fetching data:',error)
         }
   };


   const handleFilter = () =>{
    if (
      !filteredHeatNumber &&
      !filteredCustomer &&
      !filteredGrade&&
      !filteredPart&&
      !startDate&&
      !startDate1
    ) {
      const today = new Date().toISOString().split('T')[0];
      const filtered = data.filter((item)=>item.date === today);
      setFilteredData(filtered);
      setCurrentPage(1)
    }
     else {
      const filtered = data.filter((item) =>{
               const isHeatNumberMatch = !filteredHeatNumber || (item.heat_number && item.heat_number.toLowerCase().includes(filteredHeatNumber.toLowerCase()));
               const isCustomerMatch = !filteredCustomer || (item.customer_name && item.customer_name.toLowerCase().includes(filteredCustomer.toLowerCase()));
               const isGradeMatch = !filteredGrade || item.grade.toLowerCase().includes(filteredGrade.toLowerCase());
               const isPartMatch = !filteredPart || (item.part_name && item.part_name.toLowerCase().includes(filteredPart.toLowerCase()));
               const itemDate = new Date(item.date) 
               const isDateRange = (!startDate || itemDate >= startDate) && (!startDate1 || itemDate <= startDate1);

               return isHeatNumberMatch && isCustomerMatch && isPartMatch && isGradeMatch && isDateRange;
      });

      setFilteredData(filtered);
      setCurrentPage(1)
   }
   };

   const handleResetFilters = () =>{
      setFilteredHeatNumber('');
      setFilteredCustomer('');
      setFilteredGrade('');
      setFilteredPart('');
      setFilteredData([])
   };

    
   //nextpage and previous page
   const getCurrentItem = () =>{
      const indexOfLastItem = currentPage * itemsPerPage;
      const indexofFirstItem = indexOfLastItem - itemsPerPage
      return filteredData.slice(indexofFirstItem,indexOfLastItem)
   };
   const paginate = (pagenumber) =>setCurrentPage(pagenumber);


return(
<div className='chemical-app-contianer'>
<div className="chemical-container">
 <div className="chemical-input-container">
    <input type="text" placeholder="Heat Number" className="box-container" value={filteredHeatNumber} onChange={(e) =>setFilteredHeatNumber(e.target.value)} onKeyDown={(e) => {if (e.key === 'Enter'){handleFilter();}}}/>
    <input type="text" placeholder="Customer" className="box-container" value={filteredCustomer} onChange={(e) =>setFilteredCustomer(e.target.value)} onKeyDown={(e) => {if (e.key === 'Enter'){handleFilter();}}}/>
    <input type="text" placeholder="Grade" className="box-container" value={filteredGrade} onChange={(e) => setFilteredGrade(e.target.value)} onKeyDown={(e) => {if (e.key === 'Enter'){handleFilter();}}}/>
    <input type="text" placeholder='Part' className='box-container' value={filteredPart} onChange={(e) => setFilteredPart(e.target.value)} onKeyDown={(e) => {if (e.key === 'Enter'){handleFilter();}}}/>
 </div>
 <div className="date-container">
   <div className='label-date-spectro'>
    <label htmlFor='from'>Date From</label>
    <DatePicker selected={startDate ? new Date(startDate) : null}  isClearable dateFormat='dd/MM/yyyy' placeholderText="DD/MM/YYYY" className='date'  onChange={(date) =>setStartDate(date)}/>
    </div>
    <div className='label-date-to-spectro'>
    <label htmlFor='to'>Date To</label>
    <DatePicker selected={startDate1 ? new Date(startDate1) : null} isClearable dateFormat='dd/MM/yyyy' placeholderText="DD/MM/YYYY" className='date'  onChange={(date) =>setStartDate1(date)}/>
    </div>
 <div className='spectro-button-container'>
    <button type="button" className='spectro-submit-button' onClick={handleFilter}>Submit</button>
    <button type="button" className='spectro-reset-button' onClick={handleResetFilters}>Reset</button>
    </div>
 </div>
</div>

<div className='table-container'>
    <div className='table-calculte'>
    </div>
<table style={{width: '100em'}}>
    <thead>
        <tr>
            <th style={{width: '12em'}}>Heat Number</th>
            <th style={{width: '20em'}}>Date</th>
            <th style={{width: '15em'}}>Item Name</th>
            <th>Furance Number</th>
            <th style={{width: 10 + 'em'}}>Customer Name</th>
            <th>Grade</th>
            <th>PartName</th>
            <th>C</th>
            <th>Si</th>
            <th>Mn</th>
            <th>P</th>
            <th>S</th>
            <th>Cr</th>
            <th>Mo</th>
            <th>Ni</th>
            <th>Al</th>
            <th>Co</th>
            <th>Cu</th>
            <th>Nb</th>
            <th>Ti</th>
            <th>V</th>
            <th>W</th>
            <th>Pb</th>
            <th>Sn</th>
            <th>Mg</th>
            <th>Zr</th>
            <th>Ce</th>
            <th>B</th>
            <th>Zn</th>
            <th>La</th>
            <th>Fe</th>
        </tr>
    </thead>
        <tbody>
          {getCurrentItem().map((item,index) =>(
            <tr key={`hc_${index}`}>
            <td style={{minWidth: '10em'}}>{item.heat_number}</td>
            <td style={{minWidth: '8em'}}>{new Date(item.date).toLocaleDateString('en-GB')}</td>
            <td>{item.item_name}</td>
            <td>{item.furnace_num}</td>
            <td>{item.customer_name}</td>
            <td style={{minWidth: '7em'}}>{item.grade}</td>
            <td>{item.part_name}</td>
            <td>{item.c}</td>
            <td>{item.Si}</td>
            <td>{item.Mn}</td>
            <td>{item.P}</td>
            <td>{item.S}</td>
            <td>{item.Cr}</td>
            <td>{item.Mo}</td>
            <td>{item.Ni}</td>
            <td>{item.Al}</td>
            <td>{item.Co}</td>
            <td>{item.Cu}</td>
            <td>{item.Nb}</td>
            <td>{item.Ti}</td>
            <td>{item.V}</td>
            <td>{item.W}</td>
            <td>{item.Pb}</td>
            <td>{item.Sn}</td>
            <td>{item.Mg}</td>
            <td>{item.Zr}</td>
            <td>{item.Ce}</td>
            <td>{item.B}</td>
            <td>{item.Zn}</td>
            <td>{item.La}</td>
            <td>{item.Fe}</td>
         </tr>
          )
          ) }
        </tbody>
</table>
<div className='pagination'>
 <button type='button' onClick={() =>paginate(currentPage-1)} disabled={currentPage ===1 } className='page-button'>Previous</button>
 {Array.from({length: Math.ceil(filteredData.length/itemsPerPage)}).map((_,index)=>(
   <button key={index} onClick={()=>paginate(index+1)} className={currentPage === index+1 ? 'active-page': 'in-active-page'}>{index+1}</button>
 ))}
 <button type='button' onClick={()=>paginate(currentPage+1)} disabled={currentPage === Math.ceil(filteredData.length / itemsPerPage)} className='page-button'>Next</button>
</div>
</div>
</div>

)
}

export default Chemical