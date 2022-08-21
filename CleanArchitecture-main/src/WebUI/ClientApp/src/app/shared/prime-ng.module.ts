import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GalleriaModule} from 'primeng/galleria';
import {CarouselModule} from 'primeng/carousel';
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {ScrollTopModule} from 'primeng/scrolltop';
import {ChartModule} from 'primeng/chart';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import {TableModule} from 'primeng/table';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    GalleriaModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    ScrollTopModule,
    ChartModule,
    BreadcrumbModule,
    TableModule
  ],exports: [
    GalleriaModule,
    CarouselModule,
    ButtonModule,
    CardModule,
    ScrollTopModule,
    ChartModule,
    BreadcrumbModule,
    TableModule
  ]
})
export class PrimeNgModule { }
