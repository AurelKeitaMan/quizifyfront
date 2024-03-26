import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.css'],
})
export class IconComponent {

  @Input() iconName:
    | 'pencil'
    | 'trash3'= 'trash3';

  @Input() iconColor = 'black';
  @Input() iconSize: number = 1.5;
}
