import { MarketJsonResultOfMarketOrganizationSettings } from '../../models/market-json-result-of-market-organization-settings.interface';
import { ApiMarketJsonResultOfMarketOrganizationSettings } from '../../../swagger/models/api-market-json-result-of-market-organization-settings';

export function adaptApiMarketJsonResultOfMarketOrganizationSettings(source?: MarketJsonResultOfMarketOrganizationSettings | null): ApiMarketJsonResultOfMarketOrganizationSettings {
  return (source ?? {}) as ApiMarketJsonResultOfMarketOrganizationSettings;
}
