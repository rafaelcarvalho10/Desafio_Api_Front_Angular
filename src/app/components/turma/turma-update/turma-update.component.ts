import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-update',
  templateUrl: './turma-update.component.html',
  styleUrls: ['./turma-update.component.scss'],
})
export class TurmaUpdateComponent implements OnInit {
  public turmaForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    codigo: new FormControl(null, [Validators.required]),
    nome: new FormControl(null, [Validators.required]),
    escolaId: new FormControl(null),
  });

  @ViewChild('form') form: NgForm | undefined;

  constructor(
    private turmaService: TurmaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.turmaService.readId(`${id}`).subscribe((resp) => {
        debugger;
        this.turmaForm.setValue(resp);
      });
    }
  }

  save() {
    if (this.turmaForm.valid) {
      let data = this.turmaForm.value;
      if (data.id != null) {
        this.turmaService.put(data.id, data.codigo, data.nome).subscribe(
          (Turma) => this.notify('Registro atualizado !'),
          (error) => {
            console.log(error);
            this.notify('Problemas ao salvar o registro !');
          }
        );
      } else {
        this.turmaService.create(data).subscribe(
          (Turma) => this.notify('Registro criado com sucesso !'),
          (error) => {
            console.log(error);
            this.notify('Problemas ao criar o registro !');
          }
        );
      }

      this.router.navigateByUrl('turma/update');
    } else {
      this.notify('Favor verificar preenchimento das informações.');
    }
  }

  notify(msg: string) {
    this.snackBar.open(msg, 'OK', { duration: 3000 });
  }

  cancel(): void {
    this.router.navigate(['/turma']);
  }
}
