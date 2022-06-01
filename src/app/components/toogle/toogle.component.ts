import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-toogle',
  templateUrl: './toogle.component.html',
  styleUrls: ['./toogle.component.scss'],
})
export class ToogleComponent implements OnInit {
  menuOptions = [
    {
      id: 'light',
      title: 'Light Theme',
      icon: 'report',
      isDisabled: false,
    },
    {
      id: 'dark',
      title: 'Dark Theme',
      icon: 'vertical_align_bottom',
      isDisabled: false,
    },
  ];
  @Output() selectTheme = new EventEmitter<any>();
  constructor() {}

  ngOnInit(): void {}
  selectMenu(menu: any) {
    this.selectTheme.emit(menu);
  }
}
