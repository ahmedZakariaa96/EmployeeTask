import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { PrimeNgModule } from './prime-ng.module';
import { CustomBannerComponent } from './components/custom-banner/custom-banner.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { CustomGridComponent } from './components/custom-grid/custom-grid.component';
import { FooterComponent } from './components/footer/footer.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CollapseModule } from './components/collapse/collapse.module';

@NgModule({
  declarations: [
    CustomBannerComponent,
    CustomGridComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BsDropdownModule,
    CarouselModule.forRoot(),
    PrimeNgModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    CollapseModule,
    FormsModule
  ],exports:[
    BsDropdownModule,
    PrimeNgModule,
    CarouselModule,
    CustomBannerComponent,
    CustomGridComponent,
    FooterComponent,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatMenuModule,
    CollapseModule,
    FormsModule,
  ]
})
export class SharedModule { }
