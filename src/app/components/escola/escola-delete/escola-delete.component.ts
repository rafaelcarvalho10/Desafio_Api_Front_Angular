import { EscolaService } from './../escola.service';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-escola-delete',
  templateUrl: './escola-delete.component.html',
  styleUrls: ['./escola-delete.component.scss'],
})
export class EscolaDeleteComponent implements OnInit {
  public escolaForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    codigo: new FormControl(null, [Validators.required]),
    nome: new FormControl(null, [Validators.required]),
  });

  @ViewChild('form') form: NgForm | undefined;

  constructor(
    private escolaService: EscolaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    debugger;
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.escolaService.readId(`${id}`).subscribe((resp) => {
        debugger;
        this.escolaForm.setValue(resp);
      });
    }
  }

  deleteEscola(): void {
    debugger;
    if (this.escolaForm.valid) {
      let data = this.escolaForm.value;
      if (data.id != null) {
        this.escolaService.delete(data.id).subscribe(
          (Escola) => this.notify('Escola excluída'),
          (error) => {
            console.log(error);
            this.notify('Problemas ao excluir a Escola');
          }
        );
      } else {
        this.notify('Problemas ao excluir a Escola !');
      }
      this.router.navigateByUrl('escola/delete');
    } else {
      this.notify('Favor verificar preenchimento das informações.');
    }
  }

  notify(msg: string) {
    this.snackBar.open(msg, 'OK', { duration: 3000 });
  }

  cancel(): void {
    this.router.navigate(['/escola']);
  }
}
