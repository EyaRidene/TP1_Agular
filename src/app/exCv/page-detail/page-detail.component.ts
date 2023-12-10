import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute } from '@angular/router';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css'],
})
export class PageDetailComponent implements OnInit {
  cv: Cv | undefined = undefined;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      console.log(params);
      this.cv = this.cvService.getCvById(params['id']);
      console.log(this.cv);
    });
  }
}
