import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { EscolaService } from '../../escola/escola.service';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-create',
  templateUrl: './turma-create.component.html',
  styleUrls: ['./turma-create.component.scss'],
})
export class TurmaCreateComponent implements OnInit {
  public turmaForm: FormGroup = new FormGroup({
    id: new FormControl(null),
    codigo: new FormControl(null, [Validators.required]),
    nome: new FormControl(null, [Validators.required]),
    escolaId: new FormControl(null),
  });

  escolas: any[] = [];

  @ViewChild('form') form: NgForm | undefined;

  constructor(
    private turmaService: TurmaService,
    private router: Router,
    private route: ActivatedRoute,
    private snackBar: MatSnackBar,
    private escolaService: EscolaService
  ) {}

  ngOnInit(): void {
    this.escolaService.read().subscribe((h) => (this.escolas = h));

    const id = this.route.snapshot.paramMap.get('id')!;

    if (id) {
      this.turmaService.readId(`${id}`).subscribe((resp) => {
        this.turmaForm.setValue(resp);
      });
    }
  }

  save() {
    if (this.turmaForm.valid) {
      let data = this.turmaForm.value;
      if (data.id != null) {
        this.turmaService.put(data.id, data.codigo, data.nome).subscribe(
          (Turma) => this.notify('Registro salvo com sucesso !'),
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

      // this.resetForm();
      this.router.navigateByUrl('turma/create');
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
