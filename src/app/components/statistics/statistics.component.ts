import { Component, OnInit } from '@angular/core';
import { Pib } from '../../model/pib';
import { PibService } from '../../services/pib.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
pibs: Pib[];

  constructor(private router: Router, private service: PibService) { }

  ngOnInit() {
    this.service.getAllPibs().subscribe(data => (this.pibs = data));
  }

}
