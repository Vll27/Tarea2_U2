import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  title = 'Tarea 2';
  
  user!: FormGroup;

  constructor(private _fb: FormBuilder) {}

  createForm() {
    this.user = this._fb.group({
      edad: ["", [Validators.required, Validators.min(0), Validators.max(100)]],
      sitioweb: ['', [Validators.required, Validators.pattern('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?')]]
    });
  }

  ngOnInit(): void {
    this.createForm();
  }
}