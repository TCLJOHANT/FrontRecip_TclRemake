import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputTextModule } from 'primeng/inputtext';
import { SidebarModule } from 'primeng/sidebar';
import { BadgeModule } from 'primeng/badge';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RippleModule } from 'primeng/ripple';
import { AppMenuitemComponent } from './app.menuitem.component';
import { RouterModule } from '@angular/router';
import { AppConfigModule } from './config/config.module';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
//de shared
import { CountryService } from 'src/app/shared/service/sakai-layout/demo/service/country.service';
import { CustomerService } from 'src/app/shared/service/sakai-layout/demo/service/customer.service';
import { EventService } from 'src/app/shared/service/sakai-layout/demo/service/event.service';
import { IconService } from 'src/app/shared/service/sakai-layout/demo/service/icon.service';
import { NodeService } from 'src/app/shared/service/sakai-layout/demo/service/node.service';
import { PhotoService } from 'src/app/shared/service/sakai-layout/demo/service/photo.service';
import { ProductService } from 'src/app/shared/service/sakai-layout/demo/service/product.service';



@NgModule({
    declarations: [
        AppMenuitemComponent,
        FooterComponent,
        NavbarComponent,
        HeaderComponent,
        SidebarComponent,
        InicioComponent,
    ],
    imports: [
        HomeRoutingModule,
        CommonModule,
        FormsModule,
        HttpClientModule,
        // BrowserAnimationsModule,
        InputTextModule,
        SidebarModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        RippleModule,
        RouterModule,
        AppConfigModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy },
        CountryService, CustomerService, EventService, IconService, NodeService,
        PhotoService, ProductService
    ],
    exports: [InicioComponent]
})
export class HomeModule { }

 