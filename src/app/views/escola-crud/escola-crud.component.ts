import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-escola-crud',
  templateUrl: './escola-crud.component.html',
  styleUrls: ['./escola-crud.component.scss'],
})
export class EscolaCrudComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigateToEscolaCreate(): void {
    this.router.navigate(['/escola/create']);
  }
}
