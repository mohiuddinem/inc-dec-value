import React from 'react'

const Data = ({value}) => <h1> { value < 9 && value >= 0 ? `0${ value }` : value } </h1>

export default Data



