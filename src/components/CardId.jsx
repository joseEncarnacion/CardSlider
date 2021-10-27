import React from "react";
import '../components/styles/pokeId.css'
import TimeAgo from 'timeago-react'


const PokeId = (props) => {

    const {title, image, status, specie, gender, created} = props

    return (
        <div className="cardContainer p-0">
            <div className="cardheader"></div>
            <div className="cardimage">
                <img src={image} alt="pokeOne" className='img-card' />
            </div>

            <div className="card-body ">
                <div className="cardbody">
                    <p className="title-card-body">{title}</p>
                    <p className="inf-card-body">  </p>
                </div>
                <p className="inf-card-body  d-block">{ < TimeAgo datetime= {created} /> }</p>
            </div>

            <hr />

            <div className="cardfooter">
                <div className='footer-item text-center'>
                    <p className="sm-bord-text ">Status</p>
                    <p className="sm-bord-inf">{status}</p>
                </div>
                <div className='footer-item text-center'>
                    <p className="sm-bord-text ">Species</p>
                    <p className="sm-bord-inf">{specie}</p>
                </div>
                <div className='footer-item text-center'>
                    <p className="sm-bord-text">Gender</p>
                    <p className="sm-bord-inf">{gender}</p>
                </div>
            </div>
        </div>
    )
}

export default PokeId