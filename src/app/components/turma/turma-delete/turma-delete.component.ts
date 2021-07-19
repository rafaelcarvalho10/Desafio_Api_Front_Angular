import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { TurmaService } from '../turma.service';

@Component({
  selector: 'app-turma-delete',
  templateUrl: './turma-delete.component.html',
  styleUrls: ['./turma-delete.component.scss'],
})
export class TurmaDeleteComponent implements OnInit {
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
    debugger;
    const id = this.route.snapshot.paramMap.get('id');

    if (id) {
      this.turmaService.readId(`${id}`).subscribe((resp) => {
        this.turmaForm.setValue(resp);
      });
    }
  }

  deleteTurma(): void {
    if (this.turmaForm.valid) {
      let data = this.turmaForm.value;
      if (data.id != null) {
        this.turmaService.delete(data.id).subscribe(
          (Turma) => this.notify('Turma excluída'),
          (error) => {
            console.log(error);
            this.notify('Problemas ao excluir a Turma');
          }
        );
      } else {
        this.notify('Problemas ao excluir a Turma !');
      }
      this.router.navigateByUrl('turma/delete');
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
