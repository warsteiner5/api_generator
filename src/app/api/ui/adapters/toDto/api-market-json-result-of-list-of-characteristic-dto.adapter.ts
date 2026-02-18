import { MarketJsonResultOfListOfCharacteristic } from '../../models/market-json-result-of-list-of-characteristic.interface';
import { ApiMarketJsonResultOfListOfCharacteristicDto } from '../../../swagger/models/api-market-json-result-of-list-of-characteristic-dto';

export function adaptApiMarketJsonResultOfListOfCharacteristicDto(source?: MarketJsonResultOfListOfCharacteristic | null): ApiMarketJsonResultOfListOfCharacteristicDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfCharacteristicDto;
}
