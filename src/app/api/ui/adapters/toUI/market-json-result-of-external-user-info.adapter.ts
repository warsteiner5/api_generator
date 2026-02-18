import { ApiMarketJsonResultOfExternalUserInfo } from '../../../swagger/models/api-market-json-result-of-external-user-info';
import { MarketJsonResultOfExternalUserInfo } from '../../models/market-json-result-of-external-user-info.interface';

export function adaptMarketJsonResultOfExternalUserInfoToUI(source?: ApiMarketJsonResultOfExternalUserInfo | null): MarketJsonResultOfExternalUserInfo {
  return (source ?? {}) as MarketJsonResultOfExternalUserInfo;
}
