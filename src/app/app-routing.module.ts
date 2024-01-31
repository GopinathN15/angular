import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
// import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
// import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { MychartComponent } from './mychart/mychart.component';
const routes: Routes = [
  // { path:'',redirectTo:'',pathMatch:'full'},
  { path: '',component:LoginComponent,},
  { path:'login',component:LoginComponent,},
  {path:"dashboard",component:DashboardComponent,},
  { path:'sidebar',component:SidebarComponent,},
  {path:'add-emp',component:AddEmpComponent,},
 { path:'chart',component:MychartComponent,},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
