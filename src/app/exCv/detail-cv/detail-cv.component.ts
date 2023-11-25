import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Cv } from '../../model/cv.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css'],
})
export class DetailCvComponent {
  constructor(private router: Router) {}

  @Input() cv: Cv | null = null;
  @Output()
  addEmploye = new EventEmitter<number>();

  addembauche(id: number) {
    this.addEmploye.emit(this.cv?.id);
  }

  navigateToDetails(id: number): void {
    this.router.navigate(['/cv', id]);
  }
}
