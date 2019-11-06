import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { IndexComponent } from './components/index/index.component';


const routes: Routes = [

  {
    path:'',
    component:LoginComponent
  },
  {
    path:'home',
    component:IndexComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)]
  
  ,
  exports: [RouterModule]
})
export class AppRoutingModule { }
