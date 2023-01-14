import { FormBuilder, FormGroup, Validators } from '@angular/forms';

export class FormComponent {
  form!: FormGroup;
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
    });
  }

  get frm() {
    return this.form.controls;
  }
}
