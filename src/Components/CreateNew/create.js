import React,{useState} from 'react';
import { useNavigate} from 'react-router-dom'
import { IoMdAdd } from "react-icons/io";
import { TiMinus } from "react-icons/ti";
import './create.css'


const PartMaster = () => {
    const navigate = useNavigate();
    const [showChemicalButtons, setShowChemicalButtons] = useState(true);

  const handleToggleChemicalButtons = () => {
    setShowChemicalButtons(!showChemicalButtons);
  };
  
  const handleHideChemicalButtons = () => {
    setShowChemicalButtons(false);
  };

    const handleBackButton = () =>{
        navigate(-1)
      }

   return(   
    <div className='create-container'>
        <button onClick={handleBackButton} className='back-button-chart'>Back</button>
    <div className='inside-create-contianer'> 
     <div className='create-input-container'>
        <input className='create-customer' placeholder='Customers'/>
        <input placeholder='Grade' className='create-customer'/>
        <input placeholder='Entered By' className='create-customer'/>
     </div>

     <div className='create-chemical-container'>
        <div className='inside-create-chemicals'>
       <h1 className='enter-heading'>Chemical Composition</h1>
       {showChemicalButtons ? (
              <button type="button" className='minus-button' onClick={handleHideChemicalButtons}>
                <TiMinus />
              </button>
            ) : (
              <button type="button" className='plus-button' onClick={handleToggleChemicalButtons}>
                <IoMdAdd />
              </button>
            )}
          </div>
          {showChemicalButtons && (
 <div className='inside-chemicals-buttons'>
  <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>C:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Si:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Mn:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>P:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>S:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>
 
    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Cr:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>
   
    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Mo:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Ni:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Al:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Co:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Cu:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>
    
    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Nb:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Ti:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>V:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>W:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Pb:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Sn:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Mg:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>As:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Zr:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Ce:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>B:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Zn:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>La:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>

    <div className='c-inside'>
    <div className='min-max'> 
    <p className='min-max-para'>Min</p>
    <p className='min-max-para'>Max</p>
    </div>
    <div className='c-chemical'>
      <p>Fe:</p>
      <input type='text' className='input-chemical'/>
      <input type='text' className='input-chemical'/>
    </div>
    </div>



  <div className='create-button-container'>
    <button className='create-submit-button'>Submit</button>
    <button className='create-reset-button'>Reset</button>
  </div>
  </div>
          )}
     </div>
    </div>
    </div>
   )
   }

export default PartMaster