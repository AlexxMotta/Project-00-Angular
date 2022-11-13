import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css'],
})
export class FirstComponentComponent implements OnInit {
  persons = [
    {
      name: 'Alex',
      age: 20,
      job: 'Developer',
    },
    { name: 'Eduardo', age: 22, job: 'Nutritionist' },
  ];

  constructor() {}

  ngOnInit(): void {}
}
