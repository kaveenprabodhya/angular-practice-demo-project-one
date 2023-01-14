import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validator';
import { UsernameValidators } from './username.validators';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css'],
})
export class SignupFormComponent {
  form = new FormGroup(
    {
      username: new FormControl(
        '',
        [
          Validators.required,
          Validators.email,
          UsernameValidators.cannotContainSpace,
        ],
        UsernameValidators.shouldBeUnique
      ),
      password: new FormControl('', [
        Validators.required,
        PasswordValidators.patternValidator,
      ]),
    }
    /* { validators: PasswordValidators.checkPasswords } */
  );

  get username() {
    return this.form.get('username');
  }

  get signup() {
    return this.form.controls;
  }

  login() {
    console.log('login');

    console.log(this.form.value);

    if (this.form.value.username === '' || this.form.value.password === '') {
      this.form.setErrors({
        invalidLogin: true,
      });
    }
  }
}
