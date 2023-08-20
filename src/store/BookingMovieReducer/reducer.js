import { HANDLE_BOOKED_CHAIR, HANDLE_BOOKING_CHAIR } from "./actionType"

const initalState={
	ChairBooking:[],
	ChairBooked:[],
}

export const reduxReducer = (state=initalState, action)=>{
	switch(action.type){
		case HANDLE_BOOKING_CHAIR:{
			const index=state.ChairBooking.findIndex(ghe=>ghe.soGhe===action.payload.soGhe)
			if(index !==-1){
				state.ChairBooking.splice(index,1)
			}else{
				state.ChairBooking.push(action.payload)
			}
			return{...state}
		}
		case HANDLE_BOOKED_CHAIR:{
			
				state.ChairBooked=[...state.ChairBooked,...action.payload]
				state.ChairBooking=[]
			return{...state}
		}
		default:
		return state
	}
}