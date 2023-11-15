import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BibliotecaListComponent } from './components/biblioteca-list/biblioteca-list.component';

const routes: Routes = [
  { path: 'principal', component: BibliotecaListComponent},

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
