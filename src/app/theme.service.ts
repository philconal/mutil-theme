import { DOCUMENT } from '@angular/common';
import { Inject, Injectable, Renderer2 } from '@angular/core';

type ThemeType = 'light' | 'dark';
@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  theme: ThemeType = 'light';
  constructor(@Inject(DOCUMENT) private doc: Document) {
    this.initialize();
  }
  initialize() {
    this.removeAllThemes();
    const theme = (localStorage.getItem('appTheme') || 'light') as ThemeType;
    this.theme = theme;
    this.selectTheme(this.theme);
  }
  selectTheme(theme: ThemeType) {
    this.removeAllThemes();
    this.storage(theme);
    this.attachTheme(theme);
  }
  storage(theme: ThemeType) {
    localStorage.setItem('appTheme', theme);
  }
  attachTheme(theme: ThemeType) {
    const url = `${theme}-theme.css`;
    const link = this.doc.createElement('link') as HTMLLinkElement;
    link.href = url;
    link.rel = 'stylesheet';
    link.className = 'app-theme';
    const head = this.doc.querySelector('head');
    head?.appendChild(link);
  }

  removeAllThemes() {
    const themes = Array.from(this.doc.querySelectorAll('.app-theme'));
    themes.forEach((theme) => theme.remove());
  }
}
