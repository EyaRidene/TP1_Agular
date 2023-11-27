import { Observable, Subject, map, of, catchError } from 'rxjs';
import { Cv } from '../model/cv';
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Personne } from '../model/personne';
import { EmbaucheService } from './embauche.service';

@Injectable({ providedIn: 'root' })
export class CvService {
  private link = 'https://apilb.tridevs.net/api/personnes';
  private selectCv$: Subject<Cv> = new Subject();
  cv$: Observable<Cv>;

  cvs: Cv[] = [
    new Cv(1, 'sellaouti', 'aymen', 'as.jpg'),
    new Cv(2, 'sellaouti', 'skander', 'cv.png'),
    new Cv(2, 'Dhaouadi', 'yassine', ''),
    new Cv(2, 'Mourali', 'sandra', '              '),
  ];
  constructor(
    private httpClient: HttpClient,
    private embaucheService: EmbaucheService
  ) {
    this.cv$ = this.selectCv$.asObservable();
  }

  getCvs(): Observable<Cv[]> {
    return this.httpClient.get<Cv[]>(this.url).pipe(
      map((cvs) => {
        this.cvs = cvs;
        return cvs;
      }),
      catchError(() => {
        return of(this.cvs);
      })
    );
  }

  getCvById(id: number): Observable<Cv | null> {
    return this.httpClient.get<Cv>(this.link + id).pipe(
      map((cv) => cv),
      catchError((err) => {
        if (err.status == 0) {
          const cv = this.cvs.find((cv) => cv.id == id);
          if (cv) return of(cv);
        }
        return of(null);
      })
    );
  }
  selectCv(cv: Cv) {
    this.selectCv$.next(cv);
  }

  handleDeleteError(id: number): void {
    const index = this.cvs.findIndex((cv) => cv.id === id);
    if (index !== -1) {
      this.cvs.splice(index, 1);
    }
    this.embaucheService.deleteCv(id);
  }

  deleteCv(id: number): Observable<any> {
    return this.httpClient.delete(this.link + id);
  }
}
