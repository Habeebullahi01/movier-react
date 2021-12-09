import React from 'react';

const MovieCard = (props) => {
    return (
        <div className='card' >
            <div className='image-holder'>
                <img src={props.imgURL} alt="cover" />
            </div>
            <div className="title">
                <h3>{props.title}</h3><span>{props.genre}</span>
            </div>
            <div className='card-overlay'>
                <p>{props.details}</p>
                <p>{props.genre}</p>
            </div>
        </div>
    )
}

export default MovieCard;