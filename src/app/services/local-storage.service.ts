import { Injectable, Output, EventEmitter } from '@angular/core';
import { TokenModel } from '../models/token.model';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();
  
  constructor() { }

  public SaveSession(token: TokenModel){
    let ethotSession = localStorage.getItem("ethot-session");
    if(ethotSession){
      this.getLoggedInName.emit('Sign in');
      return false;
    }
    else {
      let session = JSON.stringify(token);
      localStorage.setItem("ethot-session", session);
      this.getLoggedInName.emit(token.username);
      return true;
    }
  }

  public RemoveSession(){
    localStorage.removeItem("ethot-session");
    this.getLoggedInName.emit('Sign in');
  }

  public GetToken() : TokenModel
  {
    let tokenSaved : TokenModel = {
      username: "",
      token: ""
    };
    let ethotSession = localStorage.getItem("ethot-session");
    if(ethotSession){
      tokenSaved = JSON.parse(ethotSession);
      return tokenSaved;
    }
    return tokenSaved;
  }

}
