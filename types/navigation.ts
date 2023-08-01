import type {RouteProp} from '@react-navigation/native';

export type MainStackParamList = {
  
  Home: undefined;
  AdView: {url: string};
  SearchWeb: undefined;
};

export type AdViewScreenRouteProp = RouteProp<MainStackParamList, 'AdView'>;