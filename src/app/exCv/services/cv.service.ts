import { Injectable } from '@angular/core';
import { Cv } from '../model/cv.model';
import { EmbaucheService } from './embauche.service';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { Personne } from '../model/personne.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  private selectCvSubject = new Subject<Cv>();
  private link = 'https://apilb.tridevs.net/api/personnes';
  selectCv$ = this.selectCvSubject.asObservable();
  private cvs: Cv[] = [
    new Cv(1, 'Ridene', 'Eya', 'eya.jpg', 'Student'),
    new Cv(2, 'Ksontini', 'Mariem', 'mariem.jpg', 'Model'),
    new Cv(3, 'Mourali', 'Sandra', 'sandra.jpg', 'scientist'),
    new Cv(4, 'Hadded', 'Hani', 'hani.jpg', 'Doctor'),
    new Cv(5, 'Nefzi', 'Mahmoud', '', 'programmer'),
  ];

  constructor(
    private embaucheService: EmbaucheService,
    private httpClient: HttpClient
  ) {}
  getCvs(): Cv[] {
    return this.cvs;
  }

  getPersonnesFromApi(): Observable<Personne[]> {
    return this.httpClient.get<Personne[]>(this.link);
  }

  selectCv(cv: Cv) {
    this.selectCvSubject.next(cv);
  }

  getCvById(id: number) {
    return this.cvs.find((cv) => cv.id === id);
  }

  deleteCv(id: number): void {
    const index = this.cvs.findIndex((cv) => cv.id === id);
    if (this.embaucheService.getCvById(id)) {
      this.embaucheService.deleteEmbauche(id);
    }
    if (index !== -1) {
      this.cvs.splice(index, 1);
    }
  }
}
