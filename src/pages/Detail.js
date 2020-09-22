import React from 'react'
import { useParams } from 'react-router-dom'
import NavMenu from '../components/NavMenu'

function Detail( props ) {

    const { pid } = useParams()
  
    return (
        <div>
            <NavMenu/> 
    <h1>welcome detail</h1>
    <h1>{pid}</h1> 
        </div>
    )
}

export default Detail

