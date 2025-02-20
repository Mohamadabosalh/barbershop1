import { Component } from '@angular/core';
import { MasterService } from '../master.service';
import { Router } from '@angular/router';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  newUser: FormGroup;
  users: any[] = [];
  constructor(private master: MasterService,private fb:FormBuilder,private router:Router) {   
       this.newUser = this.fb.group({
    username: ['', [Validators.required, Validators.minLength(4)]],
    password: ['', [Validators.required, Validators.minLength(8),Validators.pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]*$/
    )]],
    confirmPassword: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', [
      Validators.required, 
      Validators.pattern('^(?:\\+972|972|0)(5[2-9]|[2-9])\\d{8}$')
    ]],

  },
  { validator: this.passwordMatchValidator }
);}

  ngOnInit(): void {
    this.master.getUsers().subscribe({
      next: (users) => (this.users = users),
      error: (err) => console.error('Error fetching users:', err)
    });
  }

  SignUp(): void {
    if (this.newUser.valid) {
      const userExists = this.users.some(
        (u) => u.username === this.newUser.value.username
      );
      if (userExists) {
        alert('Username already exists. Please choose another one.');
      } else {
        const newUser = this.newUser.value;
        delete newUser.confirmPassword;
        this.master.addUser(newUser).subscribe({
          next: () => {
            alert('Sign up successful!');
            this.router.navigate(['/app-signin']);
          },
          error: (err) => {
            console.error('Error signing up:', err);
            alert('An error occurred while signing up.');
          }
        });
      }
    } else {
      alert('Please fill in all required fields correctly!');
  }
}

passwordMatchValidator(formGroup: FormGroup): void {
  const password = formGroup.get('password')?.value;
  const confirmPassword = formGroup.get('confirmPassword')?.value;

  if (password !== confirmPassword) {
    formGroup.get('confirmPassword')?.setErrors({ mismatch: true });
  } else {
    formGroup.get('confirmPassword')?.setErrors(null);
  }
}

}
