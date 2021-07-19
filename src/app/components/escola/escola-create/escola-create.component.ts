import { EscolaService } from './../escola.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-escola-create',
  templateUrl: './escola-create.component.html',
  styleUrls: ['./escola-create.component.scss'],
})
export class EscolaCreateComponent implements OnInit {
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
    const id = parseInt(this.route.snapshot.paramMap.get('id')!);

    if (id) {
      this.escolaService.readId(`${id}`).subscribe((resp) => {
        this.escolaForm.setValue(resp);
      });
    }
  }

  save() {
    if (this.escolaForm.valid) {
      let data = this.escolaForm.value;
      if (data.id != null) {
        this.escolaService.put(data.id, data.codigo, data.nome).subscribe(
          (Escola) => this.notify('Registro salvo com sucesso !'),
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

      // this.resetForm();
      this.router.navigateByUrl('escola/create');
    } else {
      // this.notify('Favor verificar preenchimento das informações.');
    }
  }

  notify(msg: string) {
    this.snackBar.open(msg, 'OK', { duration: 3000 });
  }

  cancel(): void {
    this.router.navigate(['/escola']);
  }
}
