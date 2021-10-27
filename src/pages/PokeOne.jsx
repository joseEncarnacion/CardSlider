import React, {useState, useEffect} from "react";
import PokeId from "../components/CardId";
import { useParams } from "react-router-dom";
import axios from "axios";
import Cardhome from "../components/Cardhome";




const PokeOne = () => {

    const [card, setCard] = useState([]);

    const {id} = useParams()

    useEffect(() => {
        fetchData()
       
    }, []);

    const URL = `https://rickandmortyapi.com/api/character/${id}`
    const fetchData = async () =>{
        const res = await axios.get(URL)
        setCard(res.data)
        console.log(res.data)
    }

    return(
        <div className="container-fluid bgPokeOne">
            <div className="row row-cols-1 row-cols-md-4 g-4 d-flex justify-content-center m-4">
                <PokeId
                    title = {card.name}
                    image = { card.image}
                    status ={card.status}
                    gender = {card.gender}
                    specie = {card.species}
                    created = {card.created}
                   


                />

            </div>
        </div>
    )
}

export default PokeOne