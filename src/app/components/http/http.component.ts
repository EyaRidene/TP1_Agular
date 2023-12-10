import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css'],
})
export class HttpComponent {
  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('http://jsonplaceholder.typicode.com/users').subscribe(
      (response) => {
        console.log('response', response);
      },
      (error) => {
        console.log('error', error);
      },
      () => {
        console.log('Complete :>');
      }
    );
  }
}
