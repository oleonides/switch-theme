import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Message } from 'primeng/api';

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
    msgs: Message[] = [];

    ngOnInit(): void {
        this.msgs = [
            {severity:'success', summary:'Success', detail:'Message Content'},
            {severity:'info', summary:'Info', detail:'Message Content'},
            {severity:'warn', summary:'Warning', detail:'Message Content'},
            {severity:'error', summary:'Error', detail:'Message Content'}
        ];
    }

}
