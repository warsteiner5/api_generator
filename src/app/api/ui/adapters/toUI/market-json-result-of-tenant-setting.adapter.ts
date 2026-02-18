import { ApiMarketJsonResultOfTenantSettingDto } from '../../../swagger/models/api-market-json-result-of-tenant-setting-dto';
import { MarketJsonResultOfTenantSetting } from '../../models/market-json-result-of-tenant-setting.interface';

export function adaptMarketJsonResultOfTenantSettingToUI(source?: ApiMarketJsonResultOfTenantSettingDto | null): MarketJsonResultOfTenantSetting {
  return (source ?? {}) as MarketJsonResultOfTenantSetting;
}
