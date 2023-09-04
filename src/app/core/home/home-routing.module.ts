import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './components/inicio/inicio.component';

import { InicioViewComponent } from 'src/app/Modules/pages/inicio-view/inicio-view.component';


const routes: Routes = [
  {
    path:'pruebaAdmin',
    loadChildren: () => import('src/app/Modules/pages/admin-views/admin-views.module').then(m => m.AdminViewsModule)
  },
  {
    path:'',
    component:InicioComponent,
        children: [
        //  { path: '', loadChildren: () => import('src/app/Modules/pages/dashboard/dashboard.module').then(m => m.DashboardModule) },
        { path: '',component:InicioViewComponent},
         { path: 'uikit', loadChildren: () => import('src/app/Modules/pages/uikit/uikit.module').then(m => m.UIkitModule) },
         { path: 'utilities', loadChildren: () => import('src/app/Modules/pages/utilities/utilities.module').then(m => m.UtilitiesModule) },
         { path: 'documentation', loadChildren: () => import('src/app/Modules/pages/documentation/documentation.module').then(m => m.DocumentationModule) },
         { path: 'blocks', loadChildren: () => import('src/app/Modules/pages/primeblocks/primeblocks.module').then(m => m.PrimeBlocksModule) },
         { path: 'pages', loadChildren: () => import('src/app/Modules/pages/pages/pages.module').then(m => m.PagesModule) }
     ]
 },
 { path: 'auth', loadChildren: () => import('src/app/Modules/pages/auth/auth.module').then(m => m.AuthModule) },
 { path: 'landing', loadChildren: () => import('src/app/Modules/pages/landing/landing.module').then(m => m.LandingModule) },
//  { path: 'notfound', component: NotfoundComponent},
 { path: '**', redirectTo: '/notfound' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
