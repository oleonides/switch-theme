import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'app-pieces',
    templateUrl: './pieces.component.html',
    styleUrls: ['./pieces.component.scss'],
    // encapsulation: ViewEncapsulation.None
})
export class PiecesComponent implements OnInit {

    constructor() { }

    inputNumber = 1;
    city = '';
    selectedCities: string[] = [];

    ngOnInit(): void {
    }

}
