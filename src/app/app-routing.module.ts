import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GreetComponent } from './greet/greet.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {
      path: 'app-login',
      component: LoginComponent
    },
  {
    path: 'app-greet',
    component: GreetComponent
  },
  {
    path: 'app-root',
    component: AppComponent
    }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
