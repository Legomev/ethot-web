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

  constructor(private localStorageService : LocalStorageService) { }

  ngOnInit(): void {
    this.localStorageService.getLoggedInName.subscribe(name => this.changeName(name));
    let token = this.localStorageService.GetToken();
    if(token){
      this.session = true;
      this.username = token.username; 
    }
  }

  private changeName(name: string): void {
    if(name == 'Sign in')
      this.session = false;
    else{
      this.username = name;
      this.session = true;
    }
}

  logout(){
    this.session = false;
    this.localStorageService.RemoveSession();
  }
}
