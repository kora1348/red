import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  

  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path : 'login', component :   LoginComponent},
  { path : 'header', component : HeaderComponent },
  { path : 'footer', component : FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
