import { Component, OnInit } from '@angular/core';
import { donutChartOptions } from '../helpers/donutChartOptions';
import {Chart} from 'angular-highcharts';
@Component({
  selector: 'app-mychart',
  templateUrl: './mychart.component.html',
  styleUrls: ['./mychart.component.css']
})
export class MychartComponent {
  
   
 donutChart= new Chart(donutChartOptions);

}
