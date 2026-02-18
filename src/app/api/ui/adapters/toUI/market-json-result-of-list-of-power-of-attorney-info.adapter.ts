import { ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto } from '../../../swagger/models/api-market-json-result-of-list-of-power-of-attorney-info-dto';
import { MarketJsonResultOfListOfPowerOfAttorneyInfo } from '../../models/market-json-result-of-list-of-power-of-attorney-info.interface';

export function adaptMarketJsonResultOfListOfPowerOfAttorneyInfoToUI(source?: ApiMarketJsonResultOfListOfPowerOfAttorneyInfoDto | null): MarketJsonResultOfListOfPowerOfAttorneyInfo {
  return (source ?? {}) as MarketJsonResultOfListOfPowerOfAttorneyInfo;
}
