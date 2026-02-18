import { MarketJsonResultOfSettingsAddedResponse } from '../../models/market-json-result-of-settings-added-response.interface';
import { ApiMarketJsonResultOfSettingsAddedResponse } from '../../../swagger/models/api-market-json-result-of-settings-added-response';

export function adaptApiMarketJsonResultOfSettingsAddedResponse(source?: MarketJsonResultOfSettingsAddedResponse | null): ApiMarketJsonResultOfSettingsAddedResponse {
  return (source ?? {}) as ApiMarketJsonResultOfSettingsAddedResponse;
}
