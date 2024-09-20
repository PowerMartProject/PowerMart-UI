import {legacy_createStore} from "redux"
import {reducer} from './reducer.js'

const initialState={counter:1,
    todo:[]
}
export const store=legacy_createStore(reducer,initialState)