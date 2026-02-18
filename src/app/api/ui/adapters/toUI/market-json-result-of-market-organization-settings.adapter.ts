import { ApiMarketJsonResultOfMarketOrganizationSettings } from '../../../swagger/models/api-market-json-result-of-market-organization-settings';
import { MarketJsonResultOfMarketOrganizationSettings } from '../../models/market-json-result-of-market-organization-settings.interface';

export function adaptMarketJsonResultOfMarketOrganizationSettingsToUI(source?: ApiMarketJsonResultOfMarketOrganizationSettings | null): MarketJsonResultOfMarketOrganizationSettings {
  return (source ?? {}) as MarketJsonResultOfMarketOrganizationSettings;
}
