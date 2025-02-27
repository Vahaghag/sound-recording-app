import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlaylistComponent} from "./pages/playlist/playlist.component";

export const routes: Routes = [
  {
    path: '',
    component: PlaylistComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
