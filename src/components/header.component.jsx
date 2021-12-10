import { React, useState } from 'react';
import { AppBar, Toolbar, Typography, TextField, Button } from '@material-ui/core'
import './header.css'
import { Link } from "react-router-dom";
import { getMoviesWithTitle } from '../api/tmdb';

const Header = () => {

    const [title, setTitle] = useState("")

    const handleSearch = (title) => {
        getMoviesWithTitle(title)
    }

    return (
        <AppBar position='sticky' color='primary' >
            <Toolbar variant='dense'>
                <Link to="/" style={{ textDecoration: 'none' }}> <Typography variant='h4' color='white' >Movier(R)</Typography> </Link>
                <TextField label='Search' variant='outlined' size='small' defaultValue="" onChange={(event) => { setTitle(event.target.value) }} />

                <Link to={`/search/${title}`} style={{ textDecoration: "none" }} > <Button variant="outlined" onClick={() => { handleSearch(title) }} >Go</Button></Link>
            </Toolbar>
        </AppBar >
    )
}

export default Header;