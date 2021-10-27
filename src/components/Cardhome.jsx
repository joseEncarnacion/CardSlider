import React from 'react'
// import './styles/cardhome.css'
import { Link } from 'react-router-dom'


const Cardhome = (props) =>{
    const {title, image, num ,link} =props
    
    return(
        <div className=" card cardhome ">
            <div className="imagecard">
                <img src={image} alt="pok" className="img-fluid" />
            </div>
            <div className="card-body">
                <div className="d-block numcardhome"> {num} </div>
                <p className="card-title cardHomeTitle">
                    {title}
                </p>
                
            </div>
            <div className="cardHomeFooter">
                <Link to={link} className="btn descripcion box-blue">Descriptions</Link>
                <Link  className="btn descripcion box">propiedad</Link>
            
            </div>
        </div>
    )
}

export default Cardhome