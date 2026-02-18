import { MarketJsonResultOfExternalUserInfo } from '../../models/market-json-result-of-external-user-info.interface';
import { ApiMarketJsonResultOfExternalUserInfo } from '../../../swagger/models/api-market-json-result-of-external-user-info';

export function adaptApiMarketJsonResultOfExternalUserInfo(source?: MarketJsonResultOfExternalUserInfo | null): ApiMarketJsonResultOfExternalUserInfo {
  return (source ?? {}) as ApiMarketJsonResultOfExternalUserInfo;
}
