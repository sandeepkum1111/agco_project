import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComiclistingComponent } from './component/comiclisting/comiclisting.component';

const routes: Routes = [
  {
    path:'', component:ComiclistingComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
