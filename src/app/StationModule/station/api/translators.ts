import { StationScannerData, Network, StationStatusData } from '../../modles';
import { ServerStationScanner, ServerNetwork, ServerStationStatus } from './serverModels';
import { List } from 'immutable';

export class StationServer2ServiceTranslator {

  public static translateNetwork(serverNetwork: ServerNetwork): Network {
    return new Network(serverNetwork);
  }

  public static translateStationScannerData(serverStationScanner: ServerStationScanner): StationScannerData {
    const networks: Network[] = [];
    for (const serverNetwork of serverStationScanner.networks) {
      networks.push(StationServer2ServiceTranslator.translateNetwork(serverNetwork));
    }
    return new StationScannerData(List<Network>(networks));
  }

  public static translateStationStatusData(serverStationStatus: ServerStationStatus): StationStatusData {
    const network: Network = StationServer2ServiceTranslator.translateNetwork(serverStationStatus.network);
    return new StationStatusData(serverStationStatus.isConnected, serverStationStatus.localIp, network);
  }
}

export class Service2StationServerTranslator {

  public static translateNetwork(network: Network): ServerNetwork {
    const serverNetwork: ServerNetwork = network;
    return serverNetwork;
  }



}
