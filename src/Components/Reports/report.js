import './report.css'

const Reports = () =>(
    <div className='report-contianer'>
    <div className='inside-report-container'>
      <div className="input-report-container">
      <input type="text" placeholder='Customer Name' className='report-box-container'/>
      <input type='text' placeholder='Part' className='report-box-container'/>
      <input type="text" placeholder='Work Order' className='report-box-container'/>
      </div>
      <div className='report-date-container'>
      <label className='date-from-report' htmlFor='from'>Date From</label>
      <input type="date" className='report-date' id='from'/>
      <label className='date-from-to-report' htmlFor='to'>Date To</label>
      <input type="date" className='report-date' id='to'/>
      <div className='report-button-container'>
      <button type='button' className='report-submit-button'>Submit</button>
      <button type='button' className='report-reset-button'>Reset</button>
      </div>
      </div>
    </div>
    </div>
)

export default Reports