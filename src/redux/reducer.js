import {ADD,SUB} from '../actionType'
export const reducer=(state,{type,payload})=>{
    switch(type){
        case ADD:
            return {...state,counter:state.counter+1}
        case SUB:
            return {...state,counter:state.counter-1}
        default:
            return state
    }
}