import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FruitVisualizationComponent } from './fruit-visualization/fruit-visualization.component';
import { ModuleAComponent } from './module-a/module-a.component';
import { ModulebComponent } from './moduleb/moduleb.component';
import { TaskBArryCountComponent } from './task-b-arry-count/task-b-arry-count.component';

const routes: Routes = [

  {path: 'fruit',component:FruitVisualizationComponent},
  {path: 'module-a', component: ModuleAComponent },
  {path: 'module-b', component: ModulebComponent },
  {path: 'count', component: TaskBArryCountComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
