import { FormBuilder } from '@angular/forms';
import { from } from 'rxjs';
import { FormComponent } from './form.component';

describe('form component', () => {
  let formComponent: FormComponent;

  beforeEach(() => {
    formComponent = new FormComponent(new FormBuilder());
  });

  it('should create a form with 2 controls', () => {
    expect(formComponent.form.contains('email')).toBeTruthy();
    expect(formComponent.form.contains('password')).toBe(true);
  });

  it('should make the email control required', () => {
    let control = formComponent.form.get('email');
    control?.setValue('');
    expect(control?.valid).toBeFalsy();
  });

  it('should make the email a valid address', () => {
    let control = formComponent.form.get('email');
    control?.setValue('example@gmail.com');
    expect(control?.valid).toBeTruthy();
  });
});
