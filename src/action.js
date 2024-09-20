import {ADD,SUB} from './actionType.js'
export const addFunction=(payload)=>{
    return {type:ADD,payload:payload}

}
export const subFunction =(payload)=>{
    return {type:SUB,payload:payload}
}