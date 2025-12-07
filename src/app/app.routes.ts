import { Routes } from '@angular/router';
import { Dashboard } from '../pages/dashboard/dashboard';
import { Layout } from '../pages/layout/layout';
import { FileUpload } from '../pages/file-upload/file-upload';
import { Container } from '../pages/container/container';
import { Login } from '../auth/login/login';
import { DocPanel } from '../pages/doc-panel/doc-panel';
import { PendingDoc } from '../pages/pending-doc/pending-doc';
import { ArchiveTab } from '../pages/archive-tab/archive-tab';

export const routes: Routes = [
  { path: 'login', component: Login },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  {
    path: 'upload',
    component: Layout,
    children: [
      { path: '', component: FileUpload , data: { name: 'File Upload' } },
      { path: 'containers', component: Container , data: { name: 'Containers' } },
    ]
  },

  {
    path: 'dashboard',
    component: Layout,
    children: [
      { path: '', component: Dashboard , data: { name: 'Dashboard' } },

      { path: 'documentPanel/:count', component: DocPanel, data: { name: 'Document Panel' }  },
    ]
  },

  {
    path: 'pending-doc',
    component: Layout,
    children: [
      { path: '', component: PendingDoc, data: { name: 'Pending Document' }  },
      // { path: '', component: PendingDoc },
    ]
  },
  {
    path: 'archive-tab',
    component: Layout,
    children: [
      { path: '', component: ArchiveTab, data: { name: 'Archive Tab' }  },

    ]
  }
];
