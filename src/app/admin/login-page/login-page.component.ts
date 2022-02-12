import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formLogin!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.createForm()
  }

  createForm() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.minLength(0),
      ]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6)
      ])
    })

  }
  get email() {
    return this.formLogin.get('email')
  }

  get password() {
    return this.formLogin.get('password')
  }

  submit() {
    if (this.formLogin.invalid) {
      return
    }
  }
}
