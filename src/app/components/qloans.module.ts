import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { QLoansHomeComponent } from './home/qloans.home.component';
import { QLoansAboutComponent } from './about/qloans.about.component';
import { QLoansServicesComponent } from './services/qloans.services.component';
import { QLoansTestimonialsComponent } from './testimonials/qloans.testimonials.component';
import { QLoansContactComponent } from './contact/qloans.contact.component';
import { AzureService } from 'app/shared/services/azure.service';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
    declarations: [
        QLoansHomeComponent,
        QLoansAboutComponent,
        QLoansServicesComponent,
        QLoansTestimonialsComponent,
        QLoansContactComponent
    ],
    providers: [
        AzureService
    ]
})
export class OrkinBrownModule { }
