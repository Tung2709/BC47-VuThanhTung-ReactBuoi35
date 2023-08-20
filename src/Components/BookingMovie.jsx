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
						<h2>Màn hình</h2>
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