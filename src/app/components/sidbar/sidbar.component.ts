import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-sidbar',
  templateUrl: './sidbar.component.html',
  styleUrls: ['./sidbar.component.css']
})
export class SidbarComponent implements OnInit {
  public loggedInn:boolean=false;
  constructor(
    private auth:AuthService ,
    private router:Router,
    private token:TokenService
  ) { }

  ngOnInit(): void {
    this.auth.authStatus.subscribe(value => this.loggedInn = value);
 } 
 logout(event: MouseEvent){
  event.preventDefault();
  this.token.remove();
  this.auth.changeAuthStatus(false);
  this.router.navigateByUrl('login');
}

}
