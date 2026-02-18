import { MarketJsonResultOfIListOfOrgSetting } from '../../models/market-json-result-of-i-list-of-org-setting.interface';
import { ApiMarketJsonResultOfIListOfOrgSettingDto } from '../../../swagger/models/api-market-json-result-of-i-list-of-org-setting-dto';

export function adaptApiMarketJsonResultOfIListOfOrgSettingDto(source?: MarketJsonResultOfIListOfOrgSetting | null): ApiMarketJsonResultOfIListOfOrgSettingDto {
  return (source ?? {}) as ApiMarketJsonResultOfIListOfOrgSettingDto;
}
