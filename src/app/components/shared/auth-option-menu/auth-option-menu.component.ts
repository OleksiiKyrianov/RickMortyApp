import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { from, Subscription } from 'rxjs';
import { LogicGetService } from 'src/app/services/logic-get.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth-option-menu.component.html',
  styleUrls: ['./auth-option-menu.component.sass'],
  host: {
    class : 'authComponent'
  },
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthComponent implements OnInit, OnDestroy {
  show:boolean = false;
  user: any;
  userName!: string;
  userEmail!: string;
  userImage!: string;
  authSubscr!: Subscription;
  error: boolean = false;
  constructor(public auth: AngularFireAuth, public logicGetService: LogicGetService, private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    this.authSubscr = this.auth.authState.subscribe(user => {
      if (user) {
        this.user = user.multiFactor;
        this.userName = this.user.user.displayName;
        this.userEmail = this.user.user.email;
        this.userImage = this.user.user.photoURL;
      }
      this.cdr.detectChanges();
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

  public ngOnDestroy() {
    this.authSubscr.unsubscribe();
  }
}
