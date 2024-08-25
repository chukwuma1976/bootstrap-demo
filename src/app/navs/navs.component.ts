import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navs',
  standalone: true,
  imports: [NgFor, NgbDropdownModule],
  templateUrl: './navs.component.html',
  styleUrl: './navs.component.css'
})
export class NavsComponent {
  navDisplays = [
    "nav",
    "nav justify-content-center",
    "nav justify-content-end",
    "nav flex-column",
    "nav nav-tabs",
    "nav nav-pills",
    "nav nav-underline",
    "nav nav-pills nav-fill",
    "nav nav-pills nav-justified",
    "nav nav-pills flex-column flex-sm-row"
  ];
  display = "nav";

  setDisplay(disp: string) {
    this.display = disp;
  }

}
