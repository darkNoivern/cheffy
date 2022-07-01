import React, { useState, useEffect } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Card from './Card'
import './style.css'
import Loading from './Loading'

const Index = () => {

    const [search, setSearch] = useState('chicken');
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);

    async function getData(search) {
        setLoading(true);
        let responseJsonData = await axios.get(
            `https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=79ad303f&app_key=a93887e0ac85f998e1dc3a6a94e4fd72`
        );
        console.log(responseJsonData.data.hits)
        setData(responseJsonData.data.hits);
        setLoading(false);
    }

    const getSearch = (event) => {
        setSearch(event.target.value);
    }

    useEffect(() => {
        getData(search);
    }, []);

    return (
        <>
            <Navbar />
            {
                loading === true ? <Loading /> :
                    <>
                        <div className="banner text-center flexy py-2 mb-4">Search a Dish</div>
                        <div className="inputset flexy mb-5">
                            <input
                                className="styleInput ms-4 me-2 ms-lg-5 ps-4 form-control"
                                type="text"
                                placeholder="Search Dishes . . . ."
                                value={search}
                                onChange={getSearch}
                            />
                            <button
                            onClick={()=>{getData(search)}} 
                            className="btn me-4 me-lg-5">
                            Search
                            </button>
                        </div>
                        <div className="row mx-0">
                                {
                                    data.map((recipe, index) => {
                                        return (
                                            <div className="col col-lg-6 col-12 mb-5 flexy">
                                                <Card data={recipe.recipe} />
                                            </div>
                                        )
                                    })
                                }
                            </div>
                    </>
            }
        </>
    )
}

export default Index
