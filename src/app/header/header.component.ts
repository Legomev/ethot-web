import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  session = false;
  username: any;

  constructor(private localStorageService : LocalStorageService,  private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getLoggedInName.subscribe(name => this.username = name);
    let token = this.localStorageService.GetToken();
    if(token){
      this.session = true;
      this.username = token.username; 
    }

  }

  logout(){
    this.loginService.logout();
    this.localStorageService.RemoveSession();
  }


}
