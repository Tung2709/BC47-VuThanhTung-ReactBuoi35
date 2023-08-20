import React from 'react'
import data from "./Data.json"
import ChairList from './ChairList'
import Result from './Result'

const BookingMovie = () => {
	return (
		<div className='BookingMovie'>
			<div className="row">
				<div className="col-8">
					<div className='text-center'>
						<h1>ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h1>
						<h2 className='mt-3'>Màn hình</h2>
						<div className='d-flex'>
						<p style={{width:"50%",height:50,background:"linear-gradient(135deg, transparent 35px, orange 20px)"}}></p>
						<p style={{width:"50%",height:50,background:"linear-gradient(135deg, transparent 35px, orange 20px)",transform: "scaleX(-1)"}}></p>
						</div>
						
					</div>
					<ChairList data={data} />
				</div>
				<div className="col-4">
					<Result />
				</div>
			</div>
		</div>
	)
}

export default BookingMovie