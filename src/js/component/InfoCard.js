import React, { useContext } from 'react'
import { Context } from '../store/appContext'

const InfoCard = () => {
    const {store, actions} = useContext(Context);
    
    return (
        <h1>Info Card: {store.info} </h1>
    )
}

export default InfoCard