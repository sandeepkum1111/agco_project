import { createAction, props } from "@ngrx/store";
import { Comic } from "../Model/Comic.model";

export const COMIC='[comic page]load comic'
export const LOAD_COMIC_SUCCESS='[comic page]load comic success'
export const LOAD_COMIC_FAIL='[comic page]load comic fail'
export const ADD_COMIC='[comic page]add comic'
export const ADD_COMIC_SUCCESS='[comic page]add comic success'
export const UPDATE_COMIC='[comic page]update comic'
export const UPDATE_COMIC_SUCCESS='[comic page]update comic success'

export const DELETE_COMIC='[comic page]delete comic'
export const DELETE_COMIC_SUCCESS='[comic page]delete comic success'

export const GET_COMIC='[comic page]get comic'
export const GET_COMIC_SUCCESS='[comic page]get comic success'
export const OPEN_POPUP='[comic page]open popup'

export const loadcomic=createAction(COMIC)
export const loadcomicsuccess=createAction(LOAD_COMIC_SUCCESS,props<{list:Comic[]}>())
export const loadcomicfail=createAction(LOAD_COMIC_FAIL,props<{errormessage:string}>())

export const addcomic=createAction(ADD_COMIC,props<{inputdata:Comic}>())
export const addcomicsuccess=createAction(ADD_COMIC_SUCCESS,props<{inputdata:Comic}>())

export const updatecomic=createAction(UPDATE_COMIC,props<{inputdata:Comic}>())
export const updatecomicsuccess=createAction(UPDATE_COMIC_SUCCESS,props<{inputdata:Comic}>())

export const deleteecomic=createAction(DELETE_COMIC,props<{code:number}>())
export const deletecomicsuccess=createAction(DELETE_COMIC_SUCCESS,props<{code:number}>())

export const getcomic=createAction(GET_COMIC,props<{code:number}>())
export const getcomicsuccess=createAction(GET_COMIC_SUCCESS,props<{obj:Comic}>())

export const openpopup=createAction(OPEN_POPUP);