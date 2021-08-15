import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MissionsListComponent} from './components/missions-list/missions-list.component';
import {AddMissionComponent} from './components/add-mission/add-mission.component';


const routes: Routes = [
  {path: '', redirectTo: 'missions', pathMatch: 'full'},
  {path: 'missions', component: MissionsListComponent},
  {path: 'add', component:AddMissionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
