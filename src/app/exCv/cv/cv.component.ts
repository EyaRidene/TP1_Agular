import { Component, OnInit } from '@angular/core';
import { Cv } from '../../model/cv.model';
import { CvService } from '../../services/cv.service';
import { EmbaucheService } from '../../services/embauche.service';
//import { CvApiService } from '../../services/cv-api.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent {
  constructor(
    public cvService: CvService,
    public embaucheService: EmbaucheService
  ) {}

  cvs: Cv[] = this.cvService.getCvs();

  selectedCv: Cv | null = null;

  /*ngOnInit(): void {
    this.loadCvs();
  }*/

  showDetails(id: number) {
    this.selectedCv = this.cvService.getCvById(id) || null;
  }

  addEmploye(id: number) {
    const selectedCv = this.cvService.getCvById(id);

    if (selectedCv) {
      this.embaucheService.embaucher(selectedCv);
    } else {
      console.error(`No CV found for id ${id}`);
    }
  }

  /*private loadCvs(): void {
    this.cvApiService.getCvs().subscribe(
      (data) => {
        this.cvs = data;
      },
      (error) => {
        console.error('Error in API response:', error);
      }
    );
  }*/
}
