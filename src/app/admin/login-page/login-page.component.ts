import { ActivatedRoute, Params, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from 'src/app/shared/interfaces';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  formLogin!: FormGroup
  submitted = false
  message!: string

  constructor(
    public auth: AuthService,
    public router: Router,
    public route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.createForm()
    this.route.queryParams.subscribe((params: Params) => {
      if (params['loginAgain']) {
        this.message = 'Залогинтесь плиз'
      }
    })
  }

  createForm() {
    this.formLogin = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
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
    this.submitted = true

    const user: User = {
      email: this.formLogin.value.email,
      password: this.formLogin.value.password,
    }

    this.auth.login(user).subscribe(() => {
      this.formLogin.reset();
      this.router.navigate(['/admin', 'dashboard'])
      this.submitted = false
    }, () => {
      this.submitted = false
    })
  }
}
