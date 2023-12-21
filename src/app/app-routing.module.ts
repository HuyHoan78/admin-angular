import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component';
import { LoaispComponent } from './modules/loaisp/loaisp.component';


const routes: Routes =
 [{path:"",component:HomepageComponent},
 {path:"Loaisanpham",component:LoaispComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
