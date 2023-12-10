import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-router-param',
  templateUrl: './router-param.component.html',
  styleUrls: ['./router-param.component.css'],
})
export class RouterParamComponent implements OnInit {
  constructor(private activatedRouter: ActivatedRoute) {}

  ngOnInit(): void {
    this.activatedRouter.params.subscribe((params) => {
      console.log(params);
      this.color = params['default'];
    });
  }

  color = 'lightblue';
}
