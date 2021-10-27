import React from "react";
import axios from "axios";
import {useEffect, useState} from 'react'
import Cardhome from '../components/Cardhome'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import '../components/styles/homePage.css'

const Home = () => {

    const [character, setCharacter] = useState([]);

    useEffect(() => {
        getData()
        
    }, []);

    const URL = 'https://rickandmortyapi.com/api/character'
    const getData = async () =>{
        const res = await axios.get(URL)
        setCharacter(res.data.results)
    }

    return (
        <div className="bgHome">
            <div className="container py-5 ">
                <div className="row row-cols-1 row-cols-md-2 g-4 rowCard  ">
                {
                    
                    character.map(item =>(
                        <Cardhome 
                            title = {item.name}
                            num = {item.id}
                            key = {item.id}
                            image = {item.image}
                            link = {`/character/${item.id}`}

                        />
                        
                        ))
                    }

                </div>
            </div>
        </div>
    )
}

export default Home