import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { SectionsComponent } from './section/sections.component';
import { SectionFormComponent } from './section/section-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/accueil', pathMatch: 'full' },
  { path: 'accueil',  component: AccueilComponent },
   { path: 'sections',  component: SectionsComponent },   
   { path: 'addSection',  component: SectionFormComponent }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}