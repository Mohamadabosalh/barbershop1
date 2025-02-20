import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Router} from '@angular/router';
import { MasterService } from '../master.service';

@Component({
  selector: 'app-signin',
  standalone: false,
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css'
})
export class SigninComponent {
  loginForm: FormGroup;
  users: any[] = [];

  constructor(private fb: FormBuilder, private userService: MasterService,private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.userService.getUsers().subscribe(users => (this.users = users));
  }
  login() {
    if (this.loginForm.valid) {
      const found = this.users.find(
        u =>
          u.email === this.loginForm.value.email &&
          u.password === this.loginForm.value.password
      );
      if (found) {
        alert('Login successful!');
      this.router.navigate(['/app-home-page'])
      } else {
        alert('Invalid credentials!');
      }
    }
  }
}
