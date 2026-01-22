import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth-guard';
import { loggedGuard } from './core/guards/logged-guard';

export const routes: Routes = [
    {
        path:'',
        loadChildren: () => import('./features/products/product.routes').then(m => m.Product_Routes)
    },
    {
        path: 'auth',
        loadChildren: () => import('./features/auth/auth.routes').then(m => m.Auth_Routes),
        canActivate: [loggedGuard]
    },
    {
        path: 'user',
        loadChildren: () => import('./features/user/user.routes').then(m => m.User_Routes),
        canActivate: [authGuard]
    },
    {
        path: 'admin',
        loadChildren: () => import('./features/admin/admin-routes').then(m => m.Admin_Routes),
        canActivate: [authGuard]
    }
];
