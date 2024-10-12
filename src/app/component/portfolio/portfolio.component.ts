import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {
  currentSection: string = 'about'; 
  email:string = 'kmanikanta4321@gmail.com';

  // Method to change the current section
  changeSection(section: string) {
    this.currentSection = section;
  }
}
