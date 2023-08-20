import React from 'react'
import { reduxAction } from '../store/BookingMovieReducer/action'
import {useDispatch, useSelector} from "react-redux"
import cn from "classnames"
const Chair = ({ghe}) => {
  const dispatch=useDispatch()
  const {ChairBooking,ChairBooked}=useSelector((state)=>state.reduxReducer)
  return (
    <div className={cn('Chair',{booking:ChairBooking.find(chair=>chair.soGhe===ghe.soGhe)},{booked:ChairBooked.find(chair=>chair.soGhe===ghe.soGhe)})} onClick={()=>dispatch(reduxAction.booking(ghe))}>{ghe.soGhe}</div>
  )
}

export default Chair