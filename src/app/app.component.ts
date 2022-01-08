import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Register', url: 'register', icon: 'heart' },
    { title: 'Login', url: 'login', icon: 'archive' },
    
    { title: 'Users', url: '/users', icon: 'mail' },
    { title: 'Logout', url: 'logout', icon: 'paper-plane' },
    ]; 
  // public labels = [];
  constructor() {}
}
