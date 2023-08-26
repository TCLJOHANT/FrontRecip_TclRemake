import { Component, OnInit } from '@angular/core';
import { PrimeNGConfig } from 'primeng/api';
@Component({
    selector: 'app-root',
    templateUrl: './core.component.html',
})
export class CoreComponent implements OnInit {

    constructor(private primengConfig: PrimeNGConfig) { }
    ngOnInit() {
        this.primengConfig.ripple = true;
    }
}
