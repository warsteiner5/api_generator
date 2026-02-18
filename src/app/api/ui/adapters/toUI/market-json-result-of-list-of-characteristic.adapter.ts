import { ApiMarketJsonResultOfListOfCharacteristicDto } from '../../../swagger/models/api-market-json-result-of-list-of-characteristic-dto';
import { MarketJsonResultOfListOfCharacteristic } from '../../models/market-json-result-of-list-of-characteristic.interface';

export function adaptMarketJsonResultOfListOfCharacteristicToUI(source?: ApiMarketJsonResultOfListOfCharacteristicDto | null): MarketJsonResultOfListOfCharacteristic {
  return (source ?? {}) as MarketJsonResultOfListOfCharacteristic;
}
