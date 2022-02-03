import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from "@auth0/auth0-angular";
import { HomepageComponent } from "./homepage/homepage.component";
import { UserProfileComponent } from "./user-profile/user-profile.component";

const routes: Routes = [
  { path: '', component: HomepageComponent },
  { path: 'account', component: UserProfileComponent, canActivate: [AuthGuard] },
  { path: 'doc', loadChildren: () => import('./documentation/documentation.module').then((m) => m.DocumentationModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
