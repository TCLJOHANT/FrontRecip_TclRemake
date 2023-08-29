import { CommonModule } from '@angular/common';
import { CoreRoutingModule } from './core-routing.module';
import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CoreComponent } from './core.component';

@NgModule({
    declarations: [
    CoreComponent
    ],
    imports: [
        CommonModule,
        CoreRoutingModule,
        // HomeModule
    ],

})
export class CoreModule { }
