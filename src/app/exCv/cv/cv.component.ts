import { Component, OnInit, inject } from '@angular/core';
import { Cv } from '../model/cv';
import { CvService } from '../services/cv.service';
import { Observable, distinctUntilChanged } from 'rxjs';
import { EmbaucheService } from '../services/embauche.service';
import { Personne } from '../model/personne';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css'],
})
export class CvComponent implements OnInit {
  nb = 0;
  cvs: Cv[] = [];
  embaucheService = inject(EmbaucheService);
  embauches$: Observable<Cv[]> = this.embaucheService.embauches$;

  constructor(private cvService: CvService, private toastr: ToastrService) {}

  ngOnInit(): void {
    this.cvs = this.cvService.getCvs();
  }
}
