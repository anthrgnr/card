import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

import { IPerson } from 'src/app/models/person';

@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss'],
    animations: [
        trigger('flipState', [
            state('true', style({
                transform: 'rotateY(180deg)'
            })),
            state('false', style({
                transform: 'rotateY(0)'
            })),
            transition('true => false', animate('500ms ease-out')),
            transition('false => true', animate('500ms ease-in'))
        ])
    ]
})
export default class CardComponent {
    @Input() person!: IPerson;
    flip: boolean = false;

    toggleFlip() {
        this.flip = this.flip ? false : true;
    }
}