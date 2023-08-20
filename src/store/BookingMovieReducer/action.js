import { HANDLE_BOOKED_CHAIR, HANDLE_BOOKING_CHAIR} from "./actionType"


export const reduxAction = {
	booking:(payload)=>{
		return{
			type:HANDLE_BOOKING_CHAIR,
			payload,
		}
	},
	booked:(payload)=>{
		return{
			type:HANDLE_BOOKED_CHAIR,
			payload,
		}
	}
}