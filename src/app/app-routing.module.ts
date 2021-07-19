import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { EscolaCrudComponent } from './views/escola-crud/escola-crud.component';
import { EscolaCreateComponent } from './components/escola/escola-create/escola-create.component';
import { EscolaUpdateComponent } from './components/escola/escola-update/escola-update.component';
import { EscolaDeleteComponent } from './components/escola/escola-delete/escola-delete.component';

import { TurmaDeleteComponent } from './components/turma/turma-delete/turma-delete.component';
import { TurmaUpdateComponent } from './components/turma/turma-update/turma-update.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { TurmaCrudComponent } from './views/turma-crud/turma-crud.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'escola',
    component: EscolaCrudComponent,
  },
  {
    path: 'escola/create',
    component: EscolaCreateComponent,
  },
  {
    path: 'escola/update/:id',
    component: EscolaUpdateComponent,
  },
  {
    path: 'escola/delete/:id',
    component: EscolaDeleteComponent,
  },
  {
    path: 'turma',
    component: TurmaCrudComponent,
  },
  {
    path: 'turma/create',
    component: TurmaCreateComponent,
  },
  {
    path: 'turma/update/:id',
    component: TurmaUpdateComponent,
  },
  {
    path: 'turma/delete/:id',
    component: TurmaDeleteComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
