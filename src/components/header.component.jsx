import React from 'react';
import { AppBar, Toolbar, Typography, TextField } from '@material-ui/core'
import './header.css'
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <AppBar position='sticky' color='primary' >
            <Toolbar variant='dense'>
                <Link to="/" style={{ textDecoration: 'none' }}> <Typography variant='h4' >Movier(R)</Typography> </Link>
                <TextField label='Search' variant='outlined' size='small'>
                    {/* <input type="text" placeholder='Search by title' aria-label="search" />
                    <button type='submit'>Submit</button> */}
                </TextField>
            </Toolbar>
        </AppBar >
    )
}

export default Header;