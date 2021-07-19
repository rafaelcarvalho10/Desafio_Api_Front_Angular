import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FooterComponent } from './components/template/footer/footer.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCardModule } from '@angular/material/Card';
import { MatListModule } from '@angular/material/list';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { EscolaCrudComponent } from './views/escola-crud/escola-crud.component';
import { EscolaCreateComponent } from './components/escola/escola-create/escola-create.component';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TurmaCrudComponent } from './views/turma-crud/turma-crud.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { EscolaReadComponent } from './components/escola/escola-read/escola-read.component';
import { EscolaUpdateComponent } from './components/escola/escola-update/escola-update.component';
import { TurmaUpdateComponent } from './components/turma/turma-update/turma-update.component';
import { TurmaReadComponent } from './components/turma/turma-read/turma-read.component';
import { EscolaDeleteComponent } from './components/escola/escola-delete/escola-delete.component';
import { MatTableModule } from '@angular/material/table';
import { TurmaDeleteComponent } from './components/turma/turma-delete/turma-delete.component';
import { TurmaCreateComponent } from './components/turma/turma-create/turma-create.component';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    EscolaCrudComponent,
    EscolaCreateComponent,
    TurmaCrudComponent,
    EscolaReadComponent,
    EscolaUpdateComponent,
    TurmaUpdateComponent,
    EscolaDeleteComponent,
    TurmaReadComponent,
    TurmaDeleteComponent,
    TurmaCreateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatSnackBarModule,
    HttpClientModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    //
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatSnackBarModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatTableModule,
    MatSelectModule,

    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
export class Module {}
