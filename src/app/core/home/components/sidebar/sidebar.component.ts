import { Component, ElementRef } from '@angular/core';
import { LayoutService } from 'src/app/shared/service/sakai-layout/layout/sakai.layout.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}

