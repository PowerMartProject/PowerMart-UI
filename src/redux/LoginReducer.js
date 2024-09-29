import { FORGOT_PASSWORD } from "./LoginActionTypes.js";
const initialState={
    forgotPassword: "" // Ensure this matches your reducer's initial state
  }
export const loginReducer=(state=initialState,action)=>
{
    switch(action.type){
        
            case FORGOT_PASSWORD:
                return { ...state, forgotPassword: action.payload };
            default:
                return state;
        
        }
    }
