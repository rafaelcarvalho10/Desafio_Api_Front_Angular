import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { Turma } from '../turma.model';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-read',
  templateUrl: './turma-read.component.html',
  styleUrls: ['./turma-read.component.scss'],
})
export class TurmaReadComponent implements OnInit {
  turmas!: Turma[];
  // ELEMENT_DATA!: Turma[];

  displayedColumns = ['id', 'codigo', 'nome', 'escolaId', 'action'];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private turmaService: TurmaService) {}

  ngOnInit(): void {
    this.turmaService.read().subscribe((turma) => {
      this.turmas = turma;
      console.log(turma);
    });
  }
}
