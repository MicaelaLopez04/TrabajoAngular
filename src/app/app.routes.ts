import { Routes } from '@angular/router';
import { StoreComponent } from './store/store.component';
import { StoreAboutComponent } from './store-about/store-about.component';

export const routes: Routes = [
    {path:'', redirectTo:'store', pathMatch: 'full' },
    {path: 'store', component: StoreComponent},
    {path: 'about', component: StoreAboutComponent}

];
