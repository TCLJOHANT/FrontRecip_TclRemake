import { Component } from '@angular/core';
import { LayoutService } from 'src/app/shared/service/sakai-layout/layout/sakai.layout.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public layoutService: LayoutService) { }
}