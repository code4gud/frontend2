import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Work2Component }        from './work2/work2.component';
import { MapComponent }        from './map/map.component';

export const appRoutes: Routes = [

    { path: 'work2',  component: Work2Component },
    { path: 'map',  component: MapComponent },
    { path: '**',  component: Work2Component },
    { path: '',   redirectTo: '/map', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, { useHash: true} )],
  exports: [RouterModule]
  //providers: [WorkflowGuard]
})

export class AppRoutingModule {}
