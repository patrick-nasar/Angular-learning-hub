import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-objects',
  standalone: true,
  imports: [NgFor, NgIf, FormsModule],
  templateUrl: './objects.component.html',
  styleUrl: './objects.component.css'
})
export class ObjectsComponent {
  users: { firstName: string, LastName: string, phoneNumber: number, selectedSex: string }[] = []

  selectedSex: string = '';
  sexOptions = [
    { id: 'Male', name: ' Male' },
    { id: 'Female', name: ' Female' },
    { id: 'Other', name: ' Other' }
  ];

  submitForm(firstName: string, LastName: string, phoneNumber: number, selectedSex: string) {
    if (firstName === '' || LastName === '' || phoneNumber === 0 || selectedSex === '') {
      console.log('Empty')
    }
    else {
      this.users.push({ firstName: firstName, LastName: LastName, phoneNumber: phoneNumber, selectedSex: selectedSex })
      console.log(this.users)
    }
  }

}
