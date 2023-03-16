import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { from } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.sass'],
  host: {
    class : 'authComponent'
  }
})
export class AuthComponent implements OnInit {
  show:boolean = false;
  user: any;
  userName!: string;
  userEmail!: string;
  userImage!: string;
  error: boolean = false;
  constructor(public auth: AngularFireAuth) { }

  ngOnInit(): void {
    this.auth.authState.subscribe(user => {
      if (user) {
        this.user = user.multiFactor;
        this.userName = this.user.user.displayName;
        this.userEmail = this.user.user.email;
        this.userImage = this.user.user.photoURL;
      }
    });
  }

  signInWithGoogle() {
    try{
    const provider = new firebase.auth.GoogleAuthProvider();
    from(this.auth.signInWithPopup(provider)).subscribe(userCredential => {
    this.error = false;
    localStorage.setItem('user', JSON.stringify(userCredential))});
    }catch (error){this.error = true}
  }

  signOut() {
    this.auth.signOut();
    localStorage.removeItem('user');
    location. reload();
  }

}
