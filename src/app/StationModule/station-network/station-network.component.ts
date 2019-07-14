import { Component, OnInit, Input } from '@angular/core';
import { Network } from '../modles';

@Component({
  selector: 'app-station-network',
  templateUrl: './station-network.component.html',
  styleUrls: ['./station-network.component.css']
})
export class StationNetworkComponent implements OnInit {

  @Input() network: Network;

  constructor() { }

  ngOnInit() {
  }

}
