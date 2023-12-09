import { Component } from '@angular/core';
import { PremierService } from 'src/app/services/premier.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css'],
  providers: [PremierService], // pour avoir une autre instance du service
})
export class ClassComponent {
  constructor(private premierService: PremierService) {}

  teams = ['est', 'real madrid', 'milan', 'barca'];
  est = false;
  milan = false;
  real = true;
  show = true;

  changeTeam() {
    this.est = true;
    this.real = false;
    this.milan = false;
  }

  loggerData() {
    this.premierService.logger('test');
  }
}
