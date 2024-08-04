import {Component, Input, OnInit} from '@angular/core';
import {TitleCasePipe} from "@angular/common";

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [
    TitleCasePipe
  ],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent implements OnInit {

  @Input() title: string

  constructor() {
  }

  ngOnInit() {
  }
}
