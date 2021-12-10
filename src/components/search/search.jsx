import { React, useEffect, useState } from 'react';
import './search.css'
import MovieCard from '../movieCard'
// import Spinner from './spinner/spinner'
import PageLoader from "../loadScreen/loadScreen.component"
import { getConfig, getMoviesWithTitle } from '../../api/tmdb'
import { Link, useParams } from 'react-router-dom'
import { Pagination } from "@material-ui/lab"

const SearchBody = () => {

    const [movies, setMovies] = useState([])
    const [page, setPage] = useState(undefined)
    const [config, setConfig] = useState([])
    const [total_pages, setTotal_pages] = useState(1)

    const { title } = useParams();

    useEffect(() => {
        getConfig().then(response => setConfig(response));
        getMoviesWithTitle(title, page).then((res) => {
            setMovies(res)
            setTotal_pages(res.data.total_pages)
        });
    }, [title, page])

    const handlePageChange = (event, value) => {
        setPage(value)
    }


    return (
        <div>

            <div className='movieBody' >
                {
                    movies === undefined ? <h3>Check your internet connection and try again.</h3> :
                        movies.status === 200 ?
                            movies.data.results.length ?
                                movies.data.results.map(movie => (
                                    <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none' }}> <MovieCard imgURL={`${config.data.images.base_url}${config.data.images.poster_sizes[4]}${movie.poster_path}`} title={movie.title} details={movie.overview.slice(0, 400) + '...Read More'} key={movie.id} /></Link>
                                )) : <h3>No search results</h3> : <PageLoader />
                }
                {/* <p onClick={() => {setPage(page+1)}}>Load more movies</p> */}
            </div>
            {/* <div className="controls">
                <span onClick={() => { document.body.scrollTop = 0; setPage(page - 1) }}>Prev</span>
                <span>Page {page}</span>
                <span onClick={() => { ; setPage(page + 1); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }) }}>Next</span>
            </div> */}
            <Pagination count={total_pages} variant="outlined" color='primary' shape="rounded" onChange={handlePageChange} />
        </div>
    )










}

export default SearchBody;