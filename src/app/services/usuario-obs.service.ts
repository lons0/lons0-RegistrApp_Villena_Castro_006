import { Injectable } from '@angular/core';
import { RegisterServService,Usuario } from './register-serv.service';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UsuarioObsService {


  user: Usuario=<Usuario>{};
  constructor(private registerServ:RegisterServService) { }
  
  private userSubject = new BehaviorSubject(this.user);

  getUserObservable(): Observable<Usuario>{
    return this.userSubject.asObservable();
  }

  private setUser(user:Usuario){
    this.user=user;
    this.userSubject.next(this.user);
  }
  


}
