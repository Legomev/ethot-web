import { Injectable } from '@angular/core';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  public SaveSession(token: TokenModel){
    let ethotSession = localStorage.getItem("ethot-session");
    if(ethotSession){
      return false;
    }
    else {
      let session = JSON.stringify(token);
      localStorage.setItem("ethot-session", session);
      return true;
    }
  }

  public RemoveSession(){
    localStorage.removeItem("ethot-session");
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
