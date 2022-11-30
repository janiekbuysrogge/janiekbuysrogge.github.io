import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NummerplatenListComponent } from './components/nummerplaten-list/nummerplaten-list.component';
import { NummerplatenVirtComponent } from './components/nummerplaten-virt/nummerplaten-virt.component';

const routes: Routes = [
  {
    path: 'list',
    component: NummerplatenListComponent
  },
  {
    path: 'virt',
    component: NummerplatenVirtComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
