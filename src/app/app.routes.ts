import { Routes } from '@angular/router';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Layout } from '../pages/layout/layout';
import { FileUpload } from '../pages/file-upload/file-upload';
import { Container } from '../pages/container/container';
import { Login } from '../auth/login/login';
import { DocPanel } from '../pages/doc-panel/doc-panel';

export const routes: Routes = [
    { path: 'login', component: Login },
    {
    path: '',
    component: Layout,
    children: [
      { path: 'dashboard', component: Dashboard },
      { path: 'upload', component: FileUpload },
      { path: 'containers', component: Container },
      { path: 'documentPanel', component: DocPanel },
      { path: '', redirectTo: 'upload', pathMatch: 'full' }
    ]
  },
];
