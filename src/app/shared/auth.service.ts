import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Angular2FontawesomeModule } from 'angular2-fontawesome';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireauth: AngularFireAuth,  private router: Router) {  }

  //login method
  login(email: string, password: string) {
    this.fireauth.signInWithEmailAndPassword(email, password).then ( () => {
      localStorage.setItem('token', 'true');
        this.router.navigate(['dashboard']);
    }, err => {
      alert('Something went wrong. Please double check the credentials.');
      this.router.navigate(['/login']);
    })
  }

  //register method
  register(email:string, password: string ) {
    this.fireauth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Registration successful');
      this.router.navigate(['/login']);
    }, err => {
      alert('Something went wrong. Please double check the credentials.');
      this.router.navigate(['/register']);
    })
  }

  //sign out method
  logout() {
    this.fireauth.signOut().then( () => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }, err => {
      alert('Something went wrong.');
    })
  }


}
