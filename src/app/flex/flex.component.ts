import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-flex',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './flex.component.html',
  styleUrl: './flex.component.css'
})
export class FlexComponent {
  flexDirections = [
    "d-flex flex-row mb-3",
    "d-flex flex-row-reverse mb-3",
    "d-flex flex-column mb-3",
    "d-flex flex-column-reverse"
  ]
  direction = "d-flex flex-row mb-3"
  justifyContentArray = [
    "d-flex justify-content-start",
    "d-flex justify-content-end",
    "d-flex justify-content-center",
    "d-flex justify-content-between",
    "d-flex justify-content-around",
    "d-flex justify-content-evenly"
  ]
  justifyContent = "d-flex align-items-start";
  alignmentArray = [
    "d-flex align-items-start",
    "d-flex align-items-end",
    "d-flex align-items-center",
    "d-flex align-items-baseline"
  ]
  alignment = "d-flex justify-content-start";

  alignSelfArray = [
    "d-flex align-self-start",
    "d-flex align-self-end",
    "d-flex align-self-center",
    "d-flex align-self-baseline"
  ]
  alignSelf = "d-flex justify-content-start";

  wrapArray = [
    "d-flex flex-wrap",
    "d-flex flex-wrap-reverse"
  ]
  wrap = "d-flex flex-wrap";

  setFlexDirection(flexDirection: string) {
    this.direction = flexDirection;
  }

  setJustifyContent(content: string) {
    this.justifyContent = content;
  }

  setAlignment(content: string) {
    this.alignment = content;
  }

  setAlignSelf(content: string) {
    this.alignSelf = content;
  }

  setWrap(content: string) {
    this.wrap = content;
  }
}
