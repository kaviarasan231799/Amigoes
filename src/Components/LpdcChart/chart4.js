import {Line} from 'react-chartjs-2';
import {Chart as chartJS,LineElement,CategoryScale,LinearScale,PointElement, Legend} from 'chart.js'
import { useNavigate } from 'react-router-dom';
import './chart4.css'


chartJS.register(
    LineElement,
    CategoryScale,LinearScale,PointElement,Legend
 )

function FurnaceChart3() {
    const navigate4 = useNavigate();
    const data1={
        labels:['H1','H2','H3','H4','H5','H6'],
        datasets:[
          {
            label:'Temprature',
            data:[600,300,200,530,400,800],
            borderColor:'blue',
            pointBorderColor:'acqa',
            fill:true,
            tension:0.4
        },
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
 ///chart-2
  const data2={
    labels:['8.30','9.30','10.30','11.30','12.30','1.30','2.30','3.30','4.30','5.30'],
    datasets:[
      {
        label:'Electricity',
        data:[600,300,120,100,400,500,700,800,300,500],
        borderColor:'orange',
        pointBorderColor:'acqa',
        fill:true,
        tension:0.4
    },
  ]
}

const options2 = {
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

const lpdcBackButton = () =>{
    navigate4(-1)
}



return(
    <div className='chart4-container'>
        <button className='back-button-chart' onClick={lpdcBackButton}>Back</button>
        <div className='chart-container-2'>
          <h1>LPDC</h1>
     <div className="chart4-inside-container-1">
      <h1 className='chart-head'>Temperature</h1>
       <Line
        data={data1}
        options = {options1}
       ></Line>
     </div>

     <div className="chart4-inside-container-2">
      <h1 className='chart-head'>Electricity</h1>
       <Line
        data={data2}
        options = {options2}
       ></Line>
     </div>
     </div>
    </div>
)
}

export default FurnaceChart3