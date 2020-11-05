import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userIsLoggedIn: boolean = false
  title = 'bctca-ng-demo2';

logIn(): void {
  this.userIsLoggedIn = !this.userIsLoggedIn
}
logOutUser(): void {
  console.log('logOut event')
  this.userIsLoggedIn = !this.userIsLoggedIn
}
}
