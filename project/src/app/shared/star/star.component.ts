import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'custom-rating',
    templateUrl: './star.component.html',
    styleUrls: [ './star.component.css' ]
})
export class StarComponent implements OnChanges {
    // Input Decorator
    @Input() rating: number;

    // Output Decorator
    @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

    starWidth: number;

    onClick() {
        this.ratingClicked.emit('This product is rated ' + this.rating.toString() + ' out of 5');
    }

    ngOnChanges(): void {
        this.starWidth = Math.floor(this.rating) * 75 / 5;
    }
}
