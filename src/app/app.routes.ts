import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { FilenotfoundComponent } from './filenotfound/filenotfound.component';

export const routes: Routes = [
    {path:'',redirectTo:'about',pathMatch:'full'},
    {path:'about',component: AboutComponent},
    {path:'portfolio',component:PortfolioComponent},
    {path:'gallery',component: GalleryComponent},
    {path:'contact',component: ContactComponent},
    {path:'**',component:FilenotfoundComponent}
];
