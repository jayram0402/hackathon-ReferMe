import './Service.style.css'
// import ServiceIcon from '../../Assets/images/icon-calculator.svg'

const ServiceCard = ({header, subheader, icon, borderColor}) => {
    return (
        <div className="service-card" style={{ borderColor: borderColor }}>
            <header className='service-header'>{header}</header>
            <p className='service-subheader'>{subheader}</p>
            <img className="icon" src={icon} alt='service icon' ></img>
            
        </div>
    );
}

export default ServiceCard;