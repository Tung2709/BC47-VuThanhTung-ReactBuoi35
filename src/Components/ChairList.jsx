import React from 'react'
import Chair from './Chair'

const ChairList = ({data}) => {
  return (
	<div className='chairList'>
		{data.map(hangGhe=>{
			return(
				<div key={hangGhe.hang} className='d-flex justify-content-between mt-4'>
				<p style={{width:30,height:30,textAlign:"center",color:"yellow"}}>{hangGhe.hang}</p>
				{
					hangGhe.danhSachGhe.map(ghe=>
						<Chair key={ghe.soGhe} ghe={ghe}/>
						
					
					)
				}
				</div>
			)
		}

		)}
	</div>
  )
}

export default ChairList