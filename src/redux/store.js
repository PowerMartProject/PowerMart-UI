import {legacy_createStore,createStore} from "redux"
import {reducer} from './reducer'

const initialState={counter:1,
    todo:[]
}
export const store=legacy_createStore(reducer,initialState)