import {ADD,SUB} from '../actionType.js'
export const reducer=(state,{type})=>{
    switch(type){
        case ADD:
            return {...state,counter:state.counter+1}
        case SUB:
            return {...state,counter:state.counter-1}
        default:
            return state
    }
}