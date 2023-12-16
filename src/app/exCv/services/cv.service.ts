import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Personne } from '../model/personne.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CvService {
  cvs: Cv[] = [];
  private link = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(
        1,
        'eya',
        'ridene',
        'Software engineering Student',
        22,
        1111,
        'eya.jpg'
      ),
      new Cv(2, 'mariem', 'ksontini', 'Model', 22, 1111, 'mariem.jpg'),
      new Cv(3, 'sandra', 'mourali', 'Data Scientist', 22, 1111, 'sandra.jpg'),
      new Cv(4, 'hani', 'hadded', 'Developer', 22, 1111, 'hani.jpg'),
      new Cv(5, 'mahmoud', 'nefzi', '', 22, 1111, 'programmmer'),
    ];
  }

  // avoir la liste des fake cvs
  getCvs(): Cv[] {
    return this.cvs;
  }

  // avoir la liste des cv (personnes) à partir de l api - retourner un observable
  getPersonnesFromApi(): Observable<Cv[]> {
    return this.http.get<Cv[]>(this.link);
  }

  /*getCvById(id: number): Cv | undefined {
    return this.cvs.find((cv) => cv.id == id);
  }*/

  getCvById(id: number): Observable<Cv | null> {
    return this.http.get<Cv>(this.link + `/${id}`);
  }

  /*addCv(cv: Cv): void {
    cv.id = this.cvs.length;
    this.cvs.push(cv);
  }*/

  addCv(cv: Cv): Observable<any> {
    const token = localStorage.getItem('token');
    if (token) {
      const params = new HttpParams().set('access_token', token);
      return this.http.post(this.link, cv, { params });
    }
    return this.http.post(this.link, cv);
  }

  deleteCv(id: number) {
    return this.http.delete(this.link + `/${id}`);
  }
}
