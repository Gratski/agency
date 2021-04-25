import { Component, Input } from '@angular/core';

@Component({
  selector: 'model-card',
  templateUrl: './model_card.component.html',
  styleUrls: ['./model_card.component.css']
})
export class ModelCardComponent {
  
    @Input() id: string;
    @Input() name: string;
    @Input() age: number;
    @Input() height: string;
    @Input() pictureUrl: string;

}
