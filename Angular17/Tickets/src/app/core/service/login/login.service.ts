import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIConstant } from '../../constants/APIConstant';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) { }
  
  login(loginObj: any) {
    return this.http.post(APIConstant.API_URL + APIConstant.LOGIN, loginObj);
  }
}
