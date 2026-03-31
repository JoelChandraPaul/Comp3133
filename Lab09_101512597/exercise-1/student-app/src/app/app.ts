import { Component } from '@angular/core';
import { StudentsComponent } from './students.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentsComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'student-app';
}