import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/shared/service/sakai-layout/sakai.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {

    constructor(public layoutService: LayoutService, public router: Router) { }
    
}
