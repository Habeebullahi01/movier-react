import { React, useEffect, useState } from 'react';
import { getMovie, getConfig } from '../api/tmdb';
// import {match } from 'react-router-dom'
import { useParams } from "react-router-dom";
import "./movie.css"

const Movie = () => {
    // console.log(match);
    const [data, setData] = useState({})
    const [configuration, setConfiguration] = useState([])

    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getConfig().then((response) => {
            console.log("Config");
            setConfiguration(response);
        })
        getMovie(id).then((res) => setData(res.data))
    }, [id])

    console.log(data.data);
    return (
        <div className="main">
            <h1>{data.title}</h1>
            {
                configuration.data === undefined ? <p>Loading Image...</p> : <img src={`${configuration.data.images.base_url}${configuration.data.images.backdrop_sizes[1]}${data.backdrop_path}`} alt="movie" />}
            <p>{data.overview}</p>
            {data.adult ? <p>Rated 18+</p> : <p>Cool for the family.</p>}
        </div>

    )
}

export default Movie;