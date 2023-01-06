import { Component } from '@angular/core';
import { CookieService } from 'ngx-cookie-service'; // also import here and inject the service in constructor

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sessionlocalcookie';
  Heading : string = '(Session, Local, Cookie) Storage';

  constructor(private cookies : CookieService){}

  setSession(){
    sessionStorage.setItem('userid', 'adminuser');  //session storage
    localStorage.setItem('userid', 'adminuser');  //local storage
  }
  getSession(){
    console.log(sessionStorage.getItem('userid'));  //session storage
    console.log(localStorage.getItem('userid'));  //local storage
    
  }
  removeStorage(){
    localStorage.clear();
  }

  setCookie(){
    console.log('in')
    this.cookies.set('userid', 'adminuser');
    this.cookies.set('user', 'employee');
    console.log(this.cookies.getAll())
  }
  getCookie(){
    console.log(this.cookies.get('userid'));
  }
  removeCookie(){ 
    this.cookies.delete('user');
  }
  removeAll(){
    this.cookies.deleteAll();
  }


}
