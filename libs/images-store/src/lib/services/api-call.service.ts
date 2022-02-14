import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiCallService {
  constructor(private httpClient: HttpClient) {}

  getDataFromServer(url: string): Observable<any> {
    return this.httpClient.get(url);
  }
}
