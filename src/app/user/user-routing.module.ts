import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserHomeComponent }    from './user-home.component';
import { UserComponent }    from './user.component';
import { UserDetailComponent }  from './user-detail.component';

const userHomeRoutes: Routes = [
  {
    path: 'user',
    component: UserHomeComponent,
    children: [
      {
        path: '',
        component: UserComponent,
        children: [
          {
            path: ':id',
            component: UserDetailComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(userHomeRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserHomeRoutingModule { }
