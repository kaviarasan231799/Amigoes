import React,{useState} from 'react'
import './raw.css'

const RawMaterial = () =>{
    const [showIngot,setShowIngot] = useState(false);
    const [showAddition,setShowAddition] = useState(false);
    const [showFinal,setShowFinal] = useState(false);

    const handleChargeButton =()=>{
      setShowIngot(!showIngot)
      setShowAddition(false);
      setShowFinal(false);
    }

    const handleAdditionButton = () =>{
      setShowAddition(!showAddition)
      setShowIngot(false);
      setShowFinal(false);
    }

    const handleFinalButton = () =>{
      setShowFinal(!showFinal)
      setShowAddition(false)
      setShowIngot(false)
    }

 return(
    <div className='raw-contianer'>
      <div className="heat-furnace-container">
        <div className='raw-table-container'>
          <table style={{width:'25em'}}>
            <thead>
              <tr>
                <th>MachineNo</th>
                <th>PartName</th>
                <th>HeatNo</th>
              </tr>
            </thead>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
            <thead>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </thead>
          </table>
        </div>
        <div className='main-raw-inside-container'>
          <div className='heatandfurnace'> 
          <div className='heat-names-input-1'>
            <label className="heat-name-label">Customer Name</label>
            <input type="text" className='raw-box-container'/>
            <label className="heat-name-label">Part Name</label>
            <input type="text" className='raw-box-container'/>
            <label className="heat-name-label">Grade</label>
            <input type="text" className='raw-box-container'/>
            </div>

          <div className='heat-names-input-2'>
            <label className="heat-furnace-name-label">Furnace No</label>
            <input type="text" className='raw-furnace-box-container'/>
            <lable className="heat-no-name-label">Heat No</lable>
            <input type="text" className='raw-heat-box-container'/>
            </div>
          </div>
          <div className='input-chemical-composition-container'>
          <div className='input-button-container'>
           <button type='button' className='inside-button-input' onClick={handleChargeButton}>Charging</button>
           <button type='button' className='inside-button-input' onClick={handleAdditionButton}>Addition</button>
           <button type='button' className='inside-button-input' onClick={handleFinalButton}>Final Dispatch</button>
          </div>
        {showIngot &&(
          <div className='ingot-container'>
          <div className='raw-row-box-ingot'>
          <label htmlFor='a' className='ingot-label-head'>INGOT A:</label>
          <input type='text' id='a' placeholder='KGS' className='ingot-input-container'/>
          </div>
          <div className='raw-row-box-ingot'>
          <label htmlFor='b' className='ingot-label-head'>INGOT B:</label>
          <input type='text' id='b' placeholder='KGS' className='ingot-input-container'/>
          </div>
          <div className='raw-row-box-ingot'>
          <label htmlFor='c' className='ingot-label-head'>INGOT C:</label>
          <input type='text' id='c' placeholder='KGS' className='ingot-input-container'/>
          </div>
          <div className='raw-row-box-ingot'>
          <label htmlFor='d' className='ingot-label-head'>INGOT D:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input-container'/>
          </div>
        </div>
        )}
         {showAddition && (
          <div className='chmical-addition-container'>
          <div className='addition-container'>
          <div className='raw-row-box'>
          <label htmlFor='a' className='chemical-names-label'>C:</label>
          <input type='text' id='a' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='b' className='chemical-names-label'>Si:</label>
          <input type='text' id='b' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='c' className='chemical-names-label'>Mn:</label>
          <input type='text' id='c' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>P:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Nb:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Cr:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Mo:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Ni:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Al:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Co:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>W:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>S:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Ti:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Pb:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Cu:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>La:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Sn:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Mg:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>As:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Zr:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Ce:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>B:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Zn:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>V:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
          <div className='raw-row-box'>
          <label htmlFor='d' className='chemical-names-label'>Fe:</label>
          <input type='text' id='d' placeholder='KGS' className='ingot-input'/>
          </div>
        </div>
        </div>
         )}

        {showFinal && (
          <div className='final-output-container'>
          <div className='inside-output-container'>
            <input type='text' placeholder='Total Weight' className='input-box-raw-total'/>
            <input type='text' placeholder='Total Count' className='input-box-raw-total'/>
          </div>
         </div>
        )}
         
         
          <div className='button-container'>
          <button className='raw-submit-button'>Submit</button>
          <button className='raw-reset-button'>Reset</button>
          </div>
          </div>
          </div>
      </div>
    </div>
)
 }

export default RawMaterial