import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms"
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog"
import { Store } from '@ngrx/store';
import { addcomic, updatecomic } from 'src/app/Store//Comic/Comic.Action';
import { getcomic } from 'src/app/Store/Comic/Comic.Selectors';
import { Comic } from 'src/app/Store/Model/Comic.model';

@Component({
  selector: 'app-addcomic',
  templateUrl: './addcomic.component.html',
  styleUrls: ['./addcomic.component.css']
})
export class AddcomicComponent implements OnInit {

  // comicform: FormGroup;
  title = 'Add Comic'
  isedit = false;
  dialogdata: any;

  constructor(private builder: FormBuilder, private ref: MatDialogRef<AddcomicComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any, private store: Store) {

  }
  ngOnInit(): void {
    this.dialogdata = this.data;
    this.title = this.dialogdata.title;
    this.store.select(getcomic).subscribe(res => {
      this.comicform.setValue({
        id: res.id, name: res.name, genre: res.genre, excerpt: res.excerpt,
        writtenby: res.writtenby, publisher: res.publisher
      })
    })
  }

  ClosePopup() {
    this.ref.close();
  }

  comicform = this.builder.group({
    id: this.builder.control(0),
    name: this.builder.control('', Validators.required),
    genre: this.builder.control('', Validators.required),
    excerpt: this.builder.control('', Validators.required),
    writtenby: this.builder.control('', Validators.required),
    publisher: this.builder.control('',Validators.required)
  })

  SaveComic() {
    if (this.comicform.valid) {
      const _obj: Comic = {
        id: this.comicform.value.id as number,
        name: this.comicform.value.name as string,
        genre: this.comicform.value.genre as string,
        excerpt: this.comicform.value.excerpt as string,
        writtenby: this.comicform.value.writtenby as string,
        publisher: this.comicform.value.publisher as string
      }
      if (_obj.id === 0) {
        this.store.dispatch(addcomic({ inputdata: _obj }))
      } else {
        this.store.dispatch(updatecomic({ inputdata: _obj }))
      }
      this.ClosePopup();
    }
  }
}
