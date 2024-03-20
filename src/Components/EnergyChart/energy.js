import {Line} from 'react-chartjs-2';
import {Chart as chartJS,LineElement,CategoryScale,LinearScale,PointElement, Legend} from 'chart.js'
import { useNavigate } from 'react-router-dom';
import './energy.css'


chartJS.register(
    LineElement,
    CategoryScale,LinearScale,PointElement,Legend
 )

function FurnaceChart3() {
    const navigate3 = useNavigate();
    const data1={
        labels:['8.30','9.30','10.30','11.30','12.30','1.30','2.30','3.30','4.30','5.30'],
        datasets:[
          {
            label:'Energy',
            data:[300,400,500,630,400,300,200,500,600,650],
            borderColor:'blue',
            pointBorderColor:'acqa',
            fill:true,
            tension:0.4
        }
      ]
    }

  const options1 = {
    Plugins:{
        legend:true
  },
  scales:{
    y:{
        min:100,
        max:1000
    }
  }
  }

const handelBackButton = () =>{
    navigate3(-1)
}



return(
    <div className='energy-chart3-container'>
        <button className='back-button-chart' onClick={handelBackButton}>Back</button>
    <div className='energy-chart3-container-2'>
     <div className="energy-chart3-inside-container-1">
      <h1 className='chart-head'>Energy Consumption</h1>
       <Line
        data={data1}
        options = {options1}
       ></Line>
     </div>
     </div>
    </div>
)
}

export default FurnaceChart3