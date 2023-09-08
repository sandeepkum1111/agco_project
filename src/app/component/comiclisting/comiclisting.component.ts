import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from "@angular/material/dialog"
import { AddcomicComponent } from '../addcomic/addcomic.component';
import { Store } from '@ngrx/store';
import { Comic } from 'src/app/Store/Model/Comic.model';
import { getcomiclist } from 'src/app/Store/Comic/Comic.Selectors';
import { deleteecomic, getcomic, loadcomic, openpopup } from 'src/app/Store/Comic/Comic.Action';
import { MatTableDataSource } from "@angular/material/table"
import { MatPaginator } from "@angular/material/paginator"
import { MatSort } from "@angular/material/sort"

@Component({
  selector: 'app-comiclisting',
  templateUrl: './comiclisting.component.html',
  styleUrls: ['./comiclisting.component.css']
})
export class ComiclistingComponent implements OnInit {
  Comiclist!: Comic[];
  datasource: any;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  displayedColums: string[] = ["code", "name", "genre", "excerpt", "writtenby", "publisher",  "action"]
  constructor(private dialog: MatDialog, private store: Store) {

  }
  ngOnInit(): void {
    this.store.dispatch(loadcomic());
    this.store.select(getcomiclist).subscribe(item => {
      this.Comiclist = item;
      this.datasource = new MatTableDataSource<Comic>(this.Comiclist);
      this.datasource.paginator = this.paginator;
      this.datasource.sort = this.sort;
    });
  }

  FunctionAdd() {
    this.OpenPopup(0, 'Add Comic');
  }
  FunctionEdit(code: number) {
    this.OpenPopup(code, 'Update Comic');
    this.store.dispatch(getcomic({ code: code }))
  }

  FunctionDelete(code: number) {
    if (confirm('do you want to remove?')) {
      this.store.dispatch(deleteecomic({ code: code }));
    }
  }

  OpenPopup(code: number, title: string) {
    this.store.dispatch(openpopup());
    this.dialog.open(AddcomicComponent, {
      width: '50%',
      enterAnimationDuration: '1000ms',
      exitAnimationDuration: '1000ms',
      data: {
        code: code,
        title: title
      }
    })
  }
}
