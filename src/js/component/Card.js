import React, {useContext} from 'react'
import { Context } from '../store/appContext'
import { useParams } from 'react-router-dom'
import InfoCard from './InfoCard'

const Card = () => {
 const {store, actions} = useContext(Context);
  return (
    <div>
        <h1>Card: {store.info} </h1>
        {/* <h3><InfoCard info = {props.info} /></h3> */}
    </div>
  )
}

export default Card