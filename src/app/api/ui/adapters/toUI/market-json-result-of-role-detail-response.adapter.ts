import { ApiMarketJsonResultOfRoleDetailResponse } from '../../../swagger/models/api-market-json-result-of-role-detail-response';
import { MarketJsonResultOfRoleDetailResponse } from '../../models/market-json-result-of-role-detail-response.interface';

export function adaptMarketJsonResultOfRoleDetailResponseToUI(source?: ApiMarketJsonResultOfRoleDetailResponse | null): MarketJsonResultOfRoleDetailResponse {
  return (source ?? {}) as MarketJsonResultOfRoleDetailResponse;
}
