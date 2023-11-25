import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Cv } from '../model/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvApiService {
  private apiUrl = 'https://apilb.tridevs.net/explorer';

  constructor(private http: HttpClient) {}

  getCvs(): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/cvs`).pipe(
      catchError((error) => {
        console.error('Error fetching data from the API:', error);
        return of(FakeCvs);
      })
    );
  }
}

const FakeCvs: any[] = [];
