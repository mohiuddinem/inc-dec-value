import React from 'react'

const Controller = ({controller,changeIncrease,changeDecrease}) => {

    const increaseHandler = (event) =>{
        let value = event.target.value
    
        if(!value){
            changeIncrease(0)
        }else{
            changeIncrease(parseInt(value))
        }
    }

    const decreaseHandler = (event) =>{
        let value = event.target.value
    
        if(!value){
            changeDecrease(0)
        }else{
            changeDecrease(parseInt(value))
        }
    }

    return(
        <div className="d-flex m-auto " style={{width:'500px'}}>
            <input 
                type="text"
                className='form-control d-inline'
                placeholder="Increase By"
                onChange={increaseHandler}
                value={controller.increaseBy} />
            <input 
                type="text"
                className='form-control d-inline'
                placeholder="decrease By"
                onChange={decreaseHandler}
                value={controller.decreaseBy} />

        </div>
    )
}



export default Controller
