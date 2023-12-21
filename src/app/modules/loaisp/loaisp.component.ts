import { Component } from '@angular/core';
import { LoaispService } from '../loaisp.service';

@Component({
  selector: 'app-loaisp',
  templateUrl: './loaisp.component.html',
  styleUrls: ['./loaisp.component.css']
})
export class LoaispComponent {
  LoaiSP: any[]=[]
  constructor(private dataService: LoaispService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.loaisp = response;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

}
