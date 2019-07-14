import { Component, OnInit, Input } from '@angular/core';
import { StationScanner, Network } from '../modles';
import { List } from 'immutable';
import { NgRedux, dispatch } from '@angular-redux/store';
import { AppState } from '../../store/app.state';
import { StationServiceActionCreator } from '../station/api/StationServiceActionCreator';
import { StationNetworkActionCreator } from '../station-network/stationNetworkActionReducer';

@Component({
  selector: 'app-station-scanner',
  templateUrl: './station-scanner.component.html',
  styleUrls: ['./station-scanner.component.css']
})
export class StationScannerComponent implements OnInit {

  @Input() stationScanner: StationScanner;
  //  networks: List<Network>;

  constructor(private _ngRedux: NgRedux<AppState>) {
    //  const network1: Network = new Network({SSID: 'SSID1'});
    //  const network2: Network = new Network({SSID: 'SSID2', autoConnect: true});
    //  this.networks = List<Network>([network1, network2]);
  }

  ngOnInit() {
  }

  getKey(_, network: Network) {
    return network.SSID;
  }

  connectToNetwork(network: Network) {
    this._ngRedux.dispatch(StationServiceActionCreator.sendConnectToNetReqAction(network));
  }

  refreshStatus() {
    this._ngRedux.dispatch(StationServiceActionCreator.getNearbyNetworksAction());
  }

  autoConnectChanged(isChecked: boolean, network: Network) {
    this._ngRedux.dispatch(StationNetworkActionCreator.changeNetworkAutoconnectAction(network, isChecked));
  }

  networkPasswordChange(pass: string, network: Network) {
    this._ngRedux.dispatch(StationNetworkActionCreator.changeNetworkPassAction(network, pass));
  }

}
