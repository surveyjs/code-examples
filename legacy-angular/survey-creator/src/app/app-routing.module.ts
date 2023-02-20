import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreatorComponent } from './components/creator.component';
import { SurveyComponent } from './components/survey.component';


const routes: Routes = [
  { path: 'survey', component: SurveyComponent },
  { path: 'creator', component: CreatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
