import { createReducer, on } from "@ngrx/store";
import { ComicState } from "./Comic.State";
import { addcomicsuccess, deletecomicsuccess, getcomicsuccess, loadcomicfail, loadcomicsuccess, openpopup, updatecomicsuccess } from "./Comic.Action";

const _ComicReducer = createReducer(ComicState,
    on(loadcomicsuccess, (state, action) => {
        return {
            ...state,
            list: [...action.list],
            errormessage: ''
        }
    }),
    on(getcomicsuccess, (state, action) => {
        return {
            ...state,
            comicobj: action.obj,
            errormessage: ''
        }
    }),
    on(loadcomicfail, (state, action) => {
        return {
            ...state,
            list: [],
            errormessage: action.errormessage
        }
    }),
    on(addcomicsuccess, (state, action) => {
        const _maxid = Math.max(...state.list.map(o => o.id));
        const _newdata = { ...action.inputdata };
        _newdata.id = _maxid + 1;
        return {
            ...state,
            list: [...state.list, _newdata],
            errormessage: ''
        }
    }),
    on(updatecomicsuccess, (state, action) => {
        const _newdata = state.list.map(o => {
            return o.id === action.inputdata.id ? action.inputdata : o
        })
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(deletecomicsuccess, (state, action) => {
        const _newdata = state.list.filter(o=>o.id!==action.code);
        return {
            ...state,
            list: _newdata,
            errormessage: ''
        }
    }),
    on(openpopup, (state, action) => {
        return {
            ...state,
            comicobj: {
                id: 0,
                name: "",
                genre: "",
                excerpt: "",
                writtenby: "",
                publisher: ""
            }
        }
    })
)

export function ComicReducer(state: any, action: any) {
    return _ComicReducer(state, action);
}