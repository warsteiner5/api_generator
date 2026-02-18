import { MarketJsonResultOfRoleDetailResponse } from '../../models/market-json-result-of-role-detail-response.interface';
import { ApiMarketJsonResultOfRoleDetailResponse } from '../../../swagger/models/api-market-json-result-of-role-detail-response';

export function adaptApiMarketJsonResultOfRoleDetailResponse(source?: MarketJsonResultOfRoleDetailResponse | null): ApiMarketJsonResultOfRoleDetailResponse {
  return (source ?? {}) as ApiMarketJsonResultOfRoleDetailResponse;
}
