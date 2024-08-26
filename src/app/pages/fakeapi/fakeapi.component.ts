import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-fakeapi',
  standalone: true,
  imports: [NgIf],
  templateUrl: './fakeapi.component.html',
  styleUrl: './fakeapi.component.css'
})

export class FakeapiComponent {
  data: any;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.dataService.getData().subscribe({
      next: (response) => {
        setTimeout(() => {
          this.data = response;
        }, 2000);
      },
      error: (error) => {
        console.error('There was an error!', error);
      }
    });
  }
}