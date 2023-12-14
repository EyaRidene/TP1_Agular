import { Component, OnInit } from '@angular/core';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cv } from '../model/cv.model';
import { HttpClient } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.component.html',
  styleUrls: ['./page-detail.component.css'],
})
export class PageDetailComponent implements OnInit {
  cv: Cv | null = null;
  id: number | null = null;
  errorCv = false;
  constructor(
    private cvService: CvService,
    private activatedRoute: ActivatedRoute,
    private http: HttpClient,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      //this.cv = this.cvService.getCvById(params['id']);
      this.id = params['id'];
    });
    if (this.id) {
      this.cvService.getCvById(this.id).subscribe(
        (cv) => {
          this.cv = cv;
        },
        (error) => {
          this.errorCv = true;
          this.cv = null;
          this.toastr.error('Erreur lors de la récupération du cv');
        }
      );
    }
  }

  back() {
    this.router.navigate(['cv']);
  }

  deleteCv() {
    if (this.cv) {
      this.cvService.deleteCv(this.cv.id).subscribe(
        (response) => {
          this.router.navigate(['cv']);
        },
        (error) => {
          console.log(error);
          this.toastr.error('Erreur lors de la suppression du cv');
        }
      );
    }
  }
  /*deleteCv(id: number) {
    this.http.delete(`https://apilb.tridevs.net/api/personnes/${id}`).subscribe(
      () => {
        this.toastr.success('Cv supprimé avec succès');
        this.router.navigate(['/cv']);
      },
      (error) => {
        this.toastr.error('Erreur lors de la suppression du cv');
        setTimeout(() => {
          this.router.navigate(['/cv']);
        }, 2000);
      }
    );
  }*/
}
