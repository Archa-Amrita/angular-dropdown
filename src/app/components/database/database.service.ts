import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private apiUrl = 'https://rb-mobileweb.de.bosch.com/Archa-Amrita-Roy/backend/testdb.php';

  constructor(private http: HttpClient) { }

  checkDatabaseConnection(): Observable<any> {
    return this.http.get<any>(this.apiUrl).pipe(
      tap(response => console.log('Response from server:', response)) // Logging the response
    );
  }
}
