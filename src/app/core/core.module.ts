import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NotfoundComponent } from './demo/components/notfound/notfound.component';
import { CoreComponent } from './core.component';

@NgModule({
    declarations: [
    CoreComponent, NotfoundComponent,
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        // HomeModule
    ],

})
export class CoreModule { }
