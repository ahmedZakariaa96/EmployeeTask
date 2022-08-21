import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-grid',
  templateUrl: './custom-grid.component.html',
  styleUrls: ['./custom-grid.component.scss']
})
export class CustomGridComponent implements OnInit {
  @Input() data: any[] = ['','','','','','','','',''];
  @Input() isSponser: boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

}
