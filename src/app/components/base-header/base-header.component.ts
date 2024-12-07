import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IonicModule} from "@ionic/angular";

@Component({
  selector: 'app-base-header',
  templateUrl: './base-header.component.html',
  styleUrls: ['./base-header.component.scss'],
  imports: [
    IonicModule
  ],
  standalone: true
})
export class BaseHeaderComponent implements OnInit {
  @Input() title: string;
  @Input() description: string;
  @Output() handleBackClick = new EventEmitter<void>();


  constructor() {
  }

  ngOnInit() {
  }

  backClick() {
    this.handleBackClick.emit();
  }
}
