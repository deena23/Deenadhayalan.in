import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { HomeComponent } from './home/home.component';
import { ResumeComponent } from './resume/resume.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'Experience', component: ExperiencesComponent},
  {path: 'Education', component: EducationComponent},
  {path: 'Resume', component: ResumeComponent},
  {path: 'Contact', component: ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
