import {ADD,SUB} from './actionType'
export const addFunction=(payload)=>{
    return {type:ADD,payload:payload}

}
export const subFunction =(payload)=>{
    return {type:SUB,payload:payload}
}