import { EscolaService } from './../escola.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Escola } from '../escola.model';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-escola-read',
  templateUrl: './escola-read.component.html',
  styleUrls: ['./escola-read.component.scss'],
})
export class EscolaReadComponent implements OnInit {
  escolas!: Escola[];
  ELEMENT_DATA!: Escola[];

  displayedColumns = ['id', 'codigo', 'nome', 'action'];
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private escolaService: EscolaService) {}

  ngOnInit(): void {
    this.escolaService.read().subscribe((escola) => {
      this.escolas = escola;
      console.log(escola);
    });
  }
}
