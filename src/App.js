import Header from '../src/Components/Header/Headers';
import Dashboard from './Components/Dashboard/dashboard';
import ProductionPlanning from './Components/ProductionPlanning/planning';
import Melting from './Components/Melting/melting';
import Chemical from './Components/Chemical/chemical';
import RawMaterial from './Components/RawMaterial/raw';
import PartMaster from './Components/PartMaster/master';
import Footer from './Components/Footer/footer';
import FurnaceChart1 from './Components/FurnaceChart1/chart';
import FurnaceChart2 from './Components/FurnaceChart2/chart2';
import FurnaceChart3 from './Components/FurnaceChart3/chart3';
import LpdcChart from './Components/LpdcChart/chart4';
import EnergyChart from './Components/EnergyChart/energy'
import RawMaterialChart from './Components/RawMaterialChart/rawChart';
import QualityMaster from './Components/QualityMaster/quality';
import CreateNew from './Components/CreateNew/create';
import QualityReport from './Components/QualityReport/qualityReport'
import {BrowserRouter,Routes,Route,} from 'react-router-dom';
import './App.css';

const App = () => (
   <BrowserRouter>
   <div>
      <Header/>
      <div className='sub-app-contianer'>
      <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/planning" element={<ProductionPlanning/>}/>
      <Route path='/melting' element={<Melting/>}/>
      <Route path="/chemical" element={<Chemical/>}/>
      <Route path='/raw' element={<RawMaterial/>}/>
      <Route path="/partMaster" element={<PartMaster/>}/>
      <Route path='/quality' element={<QualityMaster/>}/>
      <Route path='/chart1' element={<FurnaceChart1/>}/>
      <Route path="/chart2" element={<FurnaceChart2/>}/>
      <Route path='/chart3' element={<FurnaceChart3/>}/>
      <Route path="/chart4" element={<LpdcChart/>}/>
      <Route path="/energy" element={<EnergyChart/>}/>
      <Route path="/raw-pie-chart" element={<RawMaterialChart/>}/>
      <Route path='/createNew' element={<CreateNew/>}/>
      <Route path='/qualityReport' element={<QualityReport/>}/>
      </Routes>
      </div>
      <Footer/>
   </div>
   </BrowserRouter>
)


export default App;
