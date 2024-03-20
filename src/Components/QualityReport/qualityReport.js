import './qualityReport.css'

const PartMaster = () =>(
    <div className='quality-part-container'>
    <div className='qualityReport-inside-part-contianer'> 
     <div className='quality-table-master-container'>
     <table style={{width:'90em'}}>
    <thead>
        <tr>
            <th>S.No</th>
            <th>Date</th>
            <th>Job Card No</th>
            <th>Customer Name</th>
            <th>Part Name</th>
            <th>Part No</th>
            <th>Review Qty</th>
            <th>Ok Qty</th>
            <th>Rejection Qty</th>
            <th>Quality Sign</th>
            <th>Grade</th>
            <th>Rejection Weight</th>
            <th>Remarks</th>
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
            <td></td>
            <td></td>
            <td></td>
            
        </tr>
    </thead>
     </table>
     </div>
    </div>
    </div>
)

export default PartMaster