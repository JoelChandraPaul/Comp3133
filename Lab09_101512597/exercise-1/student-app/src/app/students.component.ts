import { Component } from '@angular/core';

@Component({
  selector: 'students',
  standalone: true,
  template: `<h1>{{ getTitleWithDate() }}</h1>`
})
export class StudentsComponent {
  title: string = 'Welcome to Students Component';

  getTitle(): string {
    return this.title;
  }

  getCurrentDate(): string {
    return new Date().toLocaleDateString();
  }

  getTitleWithDate(): string {
    return `${this.getTitle()} - ${this.getCurrentDate()}`;
  }
}