import { DIVISION } from "../action/Customer.action"

const initialState={
    division:[]
}

const CustomerReducer=(state=initialState,action:any)=>{
    switch(action.type){
        case DIVISION:
            return {
                ...state,
                divison: action.data,
            }
    }
    return state
}

export default CustomerReducer