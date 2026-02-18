import { MarketJsonResultOfTenantSetting } from '../../models/market-json-result-of-tenant-setting.interface';
import { ApiMarketJsonResultOfTenantSettingDto } from '../../../swagger/models/api-market-json-result-of-tenant-setting-dto';

export function adaptApiMarketJsonResultOfTenantSettingDto(source?: MarketJsonResultOfTenantSetting | null): ApiMarketJsonResultOfTenantSettingDto {
  return (source ?? {}) as ApiMarketJsonResultOfTenantSettingDto;
}
