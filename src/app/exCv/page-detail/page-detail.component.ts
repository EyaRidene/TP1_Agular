// cv-detail.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv.service';
import { Cv } from '../../model/cv.model';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css'],
})
export class PageDetailComponent implements OnInit {
  cv: Cv | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cvService: CvService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const id = +params['id'];
      const cv = this.cvService.getCvById(id);

      if (cv) {
        this.cv = cv;
      } else {
        console.error(`No CV found for id ${id}`);
      }
    });
  }

  deleteCv(): void {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id);
      this.router.navigate(['/cv']);
    }
  }
}
