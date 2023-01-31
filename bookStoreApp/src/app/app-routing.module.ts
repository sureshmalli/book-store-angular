import { Component, NgModule } from '@angular/core';
import { AboutUsComponent } from './about-us/about-us.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { AuthComponent } from './auth/auth.component';
import { UserComponent } from './user/user.component';
import { BooksComponent } from './public/books.component';


const routes: Routes = [
  {path:'',redirectTo:'about-us',pathMatch:'full'},
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'howItworks', component: HowItWorksComponent },
  { path: 'auth', 
    component: AuthComponent,
    loadChildren:()=>import('./auth/auth.module').then(x=>x.AuthModule)
   },
   { path: 'books', 
    component: BooksComponent,
    loadChildren:()=>import('./books/books.module').then(x=>x.BooksModule)
   },
   { path: 'user/:userId', 
   component: UserComponent,
   loadChildren:()=>import('./user/user.module').then(x=>x.UserModule)
  },
  {path:'**',component:NotFoundComponent}
 
];

@NgModule(
  {
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
}
)
export class AppRoutingModule {}
