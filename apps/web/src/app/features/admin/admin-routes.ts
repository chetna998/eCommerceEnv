import { Routes } from '@angular/router';
import { ManageProducts } from './manage-products/manage-products';

export const Admin_Routes: Routes = [
  {
    path: 'products',
    component: ManageProducts,
  },
];
