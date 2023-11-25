import { Component, OnInit } from '@angular/core';
import { Cv } from '../../model/cv.model';
import { EmbaucheService } from '../../services/embauche.service';

@Component({
  selector: 'app-list-embauches',
  templateUrl: './liste-embauches.component.html',
  styleUrls: ['./liste-embauches.component.css'],
})
export class ListeEmbauchesComponent implements OnInit {
  constructor(public embaucheService: EmbaucheService) {}
  cvs: Cv[] = [];
  ngOnInit(): void {
    this.cvs = this.embaucheService.getEmbauches();
  }
}
