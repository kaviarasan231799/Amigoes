import Dynologo from '../../images/DynoLogo.png'
import './footer.css'

const Footer = () => (
    <div className='footer-contianer'>
        <h1 className='footer-head'>Powered by</h1>
        <img src={Dynologo} alt="dyno-logo" className='dyno-logo'/>
        <h1 className='footer-head'>Dyna4Cast Technologies Pvt Ltd.</h1>
    </div>
)

export default Footer