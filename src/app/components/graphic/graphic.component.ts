import { Component, OnInit } from '@angular/core';
import { Pib } from '../../model/pib';
import { PibService } from '../../services/pib.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-graphic',
  templateUrl: './graphic.component.html',
  styleUrls: ['./graphic.component.css']
})
export class GraphicComponent implements OnInit {
  pibs: Pib[];
  years: Array<number> = new Array();
  percents: Array<number> = new Array();
  barChartData:any[];


  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };



  public barChartType:string = 'bar';
  public barChartLegend:boolean = true;

  constructor(private router: Router, private service: PibService) { }

  ngOnInit() {
      this.service.getAllPibs().subscribe(data => {
      this.pibs = data;
      this.createGraps();
    });

}


createGraps(){
 if(this.pibs){
   this.pibs.map((n: Pib) => {
     this.years.push(n.year);
   });

   this.pibs.map((n: Pib) => {
     this.percents.push(n.percent);
   });
}
   this.barChartData= [
   {data: this.percents, label: 'Porcentaje'}
   ];

 }
// events
public chartClicked(e:any):void {
console.log(e);
}

public chartHovered(e:any):void {
console.log(e);
}

}
