import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { reduxAction } from '../store/BookingMovieReducer/action'

const Result = () => {
  const {ChairBooking}=useSelector((state)=>state.reduxReducer)
  const dispatch=useDispatch()
  return (
	<div className='Result'>
    <h1 className='text-center'>DANH SÁCH GHẾ BẠN CHỌN</h1>
    <div>
      <div className="d-flex gap-3 mt-1">
        <div className='gheNgoi'></div>
        <p>Ghế đã đặt</p>
      </div>
      <div className="d-flex gap-3 mt-1"> 
        <div className='gheNgoi'></div>
        <p>Ghế đang chọn</p>
      </div>
      <div className="d-flex gap-3 mt-1">
        <div className='gheNgoi'></div>
        <p>Ghế chưa đặt</p>
      </div>
    </div>
    <table className='table mt-3 text-white'>
      <thead>
        <tr>
          <th>Số ghế</th>
          <th>Giá</th>
          <th>Hủy</th>
        </tr>
      </thead>
      <tbody>
      
        {ChairBooking.map(ghe=>
        <tr className='chairList' style={{color:"orange"}} key={ghe.soGhe}>
          <td className='border border-white'>{ghe.soGhe}</td>
          <td className='border border-white'>{ghe.gia}</td>
          <td className='text-danger font-bold fs-4 border border-white' style={{cursor:"pointer"}} onClick={()=>dispatch(reduxAction.booking(ghe))}>X</td>
        </tr>
        )}
        <tr>
          <td className='border border-white '>Tổng tiền</td>
          <td className='border border-white' style={{color:"orange"}}>{ChairBooking.reduce((total,chair)=>{return(total += chair.gia)},0)}</td>
          <td className='border border-white'><button className='btnThanhToan rounded bg-success' onClick={()=>{dispatch(reduxAction.booked(ChairBooking))}}>Thanh toán</button></td>
        </tr>
      </tbody>
    </table>

  </div>
  )
}

export default Result