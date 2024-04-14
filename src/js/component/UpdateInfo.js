import React, {useContext} from 'react'
import { Context } from '../store/appContext'


const UpdateInfo = () => {
    const { store, actions } = useContext(Context);
  return (
    <div>
      <h5>Update Info Component</h5>
      <button className='btn btn-success' onClick={()=>{
        actions.actualizar()
      }}>Update info</button>
    </div>
  )
}

export default UpdateInfo