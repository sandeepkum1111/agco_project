import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ComicModel } from "../Model/Comic.model";

const getcomicstate = createFeatureSelector<ComicModel>('comic');

export const getcomiclist = createSelector(getcomicstate, (state) => {
    return state.list;
})

export const getcomic = createSelector(getcomicstate, (state) => {
    return state.comicobj;
})