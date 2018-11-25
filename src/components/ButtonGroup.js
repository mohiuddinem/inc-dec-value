import React, { Component } from 'react'

const ButtonGroup = ({controller, changeValue}) => {

    return (
        <div className='btn-group my-3' role='group'>
            <button 
                onClick = { () => changeValue(1)}
                className='btn btn-secondary' 
                type='button'> +1 </button>
            <button 
            onClick = { () => changeValue(-1)}
            className='btn btn-secondary'
             type='button'> -1 </button>
            <button 
                onClick = { () => changeValue(controller.increaseBy)}
                className='btn btn-secondary' 
                type='button'> Increase By {controller.increaseBy} </button>
            <button 
            onClick = { () => changeValue(controller.decreaseBy * -1)}
                className='btn btn-secondary' 
                type='button'> decrease By {controller.decreaseBy} </button>
        </div>
    )
}

export default ButtonGroup
