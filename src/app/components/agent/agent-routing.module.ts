import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgentProfileComponent } from './agent-profile/agent-profile.component';
import { AgentGridComponent } from './agent-grid/agent-grid.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { SubmitPropertyComponent } from './submit-property/submit-property.component';

const routes: Routes = [
  {
    path: 'agent-profile',
    component: AgentProfileComponent,
  },
  {
    path: 'agent-grid',
    component: AgentGridComponent,
  },
  {
    path: 'agent-list',
    component: AgentListComponent,
  },
  {
    path: 'submit-property',
    component: SubmitPropertyComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AgentRoutingModule { }
