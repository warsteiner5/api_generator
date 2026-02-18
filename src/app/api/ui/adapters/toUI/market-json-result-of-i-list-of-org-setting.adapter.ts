import { ApiMarketJsonResultOfIListOfOrgSettingDto } from '../../../swagger/models/api-market-json-result-of-i-list-of-org-setting-dto';
import { MarketJsonResultOfIListOfOrgSetting } from '../../models/market-json-result-of-i-list-of-org-setting.interface';

export function adaptMarketJsonResultOfIListOfOrgSettingToUI(source?: ApiMarketJsonResultOfIListOfOrgSettingDto | null): MarketJsonResultOfIListOfOrgSetting {
  return (source ?? {}) as MarketJsonResultOfIListOfOrgSetting;
}
