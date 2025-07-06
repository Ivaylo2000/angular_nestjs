import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'input-with-image',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './input-with-image.component.html',
  styleUrls: ['./input-with-image.component.scss'],
})
export class InputWithImageComponent {
  @Input() type: string = 'text';
  @Input() placeholder: string = '';
  @Input() name: string = '';
  @Input() iconSrc: string = '';
  @Input() iconAlt: string = '';
  @Input() model: any;
  @Input() iconClass: string = '';

  @Output() modelChange = new EventEmitter<any>();
  @Output() iconClick = new EventEmitter<void>();

  onInputChange(value: any) {
    this.model = value;
    this.modelChange.emit(value);
  }

  onIconClick() {
    this.iconClick.emit();
  }
}
