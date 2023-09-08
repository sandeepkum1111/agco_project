import { Injectable } from "@angular/core"
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { ComicService } from "src/app/service/comic.service";
import { addcomic, addcomicsuccess, deletecomicsuccess, deleteecomic, getcomic, getcomicsuccess, loadcomic, loadcomicfail, loadcomicsuccess, updatecomic, updatecomicsuccess } from "./Comic.Action";
import { catchError, exhaustMap, of, map, switchMap } from "rxjs";
import { showalert } from "../Common/App.Action";

@Injectable()
export class ComicEffects {
    constructor(private actin$: Actions, private service: ComicService) {

    }

    _loadcomic = createEffect(() =>
        this.actin$.pipe(
            ofType(loadcomic),
            exhaustMap((action) => {
                return this.service.GetAll().pipe(
                    map((data) => {
                        return loadcomicsuccess({ list: data })
                    }),
                    catchError((_error) => of(loadcomicfail({ errormessage: _error.message })))
                )
            })
        )
    )

    _getcomic = createEffect(() =>
        this.actin$.pipe(
            ofType(getcomic),
            exhaustMap((action) => {
                return this.service.Getbycode(action.code).pipe(
                    map((data) => {
                        return getcomicsuccess({ obj: data })
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to fetch data :' + _error.message, resulttype: 'fail' })))
                )
            })
        )
    )

    _addcomic = createEffect(() =>
        this.actin$.pipe(
            ofType(addcomic),
            switchMap((action) => {
                return this.service.Create(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(addcomicsuccess({ inputdata: action.inputdata }),
                            showalert({ message: 'Created successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to create comic', resulttype: 'fail' })))
                )
            })
        )
    )
    _updatecomic = createEffect(() =>
        this.actin$.pipe(
            ofType(updatecomic),
            switchMap((action) => {
                return this.service.Update(action.inputdata).pipe(
                    switchMap((data) => {
                        return of(updatecomicsuccess({ inputdata: action.inputdata }),
                            showalert({ message: 'Upadted successfully.', resulttype: 'pass' }))
                    }),
                    catchError((_error) => of(showalert({ message: 'Failed to update comic', resulttype: 'fail' })))
                )
            })
        )
    )
    _deletecomic = createEffect(() =>
    this.actin$.pipe(
        ofType(deleteecomic),
        switchMap((action) => {
            return this.service.Delete(action.code).pipe(
                switchMap((data) => {
                    return of(deletecomicsuccess({ code: action.code }),
                        showalert({ message: 'Deleted successfully.', resulttype: 'pass' }))
                }),
                catchError((_error) => of(showalert({ message: 'Failed to delete comic', resulttype: 'fail' })))
            )
        })
    )
)



}