import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' },
  { path: 'tabs/tab2/new', loadChildren: './tab2/update-item/update-item.module#UpdateItemPageModule' },
  { path: 'tabs/tab2/:id', loadChildren: './tab2/add-item/add-item.module#AddItemPageModule' },
  { path: 'tabs/tab3/:id', loadChildren: './tab3/model/model.module#ModelPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
