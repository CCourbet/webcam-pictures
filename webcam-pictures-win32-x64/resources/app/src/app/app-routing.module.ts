import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryComponent } from './components/gallery/gallery.component';
import { LoginComponent } from './components/login/login.component';
import { AuthenticationService } from './services/authentication.service';


const routes: Routes = [
    { path: '', redirectTo: 'gallery', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'gallery', component: GalleryComponent, canActivate: [AuthenticationService] },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }