import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Fase1Component } from './fase1/fase1.component';
import { Sottofase1Component } from './fase1/sottofase1/sottofase1.component';
import { Sottofase2Component } from './fase1/sottofase2/sottofase2.component';
import { Sottofase3Component } from './fase1/sottofase3/sottofase3.component';


const routes: Routes = [{
  path: 'fase-1',
  component: Fase1Component,
  children: [
    {
      path: 'sotto-fase-1',
      component: Sottofase1Component,
      data: {
        step: 1
      }
    },
    {
      path: 'sotto-fase-2',
      component: Sottofase2Component,
      data: {
        step: 2
      }
    },
    {
      path: 'sotto-fase-3',
      component: Sottofase3Component,
      data: {
        step: 3
      }
    }
  ]
},
{
  path: '',
  redirectTo: '/fase-1/sotto-fase-1',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
