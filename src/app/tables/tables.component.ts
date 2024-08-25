import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-tables',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './tables.component.html',
  styleUrl: './tables.component.css'
})
export class TablesComponent {
  tableClasses = [
    "table",
    "table table-striped",
    "table table-striped-columns",
    "table table-dark table-striped",
    "table table-dark table-striped-columns",
    "table table-success table-striped",
    "table table-success table-striped-columns",
    "table table-hover",
    "table table-dark table-hover",
    "table table-striped table-hover",
    "table table-bordered",
    "table table-bordered border-primary",
    "table table-borderless",
    "table table-dark table-borderless",
    "table table-sm",
    "table table-dark table-sm"
  ];
  currentClass = "table";

  tableHeadClasses = ["", "table-light", "table-dark"]
  currentHead = "";

  displayFooter = false;
  displayCaption = false;
  positionCaptionOnTop = false;

  setClass(tclass: string) {
    this.currentClass = tclass;
  }

  setTableHeadClass(tclass: string) {
    this.currentHead = tclass;
  }

  setDisplayCaption() {
    this.displayCaption = !this.displayCaption;
  }

  setDisplayFooter() {
    this.displayFooter = !this.displayFooter;
  }

  toggleDisplayCaption() {
    this.positionCaptionOnTop = !this.positionCaptionOnTop;
  }
}
