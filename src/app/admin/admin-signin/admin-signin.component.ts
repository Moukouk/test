import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AutenticationService } from '../../service/autentication.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.css']
})
export class AdminSigninComponent implements OnInit {
  adminSignInForm: FormGroup;
  errMessage: string;
  @Input()
  person: any;
  constructor(private formBuilder: FormBuilder, private autenticationService: AutenticationService, private router: Router) { }

  ngOnInit() {
    this.initForm();
  }
  initForm() {
    this.adminSignInForm = this.formBuilder.group({
      email: ['', [ Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/[0-9a-aA-Z{6,}]/)]]
    });
  }
  onAuth() {
    const email = this.adminSignInForm.get('email');
    const password = this.adminSignInForm.get('password');
    console.log(email.value + ' : ' + password.value);
    this.autenticationService.signInUser(email.value, password.value).then(
      () => {
        this.router.navigate(['/admin', 'dashboard']);
      },
      (error) => {
        this.errMessage = error;
        alert(this.errMessage);
      }
    );
  }
}
