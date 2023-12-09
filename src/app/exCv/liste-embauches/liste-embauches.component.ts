import { Component, OnInit } from '@angular/core';
import { EmbaucheService } from '../services/embauche.service';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-list-embauches',
  templateUrl: './liste-embauches.component.html',
  styleUrls: ['./liste-embauches.component.css'],
})
export class ListeEmbauchesComponent implements OnInit {
  cvs: Cv[] = [];
  constructor(private embaucheService: EmbaucheService) {}

  ngOnInit(): void {
    this.cvs = this.embaucheService.getEmbauchees();
  }
}
