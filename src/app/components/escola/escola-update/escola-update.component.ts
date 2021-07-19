import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaService } from '../escola.service';

@Component({
  selector: 'app-escola-update',
  templateUrl: './escola-update.component.html',
  styleUrls: ['./escola-update.component.scss'],
})
export class EscolaUpdateComponent implements OnInit {
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
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.escolaService.readId(`${id}`).subscribe((resp) => {
        debugger;
        this.escolaForm.setValue(resp);
      });
    }
  }

  save() {
    if (this.escolaForm.valid) {
      let data = this.escolaForm.value;
      if (data.id != null) {
        this.escolaService.put(data.id, data.codigo, data.nome).subscribe(
          (Escola) => this.notify('Registro atualizado !'),
          (error) => {
            console.log(error);
            this.notify('Problemas ao salvar o registro !');
          }
        );
      } else {
        this.escolaService.create(data.codigo, data.nome).subscribe(
          (Escola) => this.notify('Registro criado com sucesso !'),
          (error) => {
            console.log(error);
            this.notify('Problemas ao criar o registro !');
          }
        );
      }

      this.router.navigateByUrl('escola/update');
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
