import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SidemenuComponent } from "./component/sidemenu/sidemenu.component";
import { FormsModule } from '@angular/forms';
import { PortfolioComponent } from "./component/portfolio/portfolio.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SidemenuComponent, FormsModule, PortfolioComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio1';
}
