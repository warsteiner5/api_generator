import { ApiMarketJsonResultOfSettingsAddedResponse } from '../../../swagger/models/api-market-json-result-of-settings-added-response';
import { MarketJsonResultOfSettingsAddedResponse } from '../../models/market-json-result-of-settings-added-response.interface';

export function adaptMarketJsonResultOfSettingsAddedResponseToUI(source?: ApiMarketJsonResultOfSettingsAddedResponse | null): MarketJsonResultOfSettingsAddedResponse {
  return (source ?? {}) as MarketJsonResultOfSettingsAddedResponse;
}
