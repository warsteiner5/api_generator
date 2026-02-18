import { MarketJsonResultOfListOfPowerOfAttorneyInfo } from '../../models/market-json-result-of-list-of-power-of-attorney-info.interface';
import { ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto } from '../../../swagger/models/api-market-json-result-of-list-of-power-of-attorney-info-dto';

export function adaptApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto(source?: MarketJsonResultOfListOfPowerOfAttorneyInfo | null): ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto;
}
