import { Routes } from '@angular/router';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Layout } from '../pages/layout/layout';
import { FileUpload } from '../pages/file-upload/file-upload';
import { Container } from '../pages/container/container';
import { Login } from '../auth/login/login';
import { DocPanel } from '../pages/doc-panel/doc-panel';
import { PendingDoc } from '../pages/pending-doc/pending-doc';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'upload',
    component: Layout,
    children: [
      { path: '', component: FileUpload },
      { path: 'containers', component: Container },
    ]
  },

  {
    path: 'dashboard',
    component: Layout,
    children: [
      { path: '', component: Dashboard },

      { path: 'documentPanel/:count', component: DocPanel },
    ]
  },

  {
    path: 'pending-doc',
    component: Layout,
    children: [
      { path: '', component: PendingDoc },
      // { path: '', component: PendingDoc },
    ]
  }
];
