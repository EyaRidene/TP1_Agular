import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { HttpClient } from '@angular/common/http';
import { Personne } from '../model/personne.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CvService {
  cvs: Cv[] = [];
  private link = 'https://apilb.tridevs.net/api/personnes';
  constructor(private http: HttpClient) {
    this.cvs = [
      new Cv(1, 'eya', 'ridene', 'eya.jpg', 'Software engineering Student'),
      new Cv(2, 'mariem', 'ksontini', 'mariem.jpg', 'Model'),
      new Cv(3, 'sandra', 'mourali', 'sandra.jpg', 'Data Scientist'),
      new Cv(4, 'hani', 'hadded', 'hani.jpg', 'Developper'),
      new Cv(5, 'mahmoud', 'nefzi', '', 'programmmer'),
    ];
  }
  getCvs(): Cv[] {
    return this.cvs;
  }

  // avoir la liste des cv à partir de l api
  getPersonnesFromApi(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.link);
  }

  getCvById(id: number): Cv | undefined {
    return this.cvs.find((cv) => cv.id == id);
  }

  addCv(cv: Cv): void {
    cv.id = this.cvs.length;
    this.cvs.push(cv);
  }

  addCvApi(cv: Cv): Observable<any> {
    return this.http.post(this.link, cv);
  }
}
