import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/app/theme.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(public themeService: ThemeService) {}
  ngOnInit(): void {}
  selectTheme(menu: any) {
    this.themeService.selectTheme(menu.id);
  }
}
