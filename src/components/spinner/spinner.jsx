import React from 'react';
import './spinner.css'
import spin from './spin.gif'
const spinner = () => {
    // return(<div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>)
    return (
        <div className="spinner"><img src={spin} alt="" /></div>)
}

export default spinner;